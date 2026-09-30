import { Chip } from '../components/Chip'
import { Section } from '../components/Section'
import { portfolio } from '../data/portfolio'

export function Skills() {
  return (
    <Section
      id="skills"
      index="03"
      eyebrow="Skills"
      title="Tools and technologies I work with."
      intro="Grouped by the kind of work they support. No ratings or percentages: the projects below show how they get used."
    >
      <div className="grid gap-x-10 sm:grid-cols-2">
        {portfolio.skills.map((group) => (
          <div key={group.title} className="border-t border-line py-6">
            <h3 className="font-medium text-ink">{group.title}</h3>
            {group.note && <p className="mt-1 text-sm text-ink-muted">{group.note}</p>}
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li key={skill}>
                  <Chip>{skill}</Chip>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
