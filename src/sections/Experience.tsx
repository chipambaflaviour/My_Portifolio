import { TrendingUp } from 'lucide-react'
import { Chip } from '../components/Chip'
import { Figure } from '../components/Figure'
import { MetricList } from '../components/MetricList'
import { Section } from '../components/Section'
import { portfolio } from '../data/portfolio'

export function Experience() {
  return (
    <Section
      id="experience"
      index="02"
      eyebrow="Experience"
      title="Where I have worked, and what changed."
      intro="Development, systems support and teaching. For each role: the difference the work made, then what the job involves day to day."
    >
      <ol className="relative border-l border-line">
        {portfolio.experience.map((entry) => {
          const isCurrent = entry.period?.includes('Present')
          return (
            <li key={`${entry.organisation}-${entry.role}`} className="relative pb-14 pl-8 last:pb-0 sm:pl-10">
              <span
                aria-hidden="true"
                className={`absolute top-1.5 -left-[5px] size-[9px] rounded-full ring-4 ring-paper ${isCurrent ? 'bg-copper' : 'bg-ink-muted'}`}
              />
              {(entry.period || entry.location) && (
                <p className="font-mono text-xs tracking-wide text-ink-muted">
                  {[entry.period, entry.location].filter(Boolean).join(' · ')}
                </p>
              )}
              <h3 className="mt-2 font-display text-2xl leading-snug font-medium text-ink">{entry.organisation}</h3>
              <p className="mt-1 text-copper">{entry.role}</p>
              <p className="mt-4 leading-relaxed text-ink-soft">{entry.summary}</p>

              {entry.metrics && (
                <MetricList metrics={entry.metrics} className={`mt-6 ${entry.metrics.length > 1 ? 'sm:grid-cols-2' : 'sm:max-w-sm'}`} />
              )}

              {entry.achievements && (
                <div className="mt-6">
                  <h4 className="font-mono text-[0.7rem] tracking-wider text-copper uppercase">Impact</h4>
                  <ul className="mt-3 space-y-2.5">
                    {entry.achievements.map((item) => (
                      <li key={item} className="flex gap-3 leading-relaxed text-ink">
                        <TrendingUp className="mt-1 size-4 shrink-0 text-copper" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {entry.responsibilities.length > 0 && entry.achievements && (
                <h4 className="mt-6 font-mono text-[0.7rem] tracking-wider text-ink-muted uppercase">Day to day</h4>
              )}
              {entry.responsibilities.length > 0 && (
                <ul className="mt-3 space-y-2">
                  {entry.responsibilities.map((item) => (
                    <li key={item} className="flex gap-3 leading-relaxed text-ink-soft">
                      <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-ink-muted" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {entry.photo && <Figure photo={entry.photo} className="mt-6 max-w-xl" />}

              {entry.projectExposure && (
                <div className="mt-5">
                  <p className="font-mono text-[0.7rem] tracking-wider text-ink-muted uppercase">Project exposure</p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {entry.projectExposure.map((project) => (
                      <li key={project}>
                        <Chip>{project}</Chip>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          )
        })}
      </ol>
    </Section>
  )
}
