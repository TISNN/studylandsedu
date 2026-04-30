import { useState } from 'react';
import { Link } from 'react-router-dom';
import { mentorHighlights } from '@/data/site';

export function MentorTeaserSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="section-gap">
      <div className="brand-container">
        <div className="grid items-start gap-8 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#20ad96]">Find your mentor</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900">因为自己淋过雨，所以想为你撑把伞</h2>
            <p className="mt-4 leading-8 text-slate-600">
              作为国际教育的受益者，我们希望将个人独特的海外留学经验分享给大家。我们能做到感学生所感，知学生所需，因为我们也曾面对未来的迷茫，经历过相似的困惑与挑战。
            </p>
            <Link to="/mentor" className="mt-5 inline-block text-sm font-semibold text-[#20ad96] hover:text-[#1a9b86]">
              寻找你的导师 →
            </Link>
          </div>

          <div className="mentor-slider">
            <div className="mentor-slider__viewport">
              <div
                className="mentor-slider__track"
                style={{ transform: `translate3d(-${activeIndex * 100}%, 0, 0)` }}
              >
                {mentorHighlights.map((mentor) => (
                  <article key={mentor.name} className="testimonial-item testimonial-style-2 mentor-slider__slide">
                    <i aria-hidden="true">❞</i>

                    <div className="testimonial-info-title">
                      <h3>{mentor.title}</h3>
                    </div>

                    <div className="testimonial-info-desc">
                      学屿教育 创始人
                      <br />
                      {mentor.bullets.map((bullet, index) => (
                        <span key={bullet}>
                          {bullet}
                          {index < mentor.bullets.length - 1 ? <br /> : null}
                        </span>
                      ))}
                    </div>

                    <div className="client-info">
                      <div className="client-img">
                        <img src={mentor.image} alt={mentor.name} />
                      </div>
                      <div className="testionial-author">{mentor.name}</div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="mentor-slider__dots" role="tablist" aria-label="导师轮播">
              {mentorHighlights.map((mentor, index) => (
                <button
                  key={mentor.name}
                  type="button"
                  className={['mentor-slider__dot', index === activeIndex ? 'is-active' : ''].join(' ')}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`查看导师 ${mentor.name}`}
                  aria-selected={index === activeIndex}
                  role="tab"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
