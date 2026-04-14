import { useState } from 'react';
import { productItems } from '@/data/site';

export function ProductAccordionSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="section-gap">
      <div className="brand-container grid items-center gap-8 lg:grid-cols-[1fr_1.35fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#20ad96]">products and services</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900">产品体系</h2>
          <p className="mt-4 text-slate-600">
            从留学申请到背景提升，我们以一体化路径帮助你更高效地完成目标规划与落地执行。
          </p>
        </div>

        <div className="flex h-[420px] snap-x snap-mandatory gap-3 overflow-x-auto pb-2">
          {productItems.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={item.title}
                type="button"
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                aria-label={item.title}
                className={[
                  'group relative h-full shrink-0 snap-start overflow-hidden rounded-2xl transition-all duration-500',
                  isActive ? 'w-[320px] md:w-[360px]' : 'w-[84px] md:w-[92px]',
                ].join(' ')}
              >
                <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />

                <span
                  className={[
                    'absolute left-1/2 text-white transition-all duration-300',
                    isActive
                      ? 'bottom-14 -translate-x-1/2 text-2xl font-semibold'
                      : 'bottom-20 -translate-x-1/2 rotate-90 whitespace-nowrap text-base font-medium',
                  ].join(' ')}
                >
                  {item.title}
                </span>

                {isActive ? (
                  <span className="absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs tracking-wide text-white/85 md:text-sm">
                    {item.meta}
                  </span>
                ) : null}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
