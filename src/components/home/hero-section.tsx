export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src="/assets/images/banner/ter.jpg"
        alt="学屿教育"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-slate-900/40" />

      <div className="brand-container relative py-28 text-center md:py-36">
        <span className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-100">
          专注名校本硕博留学申请
        </span>
        <h1 className="mt-4 text-4xl font-bold text-white md:text-6xl">学屿教育</h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-100 md:text-lg">
          学屿，寓意知识的岛屿。我们致力于成为每位学子探索梦想之海的可靠港湾，助力他们迈向全球教育的广阔天地。
        </p>
      </div>
    </section>
  );
}
