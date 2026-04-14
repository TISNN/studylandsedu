import { offerItems } from '@/data/site';

export function OfferShowcaseSection() {
  return (
    <section className="section-gap bg-slate-50">
      <div className="brand-container">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#20ad96]">StudyLandsEdu</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900">OFFER战绩榜</h2>
          <p className="mt-2 text-sm text-slate-500">2023-2024 年节选</p>
        </div>

        <div
          className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6"
          style={{ gridAutoRows: '90px' }}
        >
          {offerItems.map((item, index) => {
            const tallCard = index % 5 === 0 || index % 7 === 0;
            return (
              <article
                key={`${item.image}-${index}`}
                className={[
                  'group relative overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-200',
                  tallCard ? 'row-span-2' : 'row-span-1',
                ].join(' ')}
              >
                <img
                  src={item.image}
                  alt={`${item.title} ${item.subtitle}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-3 pb-3 pt-8 text-white">
                  <p className="text-xs font-semibold uppercase tracking-wider text-teal-200">{item.title}</p>
                  <p className="text-[11px] text-white/90">{item.subtitle}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
