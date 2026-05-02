import {
  ArrowRight,
  Bell,
  CheckCircle2,
  ClipboardList,
  MessageSquareMore,
  Search,
  Target,
} from 'lucide-react';
import { Link } from 'react-router-dom';

type ServiceRole = {
  title: string;
  description: string;
  bullets: string[];
  Icon: React.ComponentType<{ size?: number; className?: string }>;
};

type ServiceArtifact = {
  title: string;
  description: string;
};

type ServicePhase = {
  label: string;
  title: string;
  summary: string;
  bullets: string[];
};

type ServiceMode = {
  title: string;
  description: string;
};

const serviceModes: ServiceMode[] = [
  {
    title: '一站式申请服务',
    description: '从申请准备开始，一直到录取后的签证、入学手续和后续衔接，都会有老师持续跟进。',
  },
  {
    title: '半 DIY 申请服务',
    description: '按学生自己的需求组合单项服务，更适合希望保留一部分主动规划和执行节奏的同学。',
  },
];

const heroFocus = [
  {
    title: '目标先定清楚',
    description: '先把选校梯度、项目方向和时间线理顺。',
  },
  {
    title: '申请持续推进',
    description: '文书、材料、网申和节奏管理会一直往前走。',
  },
  {
    title: '关键进度随时可查',
    description: '申请状态、任务和材料会放在同一个工作区里。',
  },
];

const serviceRoles: ServiceRole[] = [
  {
    title: '选校顾问',
    description: '负责判断方向和梯度，先把申请名单定得靠谱。',
    bullets: ['背景评估与目标梳理', '项目匹配与难度判断'],
    Icon: Target,
  },
  {
    title: '专业导师',
    description: '来自目标院校或相关学科，帮助学生把经历和表达讲准确。',
    bullets: ['1 对 1 头脑风暴', '文书结构与专业视角'],
    Icon: MessageSquareMore,
  },
  {
    title: '申请导师',
    description: '负责把材料、时间和流程往前推，确保申请真的落地。',
    bullets: ['网申执行与状态跟进', '补件提醒与后续衔接'],
    Icon: ClipboardList,
  },
];

const serviceArtifacts: ServiceArtifact[] = [
  {
    title: '背景评估',
    description: '先看清当下的位置，再决定该把力气放在哪里。',
  },
  {
    title: '选校单',
    description: '学校和项目会按梯度整理清楚，不会越聊越散。',
  },
  {
    title: '文书纪要',
    description: '每次讨论后的修改方向和待办都会留下记录。',
  },
  {
    title: '任务清单',
    description: '该补什么、谁来推进、什么时候截止，一眼能看懂。',
  },
];

const systemHighlights = ['申请状态', '材料清单', '选校记录', '文书协作', '任务提醒'];

const servicePhases: ServicePhase[] = [
  {
    label: '第一步',
    title: '准备期',
    summary: '先把目标、背景和时间线理顺。',
    bullets: ['前期咨询与背景评估', '语言考试与背景规划', '选校定位与梯度安排'],
  },
  {
    label: '第二步',
    title: '申请期',
    summary: '开始写、开始投，也开始持续跟进。',
    bullets: ['文书头脑风暴与多轮修改', '材料整理与网申提交', '阶段提醒与补件推进'],
  },
  {
    label: '第三步',
    title: '录取后',
    summary: '拿到结果之后，继续把决定和过渡做好。',
    bullets: ['面试准备与 offer 对比', '签证、住宿和行前事项', '入学后的选课与后续建议'],
  },
];

function StudentSystemMockup() {
  const portalMenu = ['仪表盘', '我的档案', '我的选校', '申请工作台', '文书工作台', '更多'];
  const applications = [
    ['University College London', 'MSc Management', '文书修改中'],
    ['New York University', 'MS Integrated Marketing', '网申待确认'],
    ['University of Edinburgh', 'MSc Finance', '等待结果'],
  ];
  const tasks = [
    ['确认推荐人邮箱', '今天'],
    ['补充上传存款证明', '11/12'],
    ['审阅 NYU 文书终稿', '明天'],
  ];
  const workspaceTiles = [
    ['材料准备', '10 / 13 已完成'],
    ['文书工作台', '2 份待我审阅'],
    ['我的选校', '9 所学校已确认'],
  ];

  return (
    <div className="overflow-hidden rounded-[2.4rem] border border-slate-200 bg-white shadow-[0_36px_90px_-32px_rgba(15,23,42,0.18)]">
      <div className="border-b border-slate-200 bg-white px-4 py-4 md:px-6">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white p-1 shadow-sm">
                <img src="/assets/images/logo.png" alt="学屿教育 logo" className="h-full w-full object-contain" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">学屿教育</p>
                <p className="text-[11px] tracking-[0.16em] text-slate-400">学生申请系统</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-400 md:flex">
                <Search size={15} />
                <span>搜索学校、材料或文书</span>
              </div>
              <div className="relative inline-flex size-10 items-center justify-center rounded-full bg-slate-100 text-slate-500">
                <Bell size={16} />
                <span className="absolute right-2 top-2 size-2 rounded-full bg-rose-500" />
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white">
                <span className="inline-flex size-6 items-center justify-center rounded-full bg-white/15">Z</span>
                张同学
              </div>
            </div>
          </div>

          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-slate-100 pt-3 text-sm font-medium text-slate-500">
            {portalMenu.map((item, index) => (
              <span key={item} className={index === 0 ? 'text-[#20ad96]' : undefined}>
                {item}
              </span>
            ))}
          </nav>
        </div>
      </div>

      <div className="bg-[linear-gradient(180deg,rgba(244,248,247,0.85)_0%,rgba(255,255,255,1)_45%)] p-4 md:p-5">
        <section className="rounded-[2rem] border border-[#dcebe5] bg-white px-5 py-5 shadow-sm">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#20ad96]">申请首页</p>
              <h3 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">张同学，今天先处理这三件事</h3>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {[
                ['申请总数', '8'],
                ['进行中', '5'],
                ['已获 Offer', '2'],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl bg-slate-50 px-4 py-3 ring-1 ring-slate-100">
                  <p className="text-[11px] text-slate-500">{label}</p>
                  <p className="mt-1 text-xl font-semibold text-slate-900">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="mt-5 grid gap-5 xl:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
          <article className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-slate-900">我的申请</p>
                <p className="mt-1 text-[12px] leading-6 text-slate-500">每个项目都能看到当前阶段和最近更新。</p>
              </div>
              <span className="rounded-full bg-[#eef6f3] px-3 py-1 text-[11px] font-semibold text-[#1f8c79]">申请工作台</span>
            </div>

            <div className="mt-4 space-y-3">
              {applications.map(([school, program, stage]) => (
                <div key={school} className="flex items-center justify-between rounded-[1.35rem] bg-slate-50 px-4 py-3">
                  <div>
                    <p className="text-sm font-semibold text-slate-800">{school}</p>
                    <p className="mt-1 text-[11px] text-slate-500">{program}</p>
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-[10px] font-semibold text-slate-600 ring-1 ring-slate-200">
                    {stage}
                  </span>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-slate-900">本周待办</p>
                <p className="mt-1 text-[12px] leading-6 text-slate-500">学生会知道接下来该自己处理什么。</p>
              </div>
              <span className="rounded-full bg-amber-50 px-3 py-1 text-[11px] font-semibold text-amber-700">3 项待办</span>
            </div>

            <div className="mt-4 space-y-3">
              {tasks.map(([task, date]) => (
                <div key={task} className="flex items-center justify-between rounded-[1.35rem] bg-slate-50 px-4 py-3">
                  <span className="text-sm font-medium text-slate-700">{task}</span>
                  <span className="text-[10px] font-semibold text-slate-500">{date}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {['列表', '看板', '日历'].map((view) => (
                <span key={view} className="rounded-full bg-slate-100 px-3 py-1.5 text-[11px] font-semibold text-slate-600">
                  {view}
                </span>
              ))}
            </div>
          </article>
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {workspaceTiles.map(([title, note], index) => (
            <article
              key={title}
              className={[
                'rounded-[1.6rem] border p-4 shadow-sm',
                index === 1 ? 'border-[#dcebe5] bg-[#f3faf7]' : 'border-slate-200 bg-white',
              ].join(' ')}
            >
              <p className="text-sm font-semibold text-slate-900">{title}</p>
              <p className="mt-2 text-sm text-slate-600">{note}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ServicePage() {
  return (
    <>
      <section className="section-gap bg-slate-50 pt-16 pb-12 md:pt-20 md:pb-16">
        <div className="brand-container">
          <div className="max-w-5xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#20ad96]">申请服务</p>
            <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-tight text-slate-900 md:text-6xl">
              把申请这件事，做得更清楚一点
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-700">
              学屿提供一站式申请服务，也提供半 DIY 申请服务。无论是希望全程一起推进，还是想保留自己的节奏，都可以找到合适的配合方式。
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {serviceModes.map((mode) => (
              <article key={mode.title} className="rounded-[1.7rem] border border-slate-200 bg-white px-5 py-5">
                <p className="text-sm font-semibold text-slate-900">{mode.title}</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">{mode.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-14 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_18px_45px_-32px_rgba(15,23,42,0.14)]">
            <div className="border-b border-slate-100 px-5 py-4 md:px-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#20ad96]">这项服务会覆盖</p>
            </div>
            <div className="grid md:grid-cols-3">
              {heroFocus.map((item, index) => (
                <article
                  key={item.title}
                  className={[
                    'px-5 py-5 md:px-6 md:py-6',
                    index < heroFocus.length - 1 ? 'border-b border-slate-100 md:border-b-0 md:border-r' : '',
                    index === 1 ? 'bg-[#f7fbf9]' : '',
                  ].join(' ')}
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">0{index + 1}</p>
                  <h2 className="mt-3 text-xl font-semibold text-slate-900">{item.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="mechanism" className="section-gap scroll-mt-24 pt-14 pb-12 md:pt-16 md:pb-14">
        <div className="brand-container">
          <div className="grid gap-10 xl:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#20ad96]">三对一协作</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900 md:text-4xl">三位老师分别负责什么</h2>
              <p className="mt-5 leading-8 text-slate-600">
                申请里最怕的是方向、表达和执行脱节。学屿把这三块分开负责，是为了让每个环节都有人看，也有人对齐。
              </p>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white">
              {serviceRoles.map((role, index) => (
                <article
                  key={role.title}
                  className={[
                    'px-6 py-6',
                    index < serviceRoles.length - 1 ? 'border-b border-slate-100' : '',
                    index === 1 ? 'bg-[#f7fbf9]' : '',
                  ].join(' ')}
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-start">
                    <div
                      className={[
                        'inline-flex size-11 shrink-0 items-center justify-center rounded-full',
                        index === 1 ? 'bg-[#183a35] text-white' : 'bg-[#eef6f3] text-[#20ad96]',
                      ].join(' ')}
                    >
                      <role.Icon size={18} />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="text-xl font-semibold text-slate-900">{role.title}</h3>
                        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                          0{index + 1}
                        </span>
                      </div>
                      <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">{role.description}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {role.bullets.map((bullet) => (
                          <span
                            key={bullet}
                            className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-600"
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

          <div className="mt-10 rounded-[2rem] border border-slate-200 bg-slate-50 px-5 py-5 md:px-6">
            <div className="grid gap-6 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] xl:items-start">
              <div className="max-w-lg">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#20ad96]">你会拿到什么</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">每次沟通之后，都会留下可以继续往前用的内容。后面的判断和配合会轻很多。</p>
              </div>

              <div className="overflow-hidden rounded-[1.6rem] border border-white bg-white">
                {serviceArtifacts.map((item, index) => (
                  <article
                    key={item.title}
                    className={[
                      'grid gap-3 px-4 py-4 md:grid-cols-[132px_minmax(0,1fr)] md:px-5',
                      index < serviceArtifacts.length - 1 ? 'border-b border-slate-100' : '',
                    ].join(' ')}
                  >
                    <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                    <p className="text-[13px] leading-6 text-slate-600">{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-gap bg-slate-50 pt-16 pb-16 md:pt-20 md:pb-20">
        <div className="brand-container">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_320px] xl:items-end">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#20ad96]">数字化申请系统</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900 md:text-4xl">学生自己的申请工作区</h2>
              <p className="mt-5 leading-8 text-slate-600">
                学屿把申请状态、材料、选校、文书和待办放进同一个工作区。学生打开系统，先看进度，再看自己这一轮要配合什么。
              </p>
            </div>

            <div className="rounded-[1.9rem] border border-[#d7e9e2] bg-white px-5 py-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#20ad96]">系统里会持续更新</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {systemHighlights.map((item) => (
                  <span key={item} className="rounded-full bg-[#eef6f3] px-3 py-1.5 text-[12px] font-medium text-slate-700">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12">
            <StudentSystemMockup />
          </div>
        </div>
      </section>

      <section id="journey" className="section-gap scroll-mt-24 pt-14 pb-16 md:pt-16 md:pb-20">
        <div className="brand-container">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#20ad96]">服务流程</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 md:text-4xl">申请会怎么一步步往前走</h2>
            <p className="mt-5 leading-8 text-slate-600">
              每个阶段的重点都不一样。前面先判断，后面再执行，拿到结果之后再做下一步选择。
            </p>
          </div>

          <div className="mt-10 grid gap-6 xl:grid-cols-3">
            {servicePhases.map((phase) => (
              <article
                key={phase.title}
                className="rounded-[2rem] border border-slate-200 bg-slate-50 px-6 py-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#20ad96]">{phase.label}</p>
                <h3 className="mt-3 text-2xl font-semibold text-slate-900">{phase.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{phase.summary}</p>

                <div className="mt-6 space-y-3">
                  {phase.bullets.map((bullet) => (
                    <p key={bullet} className="flex items-start gap-3 text-sm leading-7 text-slate-600">
                      <CheckCircle2 size={16} className="mt-1 shrink-0 text-[#20ad96]" />
                      <span>{bullet}</span>
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-gap bg-[#eef6f3] pt-14 pb-16 text-slate-900 md:pt-16 md:pb-20">
        <div className="brand-container grid gap-8 xl:grid-cols-[minmax(0,1fr)_auto] xl:items-end">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#20ad96]">下一步</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 md:text-4xl">如果你想聊聊自己的情况，可以先从现在的阶段说起</h2>
            <p className="mt-5 leading-8 text-slate-600">
              现在准备到哪里、还剩多少时间、最想解决哪一个问题，先说清楚这些，后面的判断会快很多。
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
