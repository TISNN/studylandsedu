import { memo, useCallback, useMemo, useRef, useState, type MouseEvent } from "react"
import { motion, useAnimationControls } from "framer-motion"
import { v4 as uuidv4 } from "uuid"

import { useDimensions } from "@/hooks/use-debounced-dimensions"
import { cn } from "@/lib/utils"

interface PixelTrailProps {
  pixelSize: number
  fadeDuration?: number
  delay?: number
  className?: string
  pixelClassName?: string
}

export function PixelTrail({
  pixelSize = 20,
  fadeDuration = 500,
  delay = 0,
  className,
  pixelClassName,
}: PixelTrailProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const dimensions = useDimensions(containerRef)
  const [trailId] = useState(() => uuidv4())

  const handleMouseMove = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const x = Math.floor((e.clientX - rect.left) / pixelSize)
      const y = Math.floor((e.clientY - rect.top) / pixelSize)

      const pixelElement = document.getElementById(
        `${trailId}-pixel-${x}-${y}`,
      )

      if (!pixelElement) return

      const animatePixel = (pixelElement as HTMLDivElement & {
        __animatePixel?: () => void
      }).__animatePixel

      animatePixel?.()
    },
    [pixelSize, trailId],
  )

  const columns = useMemo(
    () => Math.ceil(dimensions.width / pixelSize),
    [dimensions.width, pixelSize],
  )
  const rows = useMemo(
    () => Math.ceil(dimensions.height / pixelSize),
    [dimensions.height, pixelSize],
  )

  return (
    <div
      ref={containerRef}
      className={cn("absolute inset-0 h-full w-full pointer-events-auto", className)}
      onMouseMove={handleMouseMove}
    >
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={rowIndex} className="flex">
          {Array.from({ length: columns }).map((_, colIndex) => (
            <PixelDot
              key={`${colIndex}-${rowIndex}`}
              id={`${trailId}-pixel-${colIndex}-${rowIndex}`}
              size={pixelSize}
              fadeDuration={fadeDuration}
              delay={delay}
              className={pixelClassName}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

interface PixelDotProps {
  id: string
  size: number
  fadeDuration: number
  delay: number
  className?: string
}

const PixelDot = memo(function PixelDot({
  id,
  size,
  fadeDuration,
  delay,
  className,
}: PixelDotProps) {
  const controls = useAnimationControls()

  const animatePixel = useCallback(() => {
    controls.start({
      opacity: [1, 0],
      transition: {
        duration: fadeDuration / 1000,
        delay: delay / 1000,
      },
    })
  }, [controls, delay, fadeDuration])

  const ref = useCallback(
    (node: HTMLDivElement | null) => {
      if (node) {
        ;(
          node as HTMLDivElement & {
            __animatePixel?: () => void
          }
        ).__animatePixel = animatePixel
      }
    },
    [animatePixel],
  )

  return (
    <motion.div
      id={id}
      ref={ref}
      className={cn("pointer-events-none", className)}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
      initial={{ opacity: 0 }}
      animate={controls}
      exit={{ opacity: 0 }}
    />
  )
})
