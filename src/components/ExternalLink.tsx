import type { AnchorHTMLAttributes, ReactNode } from 'react'

interface ExternalLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'target' | 'rel'> {
  href: string
  children: ReactNode
}

/** Opens in a new tab safely and tells screen-reader users that it will. */
export function ExternalLink({ children, ...props }: ExternalLinkProps) {
  return (
    <a {...props} target="_blank" rel="noopener noreferrer">
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  )
}
