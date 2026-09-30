import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  index: string
  eyebrow: string
  title: string
  intro?: string
  /** "split" puts the heading beside the content; "stacked" gives content the full width. */
  layout?: 'split' | 'stacked'
  children: ReactNode
}

/** Shared frame for every content section: numbered eyebrow, heading, optional lead. */
export function Section({ id, index, eyebrow, title, intro, layout = 'split', children }: SectionProps) {
  const headingId = `${id}-heading`
  const stacked = layout === 'stacked'
  return (
    <section id={id} aria-labelledby={headingId} className="border-t border-line">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className={stacked ? 'grid gap-12' : 'grid gap-10 lg:grid-cols-12 lg:gap-8'}>
          <header className={stacked ? 'max-w-2xl' : 'lg:col-span-4'}>
            <p className="font-mono text-xs tracking-wider text-copper uppercase">
              <span aria-hidden="true">{index} — </span>
              {eyebrow}
            </p>
            <h2 id={headingId} className="mt-4 font-display text-3xl leading-tight font-medium text-ink sm:text-4xl">
              {title}
            </h2>
            {intro && <p className={`mt-4 leading-relaxed text-ink-muted ${stacked ? 'max-w-xl' : 'max-w-sm'}`}>{intro}</p>}
          </header>
          <div className={stacked ? 'min-w-0' : 'min-w-0 lg:col-span-8'}>{children}</div>
        </div>
      </div>
    </section>
  )
}
