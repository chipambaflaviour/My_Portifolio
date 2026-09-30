import { ArrowDown, ArrowRight, MapPin } from 'lucide-react'
import { MetricList } from '../components/MetricList'
import { portfolio } from '../data/portfolio'
import { assetUrl } from '../lib/assetUrl'

export function Hero() {
  const { profile, experience, impact } = portfolio
  const current = experience.find((entry) => entry.period?.includes('Present'))

  return (
    <section id="home" aria-labelledby="home-heading">
      <div className="mx-auto max-w-6xl px-4 pt-14 pb-16 sm:px-6 md:pt-24 md:pb-24 lg:px-8">
        <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8">
            <p className="font-mono text-xs tracking-wider text-copper uppercase">{profile.title}</p>
            {current && (
              <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-line bg-paper-raised py-1 pr-3 pl-2 text-sm text-ink-soft">
                <span aria-hidden="true" className="size-2 rounded-full bg-moss" />
                Now: {current.role} at {current.organisation}
              </p>
            )}
            <h1
              id="home-heading"
              className="mt-5 font-display text-[2.5rem] leading-[1.05] font-medium tracking-tight text-ink sm:text-6xl lg:text-[4.25rem]"
            >
              {profile.headline}
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft">{profile.intro}</p>
            {profile.availability && (
              <p className="mt-4 inline-flex items-center gap-2 text-sm text-moss">
                <span aria-hidden="true" className="size-2 rounded-full bg-moss" />
                {profile.availability}
              </p>
            )}
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-sm bg-ink px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-copper"
              >
                Explore My Work
                <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-sm border border-ink/25 px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
              >
                Get in Touch
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-4">
            <Portrait />
          </div>
        </div>

        {impact.length > 0 && (
          <section aria-label="Impact at a glance" className="mt-16 lg:mt-20">
            <MetricList metrics={impact} className="sm:grid-cols-2 lg:grid-cols-4" />
          </section>
        )}
      </div>
    </section>
  )
}

/** Shows the real photo when one is configured; otherwise a monogram, never a stand-in face. */
function Portrait() {
  const { profile } = portfolio
  return (
    <figure className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-sm border border-line bg-paper-raised lg:max-w-none">
      {profile.photo ? (
        <img
          src={assetUrl(profile.photo.src)}
          alt={profile.photo.alt}
          width={profile.photo.width}
          height={profile.photo.height}
          fetchPriority="high"
          className="size-full object-cover object-top"
        />
      ) : (
        <div aria-hidden="true" className="relative size-full">
          <div
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                'linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />
          <span className="absolute inset-0 grid place-items-center font-display text-[7.5rem] leading-none font-medium text-copper italic">
            {profile.initials}
          </span>
          <span className="absolute top-4 left-4 font-mono text-[0.65rem] tracking-wider text-ink-muted uppercase">
            {profile.name}
          </span>
        </div>
      )}
      <figcaption className="absolute right-0 bottom-0 left-0 flex items-center gap-2 border-t border-line bg-paper-raised/95 px-4 py-3 text-sm text-ink-soft">
        <MapPin className="size-4 text-copper" aria-hidden="true" />
        {profile.location}
      </figcaption>
    </figure>
  )
}
