import { ArrowUpRight } from 'lucide-react'
import { ExternalLink } from '../components/ExternalLink'
import { Section } from '../components/Section'
import { portfolio } from '../data/portfolio'

export function Learning() {
  const { learning, interests } = portfolio
  const completed = learning.filter((item) => item.kind !== 'In progress')
  const inProgress = learning.filter((item) => item.kind === 'In progress')

  return (
    <Section
      id="learning"
      index="05"
      eyebrow="Learning"
      title="Certifications & continuous learning."
      intro="Training and courses I have completed, and what I am studying now. Completed work and work in progress are listed separately."
    >
      <ul className="divide-y divide-line border-y border-line">
        {completed.map((item) => (
          <li key={item.title} className="grid gap-1 py-4 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-6">
            <div>
              <p className="font-medium text-ink">
                {item.credentialUrl ? (
                  <ExternalLink href={item.credentialUrl} className="inline-flex items-center gap-1 hover:text-copper">
                    {item.title}
                    <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  </ExternalLink>
                ) : (
                  item.title
                )}
              </p>
              {item.provider && <p className="mt-0.5 text-sm text-ink-muted">{item.provider}</p>}
            </div>
            <p className="font-mono text-xs text-ink-muted">
              {item.kind}
              {item.year && ` · ${item.year}`}
            </p>
          </li>
        ))}
      </ul>

      {inProgress.length > 0 && (
        <div className="mt-10">
          <h3 className="font-mono text-xs tracking-wider text-ink-muted uppercase">Currently learning</h3>
          <ul className="mt-4 space-y-3">
            {inProgress.map((item) => (
              <li key={item.title} className="flex items-start gap-3 rounded-sm border border-dashed border-line p-4">
                <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-copper" />
                <div>
                  <p className="font-medium text-ink">{item.title}</p>
                  <p className="text-sm text-ink-muted">
                    {item.provider && `${item.provider} · `}In progress, not yet completed
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div id="interests" className="mt-16">
        <h3 className="font-display text-2xl font-medium text-ink">Professional interests</h3>
        <p className="mt-2 text-ink-muted">Areas I am growing into and want to keep working on.</p>
        <ul className="mt-6 grid gap-x-8 sm:grid-cols-2">
          {interests.map((interest, index) => (
            <li key={interest} className="flex gap-4 border-t border-line py-3 text-ink-soft">
              <span aria-hidden="true" className="w-5 shrink-0 font-mono text-xs leading-6 text-copper">
                {String(index + 1).padStart(2, '0')}
              </span>
              {interest}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
