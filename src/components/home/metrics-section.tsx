import { metrics } from '@/data/site';

export function MetricsSection() {
  return (
    <section className="section-gap">
      <div className="brand-container">
        <div className="rounded-3xl bg-slate-900 px-6 py-10 text-white md:px-10 md:py-12">
          <p className="text-xs uppercase tracking-[0.22em] text-teal-200">All things come to those who wait</p>
          <h2 className="mt-4 text-2xl font-semibold leading-10 md:text-3xl">
            自 2021 年成立以来，学屿始终视辅导质量和客户口碑为立足之本，致力于全力提升学员满意度。
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300 md:text-base">
            我们相信教育需要有“慢下来”的定力，好的教育是文火慢炖，不舍时间，求难求拙。秉持这一理念，我们已经荣幸地陪伴了上百名学员，共同经历了挑战与成长、收获与喜悦的旅程。
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {metrics.map((item) => (
              <article key={item.label} className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                <h3 className="text-sm font-medium text-teal-100">{item.label}</h3>
                <p className="mt-2 text-3xl font-bold text-white">{item.value}</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
