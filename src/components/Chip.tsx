import type { ReactNode } from 'react'

export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-sm border border-line bg-paper-raised px-2.5 py-1 text-sm text-ink-soft">
      {children}
    </span>
  )
}
