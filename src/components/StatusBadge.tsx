import type { ProjectStatus } from '../data/types'

const statusStyles: Record<ProjectStatus, { label: string; className: string }> = {
  live: { label: 'Live', className: 'bg-moss-soft text-moss' },
  developed: { label: 'Developed System', className: 'bg-moss-soft text-moss' },
  'in-development': { label: 'In Development', className: 'bg-copper-soft text-copper' },
  prototype: { label: 'Prototype', className: 'bg-copper-soft text-copper' },
  concept: { label: 'Concept', className: 'border border-line text-ink-muted' },
  academic: { label: 'Academic Project', className: 'border border-line text-ink-soft' },
  institutional: { label: 'Institutional Work', className: 'border border-line text-ink-soft' },
}

export function StatusBadge({ status, detail }: { status: ProjectStatus; detail?: string }) {
  const { label, className } = statusStyles[status]
  return (
    <span className={`inline-block rounded-sm px-2 py-0.5 font-mono text-[0.7rem] leading-relaxed tracking-wide uppercase ${className}`}>
      {label}
      {detail && <span className="normal-case opacity-80"> · {detail}</span>}
    </span>
  )
}
