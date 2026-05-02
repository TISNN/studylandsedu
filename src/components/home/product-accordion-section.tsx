import { productItems } from '@/data/site';

export function ProductAccordionSection() {
  const primaryProduct = productItems[0];

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

          <article className="product-banner" aria-label={primaryProduct.title}>
            <img className="product-banner__image" src={primaryProduct.image} alt={primaryProduct.title} />
            <span className="product-banner__overlay" />
            <div className="product-banner__content">
              <p className="product-banner__eyebrow">核心服务</p>
              <h3 className="product-banner__title">{primaryProduct.title}</h3>
              <p className="product-banner__meta">{primaryProduct.meta}</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
