import { Check, Copy, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons'
import { useEffect, useState } from 'react'
import { ExternalLink } from '../components/ExternalLink'
import { portfolio } from '../data/portfolio'

type CopyState = 'idle' | 'copied' | 'failed'

export function Contact() {
  const { contact } = portfolio
  const [copyState, setCopyState] = useState<CopyState>('idle')

  useEffect(() => {
    if (copyState === 'idle') return
    const timer = window.setTimeout(() => setCopyState('idle'), 2500)
    return () => window.clearTimeout(timer)
  }, [copyState])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email)
      setCopyState('copied')
    } catch {
      // Clipboard access can be blocked (insecure context, permissions); the mailto link still works.
      setCopyState('failed')
    }
  }

  const profiles = [
    { label: 'GitHub', href: contact.github, icon: GithubIcon },
    contact.linkedin ? { label: 'LinkedIn', href: contact.linkedin, icon: LinkedinIcon } : null,
  ].filter((item) => item !== null)

  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <p className="font-mono text-xs tracking-wider text-paper/60 uppercase">
          <span aria-hidden="true">06 — </span>Contact
        </p>
        <h2 id="contact-heading" className="mt-4 max-w-3xl font-display text-4xl leading-tight font-medium sm:text-5xl">
          Have a project, a role or a question? Let's talk.
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/75">
          Email is the most reliable way to reach me, whether you are hiring, collaborating or just want to compare notes.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center justify-center gap-2.5 rounded-sm bg-paper px-5 py-3.5 font-medium text-ink transition-colors hover:bg-copper hover:text-paper"
          >
            <Mail className="size-4" aria-hidden="true" />
            {contact.email}
          </a>
          <button
            type="button"
            onClick={copyEmail}
            className="inline-flex items-center justify-center gap-2 rounded-sm border border-paper/25 px-4 py-3.5 text-sm text-paper transition-colors hover:border-paper"
          >
            {copyState === 'copied' ? <Check className="size-4" aria-hidden="true" /> : <Copy className="size-4" aria-hidden="true" />}
            {copyState === 'copied' ? 'Copied' : 'Copy email'}
          </button>
          <span role="status" className="text-sm text-paper/70">
            {copyState === 'failed' && 'Could not copy. Please select the address instead.'}
          </span>
        </div>

        <ul className="mt-14 flex flex-wrap gap-x-8 gap-y-3 border-t border-paper/15 pt-8">
          {profiles.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <ExternalLink href={href} className="inline-flex items-center gap-2 text-paper/80 transition-colors hover:text-paper">
                <Icon className="size-4" aria-hidden="true" />
                {label}
              </ExternalLink>
            </li>
          ))}
          <li className="text-paper/60">{portfolio.profile.location}</li>
        </ul>
      </div>
    </section>
  )
}
