import ScrollMorphHero from '@/components/ui/scroll-morph-hero';

const OFFER_IMAGES = [
  '/assets/images/offer/3.png',
  '/assets/images/offer/4.png',
  '/assets/images/offer/5.png',
  '/assets/images/offer/6.png',
  '/assets/images/offer/7.png',
  '/assets/images/offer/8.png',
  '/assets/images/offer/9.png',
  '/assets/images/offer/10.png',
  '/assets/images/offer/11.png',
  '/assets/images/offer/12.png',
  '/assets/images/offer/13.png',
  '/assets/images/offer/14.png',
  '/assets/images/offer/16.png',
  '/assets/images/offer/17.png',
  '/assets/images/offer/18.png',
  '/assets/images/offer/19.png',
  '/assets/images/offer/20.png',
  '/assets/images/offer/21.png',
  '/assets/images/offer/22.png',
  '/assets/images/offer/24.png',
];

export function OfferShowcaseSection() {
  return (
    <section className="offer-showcase section-gap">
      <div className="brand-container">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#20ad96]">StudyLandsEdu</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900">OFFER战绩榜</h2>
          <p className="mt-2 text-sm text-slate-500">2023-2024 年节选</p>
        </div>

        <div className="mt-10 h-[560px] w-full overflow-hidden rounded-2xl md:h-[760px]">
          <ScrollMorphHero
            images={OFFER_IMAGES}
            maxCards={20}
            introTitle="The future is built on results."
            introSubtitle="向下滚动探索录取成果"
            activeTitle="Offer 战绩长廊"
            activeSubtitle="从分散到成列，再到弧线聚合，滑动查看每一份录取结果。"
          />
        </div>
      </div>
    </section>
  );
}
