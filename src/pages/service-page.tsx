import {
  ArrowRight,
  ClipboardList,
  FileCheck2,
  FileText,
  MessageSquareMore,
  Plane,
  ScrollText,
  Target,
  Waypoints,
} from 'lucide-react';
import { Link } from 'react-router-dom';

type ServiceRole = {
  title: string;
  description: string;
  bullets: string[];
  Icon: React.ComponentType<{ size?: number; className?: string }>;
};

type Deliverable = {
  title: string;
  description: string;
  note: string;
  Icon: React.ComponentType<{ size?: number; className?: string }>;
};

type ServiceStage = {
  title: string;
  summary: string;
  bullets: string[];
};

type ServicePhase = {
  label: string;
  title: string;
  description: string;
  stages: ServiceStage[];
};

const serviceRoles: ServiceRole[] = [
  {
    title: '选校顾问',
    description: '先把目标、梯度和节奏定稳，让后面的努力都用在真正值得的地方。',
    bullets: ['背景评估与目标梳理', '地区、项目与梯度匹配', '案例参考与申请难度判断'],
    Icon: Target,
  },
  {
    title: '专业导师',
    description: '来自目标院校或目标学科的过来人，帮助学生把经历、兴趣和能力表达得更准确。',
    bullets: ['1 对 1 头脑风暴', '文书逻辑与亮点梳理', '学术与职业视角补充'],
    Icon: MessageSquareMore,
  },
  {
    title: '申请导师',
    description: '负责把材料、时间和流程真正往前推进，让申请不只停留在讨论里。',
    bullets: ['材料清单与网申推进', '进度管理与状态跟进', '签证、入学与后续衔接'],
    Icon: ClipboardList,
  },
];

const serviceDeliverables: Deliverable[] = [
  {
    title: '背景评估报告',
    description: '梳理成绩、语言、科研、实习和活动经历，看清当下的位置，也看清还差什么。',
    note: '先知道自己在哪里，后面的每一步才不会着急。',
    Icon: FileText,
  },
  {
    title: '选校与申请策略',
    description: '结合项目差异、录取难度、预算、奖学金和时间节奏，形成适合自己的申请路线。',
    note: '不是一次性拍板，而是在沟通里慢慢校准得更准确。',
    Icon: ScrollText,
  },
  {
    title: '文书会议纪要',
    description: '每次围绕头脑风暴、故事线和修改方向的讨论，都会留下清楚的记录。',
    note: '聊完之后，不只是安心一点，而是真的知道下一步怎么做。',
    Icon: FileCheck2,
  },
  {
    title: '进度与后续支持',
    description: '从网申状态、面试准备到 offer 选择、签证和入学衔接，关键节点始终有人跟着。',
    note: '申请不是拿到 offer 就结束，真正的过渡往往从那时才开始。',
    Icon: Waypoints,
  },
];

const servicePhases: ServicePhase[] = [
  {
    label: '第一阶段',
    title: '准备期',
    description: '先把目标、背景和时间线理顺，后面的申请才会从容一些。',
    stages: [
      {
        title: '前期咨询',
        summary: '先了解申请意向、现阶段背景和时间安排。',
        bullets: ['判断更适合的申请路径', '确认后续的配合方式与节奏'],
      },
      {
        title: '背景评估',
        summary: '从成绩、语言、科研、实习和活动等维度，建立完整的个人画像。',
        bullets: ['看清亮点与短板', '明确接下来更值得补的部分'],
      },
      {
        title: '考试与规划',
        summary: '安排语言和标化目标，把真正可执行的时间预留出来。',
        bullets: ['备考节奏与重考预留', '非申请季的背景提升规划'],
      },
      {
        title: '选校定位',
        summary: '结合地区、项目、预算和个人偏好，逐步收敛出适合自己的申请名单。',
        bullets: ['项目差异与梯度分配', '申请难度与奖学金机会判断'],
      },
    ],
  },
  {
    label: '第二阶段',
    title: '申请期',
    description: '把表达、材料和执行放到同一条线上，申请才会显得完整而有分寸。',
    stages: [
      {
        title: '文书与材料',
        summary: '通过 1 对 1 头脑风暴、素材梳理和多轮修改，慢慢写出真正属于自己的材料。',
        bullets: ['不套模板，不拼接经历', '根据不同项目做有针对性的调整'],
      },
      {
        title: '网申执行',
        summary: '把账号、材料、状态和补件安排好，让每一步都有人盯着。',
        bullets: ['重要时间点持续提醒', '共享进度，减少信息断层'],
      },
    ],
  },
  {
    label: '第三阶段',
    title: '录取后',
    description: '拿到录取之后，真正重要的选择和过渡，往往才刚刚开始。',
    stages: [
      {
        title: '面试与决策',
        summary: '准备面试、比较项目差异、评估 offer 与奖学金，帮助做更稳的判断。',
        bullets: ['项目对比分析', '学术与职业路径的综合判断'],
      },
      {
        title: '入学与后续',
        summary: '衔接签证、住宿、行前准备、选课和后续规划，让过渡更从容。',
        bullets: ['行前准备与入境协助', '入学后的选课与发展支持'],
      },
    ],
  },
];

export function ServicePage() {
  return (
    <>
      <section className="section-gap bg-slate-50">
        <div className="brand-container">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#20ad96]">申请服务</p>
            <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-tight text-slate-900 md:text-6xl">
              把申请做好，也把方向看清楚
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-700">
              对很多学生来说，申请最难的并不是做材料，而是在有限的时间里，一直做对判断。学屿把方向、表达、执行和录取后的衔接放在同一条线上，希望学生得到的，不只是建议，而是一种更稳的陪伴。
            </p>

          </div>
        </div>
      </section>

      <section id="mechanism" className="section-gap scroll-mt-24">
        <div className="brand-container grid gap-10 xl:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)]">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#20ad96]">三对一协作</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 md:text-4xl">三种角色分工不同，但始终围着同一个申请目标</h2>
            <p className="mt-5 leading-8 text-slate-600">
              申请里最消耗人的，往往不是某一个难题，而是判断、表达和执行没有放在同一条线上。学屿把三种角色拆开，是为了让每一部分都有人专门负责，也有人彼此校准。
            </p>
          </div>

          <div className="space-y-4">
            {serviceRoles.map((role, index) => (
              <article
                key={role.title}
                className={[
                  'rounded-[1.75rem] p-6 ring-1',
                  index === 1
                    ? 'bg-[#e6f4f0] text-slate-900 ring-[#cfe5dd]'
                    : 'bg-slate-50 text-slate-900 ring-slate-100',
                ].join(' ')}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={[
                      'inline-flex size-11 shrink-0 items-center justify-center rounded-full',
                      index === 1 ? 'bg-[#183a35] text-white' : 'bg-[#20ad96]/10 text-[#20ad96]',
                    ].join(' ')}
                  >
                    <role.Icon size={18} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h3 className="text-xl font-semibold">{role.title}</h3>
                      <span className={['text-xs font-semibold uppercase tracking-[0.18em]', index === 1 ? 'text-[#183a35]' : 'text-[#20ad96]'].join(' ')}>
                        0{index + 1}
                      </span>
                    </div>
                    <p className={['mt-2 text-sm leading-7', index === 1 ? 'text-slate-600' : 'text-slate-600'].join(' ')}>
                      {role.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {role.bullets.map((bullet) => (
                        <span
                          key={bullet}
                          className={[
                            'inline-flex rounded-full px-3 py-1.5 text-sm',
                            index === 1 ? 'bg-white text-slate-700 ring-1 ring-[#c8dfd7]' : 'bg-white text-slate-600 ring-1 ring-slate-200',
                          ].join(' ')}
                        >
                          {bullet}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="deliverables" className="section-gap bg-slate-50 scroll-mt-24">
        <div className="brand-container grid gap-8 xl:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)]">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#20ad96]">阶段成果</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 md:text-4xl">每一次沟通，都应该留下真正有用的东西</h2>
            <p className="mt-5 leading-8 text-slate-600">
              很多学生真正焦虑的，不是没人给建议，而是聊了很多之后，还是不知道下一步先做什么。更理想的状态是，每次沟通之后，方向都更清楚一点，事情也更往前一点。
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-3 ring-1 ring-slate-100">
            {serviceDeliverables.map((item, index) => (
              <article
                key={item.title}
                className={
                  index === serviceDeliverables.length - 1
                    ? 'grid gap-4 rounded-[1.35rem] px-5 py-5 md:grid-cols-[auto_minmax(0,1fr)_220px]'
                    : 'grid gap-4 border-b border-slate-200 px-5 py-5 md:grid-cols-[auto_minmax(0,1fr)_220px]'
                }
              >
                <div className="inline-flex size-11 items-center justify-center rounded-full bg-[#20ad96]/10 text-[#20ad96]">
                  <item.Icon size={18} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
                </div>
                <p className="text-sm leading-7 text-slate-500 md:pl-4">{item.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="journey" className="section-gap scroll-mt-24">
        <div className="brand-container">
          <div className="max-w-3xl">
            <div className="inline-flex size-11 items-center justify-center rounded-full bg-[#20ad96]/10 text-[#20ad96]">
              <Plane size={18} />
            </div>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#20ad96]">服务流程</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 md:text-4xl">从前期准备到入学以后，这条路会怎样一步步展开</h2>
            <p className="mt-5 max-w-3xl leading-8 text-slate-600">
              申请不是几个节点拼在一起，而是一段慢慢展开的过程。不同阶段的问题不一样，陪伴的重点也会跟着变化。
            </p>
          </div>

          <div className="mt-10 grid gap-6 xl:grid-cols-3">
            {servicePhases.map((phase) => (
              <article key={phase.title} className="rounded-[2rem] bg-slate-50 p-6 ring-1 ring-slate-100">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#20ad96]">{phase.label}</p>
                <h3 className="mt-3 text-2xl font-semibold text-slate-900">{phase.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{phase.description}</p>

                <div className="mt-6 space-y-4">
                  {phase.stages.map((stage, index) => (
                    <article key={stage.title} className="rounded-[1.4rem] bg-white p-5 ring-1 ring-slate-100">
                      <div className="flex items-start gap-4">
                        <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
                          {index + 1}
                        </span>
                        <div>
                          <h4 className="text-lg font-semibold text-slate-900">{stage.title}</h4>
                          <p className="mt-2 text-sm leading-7 text-slate-600">{stage.summary}</p>
                          <div className="mt-3 space-y-1 text-sm leading-7 text-slate-500">
                            {stage.bullets.map((bullet) => (
                              <p key={bullet}>{bullet}</p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-gap bg-[#eef6f3] text-slate-900">
        <div className="brand-container grid gap-8 xl:grid-cols-[minmax(0,1fr)_auto] xl:items-end">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#20ad96]">下一步</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 md:text-4xl">如果你愿意，我们可以从你的当下开始聊起</h2>
            <p className="mt-5 leading-8 text-slate-600">
              不用先急着决定学校名单。先把现在处在哪个阶段、还有多少时间、最该先补哪一块看清楚，很多判断都会顺下来。
            </p>
          </div>

          <div className="flex flex-wrap gap-3 xl:justify-end">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#183a35] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#122d29]"
            >
              联系小屿
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-full border border-[#c9ddd6] bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-[#b7d0c7] hover:text-slate-900"
            >
              了解学屿
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
