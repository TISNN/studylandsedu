import { partnerCompanyLogos, partnerUniversityLogos } from '@/data/site';

function LogoTrack({ logos, reverse = false }: { logos: string[]; reverse?: boolean }) {
  const doubled = [...logos, ...logos];

  return (
    <div className="partner-marquee mt-5">
      <div className={['partner-track', reverse ? 'reverse' : ''].join(' ')}>
        {doubled.map((logo, index) => (
          <div
            key={`${logo}-${index}`}
            className="flex h-24 w-[220px] items-center justify-center rounded-xl bg-white px-5 shadow-sm ring-1 ring-slate-100"
          >
            <img
              src={logo}
              alt="合作伙伴"
              className="max-h-14 w-auto object-contain grayscale transition duration-300 hover:grayscale-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function PartnersSection() {
  return (
    <section className="section-gap">
      <div className="brand-container text-center">
        <h2 className="mx-auto max-w-3xl text-3xl font-semibold text-slate-900">
          5 年来，我们和多家卓越企业和高校建立了良好合作
        </h2>
      </div>

      <div className="mt-7 bg-slate-50 py-6">
        <div className="brand-container">
          <LogoTrack logos={partnerUniversityLogos} />
          <LogoTrack logos={partnerCompanyLogos} reverse />
        </div>
      </div>
    </section>
  );
}
