import { useState } from 'react';
import { productItems } from '@/data/site';

export function ProductAccordionSection() {
  const [activeIndex, setActiveIndex] = useState(productItems.length - 1);

  return (
    <section id="service-matrix" className="section-gap product-accordion-section">
      <div className="brand-container">
        <div className="product-accordion-layout grid items-center lg:grid-cols-[1fr_1.2fr]">
          <div className="product-accordion-copy">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#20ad96]">products and services</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900">产品体系</h2>
            <p className="mt-4 text-slate-600">
              从留学申请到背景提升，我们以一体化路径帮助你更高效地完成目标规划与落地执行。
            </p>
          </div>

          <div className="product-accordion" data-product-accordion>
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
                  className={['product-accordion-item', isActive ? 'is-active' : ''].join(' ')}
                >
                  <img className="product-accordion-image" src={item.image} alt={item.title} />
                  <span className="product-accordion-overlay" />
                  <span className="product-accordion-label">{item.title}</span>
                  <span className="product-accordion-meta">{item.meta}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
