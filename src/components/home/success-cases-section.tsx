import { Quote } from 'lucide-react';
import { successCases } from '@/data/site';

export function SuccessCasesSection() {
  return (
    <section className="section-gap bg-slate-50">
      <div className="brand-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#20ad96]">Success case</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900">申请成功案例</h2>
          <p className="mt-3 text-slate-600">听听小屿的学员是怎么说的</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {successCases.map((item) => (
            <article key={item.name} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
              <div className="flex items-start justify-between gap-4">
                <img src={item.image} alt={item.name} className="size-16 rounded-full object-cover ring-2 ring-[#20ad96]/20" />
                <Quote size={22} className="text-[#20ad96]" />
              </div>

              <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm font-medium text-slate-700">{item.name}</p>
              <p className="mt-2 text-xs leading-6 text-slate-500">{item.profile}</p>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.story}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
