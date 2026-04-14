import { CheckCircle2, Compass, GraduationCap, ShieldCheck } from 'lucide-react';

const points = [
  {
    title: '多种升学路径',
    description: '提供高升本、本升硕、硕升博、专升本、专升硕等多种升学路径。',
    Icon: GraduationCap,
  },
  {
    title: '官方授权资质',
    description: '与众多知名院校保持官方合作资质，保障申请流程与信息同步。',
    Icon: ShieldCheck,
  },
  {
    title: '一站式留学服务',
    description: '从择校定位到境外衔接，再到职业规划咨询，提供全流程陪伴支持。',
    Icon: Compass,
  },
];

export function ComprehensiveServicesSection() {
  return (
    <section className="section-gap">
      <div className="brand-container grid items-center gap-10 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#20ad96]">
            Comprehensive study abroad services
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900">
            全方位留学申请 <span className="text-[#20ad96]">Expert solution</span>
          </h2>
          <p className="mt-4 leading-8 text-slate-600">
            学屿教育致力于提供常规院校申请与高端背景提升的全流程服务，覆盖多个国家和地区，帮助学生更高效地完成升学与职业路径规划。
          </p>

          <div className="mt-7 space-y-4">
            {points.map((point) => (
              <article key={point.title} className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-100">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 inline-flex size-8 items-center justify-center rounded-full bg-[#20ad96]/10 text-[#20ad96]">
                    <point.Icon size={16} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">{point.title}</h3>
                    <p className="mt-1 text-sm leading-7 text-slate-600">{point.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-5 inline-flex items-center gap-2 text-sm text-slate-500">
            <CheckCircle2 size={16} className="text-[#20ad96]" />
            全流程可跟踪，关键节点透明可见
          </p>
        </div>

        <div>
          <img
            src="/assets/images/bg/about.jpg"
            alt="全方位留学服务"
            className="h-full w-full rounded-2xl object-cover shadow-sm"
          />
        </div>
      </div>
    </section>
  );
}
