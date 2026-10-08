import { ArrowUpRight, Check, Code2, Info } from 'lucide-react'
import { useMemo, useState } from 'react'
import { BrowserFrame } from '../components/BrowserFrame'
import { Chip } from '../components/Chip'
import { ExternalLink } from '../components/ExternalLink'
import { Section } from '../components/Section'
import { StatusBadge } from '../components/StatusBadge'
import { publishedProjects } from '../data/portfolio'
import type { Project, ProjectContext } from '../data/types'

type Filter = 'All' | ProjectContext

export function Projects() {
  const [filter, setFilter] = useState<Filter>('All')

  // Filters come from the data, so a new context appears without touching this file.
  const filters = useMemo<Filter[]>(
    () => ['All', ...Array.from(new Set(publishedProjects.map((project) => project.context)))],
    [],
  )
  const visible = filter === 'All' ? publishedProjects : publishedProjects.filter((project) => project.context === filter)
  const showcased = visible.filter((project) => project.featured && project.image)
  const others = visible.filter((project) => !(project.featured && project.image))

  return (
    <Section
      id="projects"
      index="04"
      eyebrow="Selected work"
      title="Products that make someone’s working day easier."
      intro="What each system does, how it helps the people who use it, and the part I played. Every project carries its real status, and links appear only where a public demo or repository exists."
      layout="stacked"
    >
      <div role="group" aria-label="Filter projects by context" className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
        {filters.map((option) => (
          <button
            key={option}
            type="button"
            aria-pressed={filter === option}
            onClick={() => setFilter(option)}
            className={`shrink-0 rounded-sm border px-3 py-1.5 text-sm transition-colors ${
              filter === option ? 'border-ink bg-ink text-paper' : 'border-line text-ink-soft hover:border-ink-muted'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        Showing {visible.length} {visible.length === 1 ? 'project' : 'projects'}
      </p>

      {showcased.length > 0 && (
        <div className="mt-12 space-y-20 md:space-y-28">
          {showcased.map((project, index) => (
            <ShowcaseProject key={project.id} project={project} reversed={index % 2 === 1} />
          ))}
        </div>
      )}

      {others.length > 0 && (
        <div className={showcased.length > 0 ? 'mt-24' : 'mt-10'}>
          {showcased.length > 0 && (
            <h3 className="mb-6 font-mono text-xs tracking-wider text-ink-muted uppercase">More work</h3>
          )}
          <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {others.map((project) => (
              <li key={project.id}>
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </Section>
  )
}

function ShowcaseProject({ project, reversed }: { project: Project; reversed: boolean }) {
  return (
    // On large screens the screenshot and the story share a top edge, and the
    // stack, note and links sit under the screenshot so the columns balance.
    // Explicit grid placement keeps the reading order (image, story, details)
    // the same on small screens.
    <article
      aria-labelledby={`${project.id}-title`}
      className="grid gap-x-12 gap-y-8 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-y-6"
    >
      <div className={`lg:col-span-7 lg:row-start-1 ${reversed ? 'lg:col-start-6' : 'lg:col-start-1'}`}>
        {project.image && <BrowserFrame photo={project.image} address={project.displayUrl} />}
      </div>
      <div className={`lg:col-span-5 lg:row-span-2 lg:row-start-1 ${reversed ? 'lg:col-start-1' : 'lg:col-start-8'}`}>
        <ProjectMeta project={project} />
        <h3 id={`${project.id}-title`} className="mt-4 font-display text-3xl leading-tight font-medium text-ink sm:text-4xl">
          {project.name}
        </h3>
        <p className="mt-4 leading-relaxed text-ink-soft">{project.purpose}</p>
        <Impact project={project} />
        <Contribution project={project} />
      </div>
      <div
        className={`-mt-3 lg:col-span-7 lg:row-start-2 lg:mt-0 lg:[&>*:first-child]:mt-0 ${reversed ? 'lg:col-start-6' : 'lg:col-start-1'}`}
      >
        <Technologies project={project} />
        <ProjectNote project={project} />
        <ProjectLinks project={project} />
      </div>
    </article>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      aria-labelledby={`${project.id}-title`}
      className="flex h-full flex-col rounded-sm border border-line bg-paper-raised p-6 transition-colors hover:border-ink-muted"
    >
      <ProjectMeta project={project} />
      <h3 id={`${project.id}-title`} className="mt-4 font-display text-xl leading-snug font-medium text-ink">
        {project.name}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">{project.purpose}</p>
      <Impact project={project} compact />
      <Contribution project={project} />
      <Technologies project={project} />
      <ProjectNote project={project} />
      <div className="mt-auto">
        <ProjectLinks project={project} />
      </div>
    </article>
  )
}

function ProjectMeta({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
      <StatusBadge status={project.status} detail={project.statusDetail} />
      <span className="font-mono text-xs text-ink-muted">
        {project.context}
        {project.year && ` · ${project.year}`}
      </span>
    </div>
  )
}

function Impact({ project, compact = false }: { project: Project; compact?: boolean }) {
  if (!project.impact?.length) return null
  return (
    <div className={compact ? 'mt-4' : 'mt-6 rounded-sm border-l-2 border-copper bg-copper-soft/50 py-4 pr-4 pl-5'}>
      <h4 className="font-mono text-[0.7rem] tracking-wider text-copper uppercase">How it helps</h4>
      <ul className="mt-2.5 space-y-2">
        {project.impact.map((item) => (
          <li key={item} className={`flex gap-2.5 leading-relaxed text-ink ${compact ? 'text-sm' : ''}`}>
            <Check className="mt-1 size-3.5 shrink-0 text-copper" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

function Contribution({ project }: { project: Project }) {
  if (!project.contribution?.length) return null
  return (
    <div className="mt-5">
      <h4 className="font-mono text-[0.7rem] tracking-wider text-ink-muted uppercase">My part</h4>
      <ul className="mt-2 space-y-1.5">
        {project.contribution.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
            <span aria-hidden="true" className="mt-[0.65em] h-px w-2.5 shrink-0 bg-ink-muted" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

function Technologies({ project }: { project: Project }) {
  if (!project.technologies?.length) return null
  return (
    <ul aria-label="Technologies" className="mt-5 flex flex-wrap gap-1.5">
      {project.technologies.map((technology) => (
        <li key={technology}>
          <Chip>{technology}</Chip>
        </li>
      ))}
    </ul>
  )
}

function ProjectNote({ project }: { project: Project }) {
  if (!project.note) return null
  return (
    <p className="mt-5 flex gap-2 text-xs leading-relaxed text-ink-muted">
      <Info className="mt-px size-3.5 shrink-0" aria-hidden="true" />
      {project.note}
    </p>
  )
}

function ProjectLinks({ project }: { project: Project }) {
  if (!project.demoUrl && !project.sourceUrl) return null
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {project.demoUrl && (
        <ExternalLink
          href={project.demoUrl}
          className="inline-flex items-center gap-1.5 rounded-sm bg-ink px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-copper"
        >
          Live demo<span className="sr-only"> of {project.name}</span>
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </ExternalLink>
      )}
      {project.sourceUrl && (
        <ExternalLink
          href={project.sourceUrl}
          className="inline-flex items-center gap-1.5 rounded-sm border border-ink/25 px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-ink"
        >
          <Code2 className="size-4" aria-hidden="true" />
          Source code<span className="sr-only"> for {project.name}</span>
        </ExternalLink>
      )}
    </div>
  )
}
