import type { CSSProperties } from 'react';
import { useEffect, useState } from 'react';
import { heroCloudRows, type HeroCloudPhrase } from '@/data/site';

const HERO_TYPING_TEXT = '我们在学屿等你';
const HERO_VISIBLE_PAUSE_MS = 5000;

function flattenHeroPhrases(): HeroCloudPhrase[] {
  return heroCloudRows.flatMap((row) =>
    [row.left, row.center, row.right].filter((phrase): phrase is HeroCloudPhrase => Boolean(phrase)),
  );
}

export function HeroSection() {
  const [typedText, setTypedText] = useState('');
  const heroPhrases = flattenHeroPhrases();

  useEffect(() => {
    let frame: ReturnType<typeof setTimeout> | undefined;
    let index = 0;
    let deleting = false;

    const tick = () => {
      setTypedText(HERO_TYPING_TEXT.slice(0, index));

      if (!deleting && index === HERO_TYPING_TEXT.length) {
        frame = setTimeout(() => {
          deleting = true;
          index = HERO_TYPING_TEXT.length - 1;
          tick();
        }, HERO_VISIBLE_PAUSE_MS);
        return;
      }

      if (deleting && index === 0) {
        deleting = false;
        frame = setTimeout(() => {
          index = 1;
          tick();
        }, 500);
        return;
      }

      index += deleting ? -1 : 1;
      frame = setTimeout(tick, deleting ? 52 : 92);
    };

    index = 1;
    frame = setTimeout(tick, 280);

    return () => {
      if (frame) {
        clearTimeout(frame);
      }
    };
  }, []);

  return (
    <section className="hero-cloud">
      <div className="hero-cloud__cluster">
        <div className="hero-cloud__desktop">
          {heroPhrases.map((phrase, index) => (
            <p
              key={`${phrase.text}-${index}`}
              className={`hero-cloud__item hero-cloud__word-${index + 1}`}
              aria-hidden="true"
              data-size={phrase.size ?? 'sm'}
              data-tone={phrase.tone ?? 'soft'}
              data-weight={phrase.weight ?? 'normal'}
              style={
                {
                  '--hero-delay': `${phrase.delayMs ?? 0}ms`,
                  '--hero-duration': `${phrase.durationMs ?? 900}ms`,
                } as CSSProperties
              }
            >
              <span className="hero-cloud__item-text">{phrase.text}</span>
            </p>
          ))}

          <div className="hero-cloud__content">
            <h1 className="hero-cloud__headline">
              {typedText}
              <span className="hero-cloud__cursor" aria-hidden="true">
                |
              </span>
            </h1>
          </div>
        </div>
      </div>

      <div className="hero-cloud__mobile">
        <h1 className="hero-cloud__mobile-headline">{HERO_TYPING_TEXT}</h1>
        {heroPhrases.slice(0, 10).map((entry) => (
          <p key={`mobile-${entry.text}`} className="hero-cloud__mobile-line">
            {entry.text}
          </p>
        ))}
      </div>
    </section>
  );
}
