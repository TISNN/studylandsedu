import { metrics } from '@/data/site';

export function MetricsSection() {
  return (
    <section className="counter-section section-gap">
      <div className="brand-container">
        <div className="legacy-counter__heading">
          <span className="legacy-counter__subheading">All things come to those who wait</span>
          <h3 className="legacy-counter__title">
            自 2021 年成立以来，学屿始终视辅导质量和客户口碑为立足之本，致力于全力提升学员满意度。
          </h3>
          <h5 className="legacy-counter__desc">我们相信教育需要有“慢下来”的定力，好的教育是文火慢炖，不舍时间，求难求拙。</h5>
          <h5 className="legacy-counter__desc">秉持这一理念，我们已经荣幸地陪伴了上百名学员，共同经历了挑战与成长、收获与喜悦的旅程。</h5>
        </div>

        <div className="legacy-counter__grid">
          {metrics.map((item) => {
            const isPercent = item.value.endsWith('%');
            const valueNumber = isPercent ? item.value.slice(0, -1) : item.value;

            return (
              <article key={item.label} className="legacy-counter__item">
                <h6>{item.label}</h6>
                <div className="count">
                  <span className="counter">{valueNumber}</span>
                  {isPercent ? <span className="legacy-counter__suffix">%</span> : null}
                </div>
                <p>{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
