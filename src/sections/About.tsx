import { BadgeCheck, GraduationCap } from 'lucide-react'
import { Figure } from '../components/Figure'
import { Section } from '../components/Section'
import { portfolio } from '../data/portfolio'

export function About() {
  const { about, aboutPhoto, values, faithStatement, education, educationPhoto, educationNote } = portfolio
  const [lead, ...rest] = about

  return (
    <Section id="about" index="01" eyebrow="About" title="Technology that people can use with confidence.">
      <div className="space-y-5 text-lg leading-relaxed text-ink-soft">
        <p className="text-xl leading-relaxed text-ink">{lead}</p>
        {rest.map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
      </div>

      {aboutPhoto && <Figure photo={aboutPhoto} className="mt-10" />}

      <h3 className="mt-14 font-mono text-xs tracking-wider text-ink-muted uppercase">Education</h3>
      <div className={`mt-5 grid gap-6 ${educationPhoto ? 'sm:grid-cols-[1fr_12rem]' : ''}`}>
        <div>
          <ul className="divide-y divide-line border-y border-line">
            {education.map((entry) => (
              <li key={entry.qualification} className="flex gap-4 py-5">
                <GraduationCap className="mt-0.5 size-5 shrink-0 text-copper" aria-hidden="true" />
                <div>
                  <p className="font-medium text-ink">{entry.qualification}</p>
                  {(entry.institution || entry.period) && (
                    <p className="mt-0.5 text-sm text-ink-muted">
                      {[entry.institution && [entry.institution, entry.location].filter(Boolean).join(', '), entry.period]
                        .filter(Boolean)
                        .join(' · ')}
                    </p>
                  )}
                  {entry.verification && (
                    <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-moss">
                      <BadgeCheck className="size-4" aria-hidden="true" />
                      {entry.verification}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
          {educationNote && <p className="mt-3 text-sm text-ink-muted">{educationNote}</p>}
        </div>
        {educationPhoto && <Figure photo={educationPhoto} className="max-w-48 sm:max-w-none" />}
      </div>

      <h3 className="mt-14 font-mono text-xs tracking-wider text-ink-muted uppercase">How I work</h3>
      <ul className="mt-5 grid gap-x-8 sm:grid-cols-2">
        {values.map((value) => (
          <li key={value.title} className="border-t border-line py-4">
            <p className="font-medium text-ink">{value.title}</p>
            <p className="mt-1 text-sm leading-relaxed text-ink-muted">{value.description}</p>
          </li>
        ))}
      </ul>

      {faithStatement.enabled && (
        <p className="mt-10 border-l-2 border-copper pl-4 text-ink-soft italic">{faithStatement.text}</p>
      )}
    </Section>
  )
}
