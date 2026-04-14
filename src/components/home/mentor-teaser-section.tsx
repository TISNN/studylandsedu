import { Link } from 'react-router-dom';
import { mentorHighlights } from '@/data/site';

export function MentorTeaserSection() {
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

          <div className="grid gap-4 md:grid-cols-3">
            {mentorHighlights.map((mentor) => (
              <article key={mentor.name} className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-100">
                <img src={mentor.image} alt={mentor.name} className="h-48 w-full rounded-xl object-cover" />
                <h3 className="mt-4 text-base font-semibold text-slate-900">{mentor.name}</h3>
                <p className="mt-1 text-sm font-medium text-slate-700">{mentor.title}</p>
                <ul className="mt-3 space-y-2 text-xs leading-6 text-slate-600">
                  {mentor.bullets.map((bullet) => (
                    <li key={bullet}>• {bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
