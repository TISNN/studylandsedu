import { GooeyFilter } from "@/components/ui/gooey-filter"
import { PixelTrail } from "@/components/ui/pixel-trail"
import { useScreenSize } from "@/hooks/use-screen-size"

export function MentorHero() {
  const screenSize = useScreenSize()
  const pixelSize = screenSize.lessThan("md") ? 24 : 32

  return (
    <section className="pt-8">
      <div className="brand-container">
        <div className="relative min-h-[420px] overflow-hidden rounded-[34px] bg-black sm:min-h-[520px] lg:min-h-[620px]">
          <img
            src="/assets/images/mentor/gooey-hero.png"
            alt="抽象花园风格背景"
            className="absolute inset-0 h-full w-full object-cover object-center opacity-70"
          />
          <GooeyFilter id="mentor-gooey-trail" strength={screenSize.lessThan("lg") ? 4 : 6} />
          <div
            className="absolute inset-0"
            style={{ filter: "url(#mentor-gooey-trail)" }}
          >
            <PixelTrail
              pixelSize={pixelSize}
              fadeDuration={0}
              delay={500}
              pixelClassName="bg-white"
            />
          </div>

          <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center px-6 text-center sm:px-10">
            <div className="max-w-[860px]">
              <h1 className="text-[2.7rem] font-semibold tracking-[-0.065em] text-white sm:text-[3.9rem] lg:text-[5.6rem] lg:leading-[0.9]">
                小屿的伙伴们
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
