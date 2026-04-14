import { Star } from 'lucide-react';
import { strengths } from '@/data/site';

export function StrengthsSection() {
  return (
    <section className="section-gap bg-slate-50">
      <div className="brand-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#20ad96]">Maximize your potentials</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900">我们的优势</h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {strengths.map((item) => (
            <article key={item.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
              <div className="mb-4 inline-flex size-10 items-center justify-center rounded-full bg-[#20ad96]/10 text-[#20ad96]">
                <Star size={18} />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
