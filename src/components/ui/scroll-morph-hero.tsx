'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

export type AnimationPhase = 'scatter' | 'line' | 'circle';

type CardTarget = {
  x: number;
  y: number;
  rotation: number;
  scale: number;
  opacity: number;
};

interface FlipCardProps {
  src: string;
  index: number;
  target: CardTarget;
  reducedMotion: boolean;
  onViewDetails: (src: string, index: number) => void;
}

interface ScrollMorphHeroProps {
  images?: string[];
  introTitle?: string;
  introSubtitle?: string;
  activeTitle?: string;
  activeSubtitle?: string;
  maxCards?: number;
  className?: string;
}

const IMG_WIDTH = 60;
const IMG_HEIGHT = 85;
const MAX_SCROLL = 3000;
const MOBILE_BREAKPOINT = 768;
const WHEEL_SENSITIVITY = 0.78;
const TOUCH_SENSITIVITY = 0.9;
const MAX_ROTATION_DEGREES = 320;
const MAX_ROTATION_FACTOR = 0.72;
const PARALLAX_RANGE = 72;

const DEFAULT_IMAGES = [
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&q=80',
  'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=300&q=80',
  'https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&q=80',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&q=80',
  'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=300&q=80',
  'https://images.unsplash.com/photo-1506765515384-028b60a970df?w=300&q=80',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&q=80',
  'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=300&q=80',
  'https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?w=300&q=80',
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&q=80',
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&q=80',
  'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=300&q=80',
  'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=300&q=80',
  'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=300&q=80',
  'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=300&q=80',
  'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=300&q=80',
  'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=300&q=80',
  'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=300&q=80',
  'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=300&q=80',
  'https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?w=300&q=80',
];

const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));
const lerp = (start: number, end: number, t: number) => start * (1 - t) + end * t;
const seededNoise = (seed: number) => {
  const value = Math.sin(seed * 9999) * 10000;
  return value - Math.floor(value);
};

function FlipCard({ src, index, target, reducedMotion, onViewDetails }: FlipCardProps) {
  return (
    <motion.div
      animate={{
        x: target.x,
        y: target.y,
        rotate: target.rotation,
        scale: target.scale,
        opacity: target.opacity,
      }}
      transition={
        reducedMotion
          ? { duration: 0 }
          : {
              type: 'spring',
              stiffness: 40,
              damping: 15,
            }
      }
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        width: IMG_WIDTH,
        height: IMG_HEIGHT,
        marginLeft: -IMG_WIDTH / 2,
        marginTop: -IMG_HEIGHT / 2,
        transformStyle: 'preserve-3d',
        perspective: '1000px',
        willChange: 'transform',
      }}
      className="group cursor-pointer"
    >
      <motion.div
        className="relative h-full w-full"
        style={{ transformStyle: 'preserve-3d' }}
        transition={reducedMotion ? { duration: 0 } : { duration: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={reducedMotion ? undefined : { rotateY: 180 }}
      >
        <div className="absolute inset-0 h-full w-full overflow-hidden rounded-xl bg-gray-200 shadow-lg" style={{ backfaceVisibility: 'hidden' }}>
          <img src={src} alt={`offer-${index + 1}`} className="h-full w-full object-cover" loading="lazy" decoding="async" draggable={false} />
          <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent" />
        </div>

        <button
          type="button"
          className="absolute inset-0 flex h-full w-full cursor-pointer flex-col items-center justify-center overflow-hidden rounded-xl border border-gray-700 bg-gray-900 p-4 text-center transition-colors hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18b7a0] focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
          onClick={(event) => {
            event.stopPropagation();
            onViewDetails(src, index);
          }}
          aria-label={`查看第 ${index + 1} 份录取结果详情`}
        >
          <span className="mb-1 text-[8px] font-bold uppercase tracking-widest text-blue-400">View</span>
          <span className="text-xs font-medium text-white">Details</span>
        </button>
      </motion.div>
    </motion.div>
  );
}

export default function ScrollMorphHero({
  images = DEFAULT_IMAGES,
  introTitle = 'The future is built on AI.',
  introSubtitle = 'SCROLL TO EXPLORE',
  activeTitle = 'Explore Our Vision',
  activeSubtitle = 'Scroll through our curated collection of innovations designed to shape the future.',
  maxCards = 20,
  className,
}: ScrollMorphHeroProps) {
  const reducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const safeZoneRef = useRef<HTMLDivElement>(null);
  const mobileRailRef = useRef<HTMLDivElement>(null);

  const [introPhase, setIntroPhase] = useState<AnimationPhase>(reducedMotion ? 'circle' : 'scatter');
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [safeHalfDiagonal, setSafeHalfDiagonal] = useState(220);
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);

  const displayImages = useMemo(() => images.slice(0, maxCards), [images, maxCards]);

  const virtualScroll = useMotionValue(reducedMotion ? 600 : 0);
  const scrollRef = useRef(reducedMotion ? 600 : 0);

  const morphProgress = useTransform(virtualScroll, [0, 600], [0, 1]);
  const smoothMorph = useSpring(morphProgress, { stiffness: 40, damping: 20 });

  const scrollRotate = useTransform(virtualScroll, [600, MAX_SCROLL], [0, MAX_ROTATION_DEGREES]);
  const smoothScrollRotate = useSpring(scrollRotate, { stiffness: 40, damping: 20 });

  const mouseX = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 30, damping: 20 });

  const [morphValue, setMorphValue] = useState(reducedMotion ? 1 : 0);
  const [rotateValue, setRotateValue] = useState(0);
  const [parallaxValue, setParallaxValue] = useState(0);
  const [selectedOffer, setSelectedOffer] = useState<{ src: string; index: number } | null>(null);

  const isMobileLayout = (containerSize.width || 0) < MOBILE_BREAKPOINT;

  const scatterPositions = useMemo(
    () =>
      displayImages.map((_, index) => ({
        x: (seededNoise(index + 11) - 0.5) * 1500,
        y: (seededNoise(index + 29) - 0.5) * 1000,
        rotation: (seededNoise(index + 47) - 0.5) * 180,
        scale: 0.6,
        opacity: 0,
      })),
    [displayImages],
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerSize({ width: entry.contentRect.width, height: entry.contentRect.height });
      }
    });

    observer.observe(container);
    setContainerSize({ width: container.offsetWidth, height: container.offsetHeight });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const safeZone = safeZoneRef.current;
    if (!safeZone) return;

    const updateSafeArea = () => {
      const bounds = safeZone.getBoundingClientRect();
      const diagonal = Math.sqrt((bounds.width / 2) ** 2 + (bounds.height / 2) ** 2);
      setSafeHalfDiagonal(diagonal || 220);
    };

    const observer = new ResizeObserver(() => {
      updateSafeArea();
    });

    observer.observe(safeZone);
    updateSafeArea();

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      virtualScroll.set(600);
      return;
    }

    const timer1 = window.setTimeout(() => setIntroPhase('line'), 500);
    const timer2 = window.setTimeout(() => setIntroPhase('circle'), 2500);

    return () => {
      window.clearTimeout(timer1);
      window.clearTimeout(timer2);
    };
  }, [reducedMotion, virtualScroll]);

  const effectiveIntroPhase: AnimationPhase = reducedMotion ? 'circle' : introPhase;

  useEffect(() => {
    const unsubscribeMorph = smoothMorph.on('change', (value) => setMorphValue(reducedMotion ? 1 : value));
    const unsubscribeRotate = smoothScrollRotate.on('change', setRotateValue);
    const unsubscribeParallax = smoothMouseX.on('change', setParallaxValue);

    return () => {
      unsubscribeMorph();
      unsubscribeRotate();
      unsubscribeParallax();
    };
  }, [reducedMotion, smoothMorph, smoothMouseX, smoothScrollRotate]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || reducedMotion || isMobileLayout) return;

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      const delta = event.deltaY * WHEEL_SENSITIVITY;
      const next = clamp(scrollRef.current + delta, 0, MAX_SCROLL);
      scrollRef.current = next;
      virtualScroll.set(next);
    };

    let touchStartY = 0;
    const handleTouchStart = (event: TouchEvent) => {
      if (!event.touches.length) return;
      touchStartY = event.touches[0].clientY;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (!event.touches.length) return;
      const touchY = event.touches[0].clientY;
      const deltaY = (touchStartY - touchY) * TOUCH_SENSITIVITY;
      touchStartY = touchY;
      const next = clamp(scrollRef.current + deltaY, 0, MAX_SCROLL);
      scrollRef.current = next;
      virtualScroll.set(next);
      event.preventDefault();
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('touchstart', handleTouchStart, { passive: false });
    container.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isMobileLayout, reducedMotion, virtualScroll]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || reducedMotion || isMobileLayout) return;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const normalizedX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouseX.set(normalizedX * PARALLAX_RANGE);
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, [isMobileLayout, mouseX, reducedMotion]);

  useEffect(() => {
    const rail = mobileRailRef.current;
    if (!rail || !isMobileLayout) return;

    const handleScroll = () => {
      const cards = Array.from(rail.querySelectorAll<HTMLElement>('[data-offer-card]'));
      if (!cards.length) return;

      const center = rail.scrollLeft + rail.clientWidth / 2;
      let nearestIndex = 0;
      let nearestDistance = Number.POSITIVE_INFINITY;

      cards.forEach((card, index) => {
        const cardCenter = card.offsetLeft + card.clientWidth / 2;
        const distance = Math.abs(cardCenter - center);
        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestIndex = index;
        }
      });

      setMobileActiveIndex((current) => (current === nearestIndex ? current : nearestIndex));
    };

    rail.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => rail.removeEventListener('scroll', handleScroll);
  }, [displayImages.length, isMobileLayout]);

  const contentOpacity = useTransform(smoothMorph, [0.8, 1], [0, 1]);
  const contentY = useTransform(smoothMorph, [0.8, 1], [20, 0]);
  const openOfferDetails = (src: string, index: number) => setSelectedOffer({ src, index });
  const closeOfferDetails = () => setSelectedOffer(null);

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative h-full w-full overflow-hidden rounded-2xl border border-[#dcece7] bg-[radial-gradient(120%_100%_at_50%_-10%,rgba(32,173,150,0.12),rgba(255,255,255,0)_56%),#fbfffe]',
        className,
      )}
    >
      <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center">
        <div
          ref={safeZoneRef}
          className={cn(
            'pointer-events-none absolute left-1/2 top-1/2 z-0 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center px-4 text-center transition-opacity duration-300',
            isMobileLayout ? 'opacity-0' : 'opacity-100',
          )}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={
              reducedMotion
                ? { opacity: 0, filter: 'blur(10px)' }
                : effectiveIntroPhase === 'circle' && morphValue < 0.5
                  ? { opacity: 1 - morphValue * 2, y: 0, filter: 'blur(0px)' }
                  : { opacity: 0, filter: 'blur(10px)' }
            }
            transition={{ duration: 0.8 }}
            className="max-w-[620px] text-2xl font-semibold tracking-tight text-gray-800 md:text-3xl"
          >
            {introTitle}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={
              reducedMotion
                ? { opacity: 0 }
                : effectiveIntroPhase === 'circle' && morphValue < 0.5
                  ? { opacity: 0.5 - morphValue }
                  : { opacity: 0 }
            }
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-4 text-xs font-bold tracking-[0.18em] text-gray-500"
          >
            {introSubtitle}
          </motion.p>
        </div>

        {!isMobileLayout && (
          <motion.div
            style={{ opacity: reducedMotion ? 1 : contentOpacity, y: reducedMotion ? 0 : contentY }}
            className="pointer-events-none absolute top-[10%] z-10 flex flex-col items-center justify-center px-4 text-center"
          >
            <h2 className="mb-4 max-w-[620px] text-2xl font-semibold tracking-tight text-gray-900 md:text-4xl">{activeTitle}</h2>
            <p className="max-w-lg text-sm leading-relaxed text-gray-600 md:text-base">{activeSubtitle}</p>
          </motion.div>
        )}

        {isMobileLayout ? (
          <div className="relative z-10 flex h-full w-full flex-col px-4 py-8">
            <div className="text-center">
              <h2 className="text-2xl font-semibold tracking-tight text-gray-900">{activeTitle}</h2>
              <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-gray-600">{activeSubtitle}</p>
            </div>

            <div className="mt-8 flex-1">
              <div ref={mobileRailRef} className="flex h-full snap-x snap-mandatory gap-3 overflow-x-auto px-1 pb-5 pt-2">
                {displayImages.map((src, index) => {
                  const isActive = index === mobileActiveIndex;
                  return (
                    <button
                      key={`${src}-${index}`}
                      type="button"
                      data-offer-card
                      onClick={(event) => {
                        event.currentTarget.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                        openOfferDetails(src, index);
                      }}
                      className={cn(
                        'relative h-[176px] w-[124px] shrink-0 snap-center overflow-hidden rounded-xl border border-[#dcece7] bg-white transition-transform duration-300',
                        isActive ? 'scale-[1.04]' : 'scale-100',
                      )}
                      aria-label={`查看第 ${index + 1} 份录取结果`}
                    >
                      <img src={src} alt={`offer-mobile-${index + 1}`} className="h-full w-full object-cover" loading="lazy" decoding="async" draggable={false} />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          <div className="relative h-full w-full">
            {displayImages.map((src, index) => {
              const total = displayImages.length;
              const isCompact = containerSize.width < 1200;
              const minDimension = Math.min(containerSize.width || 1200, containerSize.height || 760);

              const morph = reducedMotion ? 1 : morphValue;
              const rotateProgress = reducedMotion ? 0 : clamp(rotateValue / MAX_ROTATION_DEGREES, 0, 1);

              const safeRadius = safeHalfDiagonal + (isCompact ? 120 : 150);
              const radiusFactor = isCompact ? 0.52 : 0.58;
              const circleRadiusBase = Math.min(minDimension * radiusFactor, isCompact ? 390 : 460);
              const circleRadius = Math.max(circleRadiusBase, safeRadius);

              const spreadAngle = isCompact ? 116 : 130;
              const baseRadius = Math.min(containerSize.width || 1200, (containerSize.height || 760) * 1.5);
              const arcRadius = Math.max(baseRadius * (isCompact ? 1.15 : 1.2), safeRadius + (isCompact ? 150 : 185));
              const arcApexY = (containerSize.height || 760) * (isCompact ? 0.29 : 0.24);
              const arcCenterY = arcApexY + arcRadius;

              const circleAngle = (index / total) * 360;
              const circleRad = (circleAngle * Math.PI) / 180;
              const circlePos = {
                x: Math.cos(circleRad) * circleRadius,
                y: Math.sin(circleRad) * circleRadius,
                rotation: circleAngle + 90,
              };

              const startAngle = -90 - spreadAngle / 2;
              const step = spreadAngle / Math.max(total - 1, 1);
              const boundedRotation = -rotateProgress * (spreadAngle * MAX_ROTATION_FACTOR);
              const currentArcAngle = startAngle + index * step + boundedRotation;
              const arcRad = (currentArcAngle * Math.PI) / 180;

              const arcPos = {
                x: Math.cos(arcRad) * arcRadius + parallaxValue,
                y: Math.sin(arcRad) * arcRadius + arcCenterY,
                rotation: currentArcAngle + 90,
                scale: isCompact ? 1.42 : 1.6,
              };

              let target: CardTarget;
              if (effectiveIntroPhase === 'scatter' && !reducedMotion) {
                target = scatterPositions[index] as CardTarget;
              } else if (effectiveIntroPhase === 'line' && !reducedMotion) {
                const lineSpacing = isCompact ? 72 : 76;
                const lineTotalWidth = total * lineSpacing;
                target = {
                  x: index * lineSpacing - lineTotalWidth / 2,
                  y: 0,
                  rotation: 0,
                  scale: 1,
                  opacity: 1,
                };
              } else {
                target = {
                  x: lerp(circlePos.x, arcPos.x, morph),
                  y: lerp(circlePos.y, arcPos.y, morph),
                  rotation: lerp(circlePos.rotation, arcPos.rotation, morph),
                  scale: lerp(1, arcPos.scale, morph),
                  opacity: 1,
                };
              }

              return (
                <FlipCard
                  key={`${src}-${index}`}
                  src={src}
                  index={index}
                  target={target}
                  reducedMotion={!!reducedMotion}
                  onViewDetails={openOfferDetails}
                />
              );
            })}
          </div>
        )}
      </div>

      {selectedOffer && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-slate-950/72 px-4 py-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`第 ${selectedOffer.index + 1} 份录取结果详情`}
          onClick={closeOfferDetails}
        >
          <div className="relative max-h-full max-w-[min(92vw,720px)] overflow-hidden rounded-2xl border border-white/18 bg-white shadow-2xl" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="absolute right-3 top-3 z-10 rounded-full bg-slate-950/70 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18b7a0]"
              onClick={closeOfferDetails}
              aria-label="关闭录取结果详情"
            >
              关闭
            </button>
            <img
              src={selectedOffer.src}
              alt={`offer-detail-${selectedOffer.index + 1}`}
              className="max-h-[82vh] w-full object-contain"
              loading="eager"
              decoding="async"
              draggable={false}
            />
          </div>
        </div>
      )}
    </div>
  );
}
