import { Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { ThemeToggle } from '../components/ThemeToggle'
import { navigation } from '../data/navigation'
import { portfolio } from '../data/portfolio'
import { useActiveSection } from '../hooks/useActiveSection'

const sectionIds = navigation.map((item) => item.id)

export function Header() {
  const { profile } = portfolio
  const active = useActiveSection(sectionIds)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      setMenuOpen(false)
      menuButtonRef.current?.focus()
    }
    // Close the mobile panel if the viewport grows past the breakpoint that hides it.
    const desktop = window.matchMedia('(min-width: 768px)')
    const onBreakpoint = () => desktop.matches && setMenuOpen(false)
    window.addEventListener('keydown', onKeyDown)
    desktop.addEventListener('change', onBreakpoint)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      desktop.removeEventListener('change', onBreakpoint)
    }
  }, [menuOpen])

  const linkClass = (id: string) =>
    `relative py-1 text-sm transition-colors hover:text-ink ${active === id ? 'text-ink' : 'text-ink-muted'}`

  return (
    <header
      className={`sticky top-0 z-40 transition-[border-color] ${menuOpen ? 'bg-paper' : 'bg-paper/95 backdrop-blur-sm'} ${
        scrolled || menuOpen ? 'border-b border-line' : 'border-b border-transparent'
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-4 focus:z-50 focus:bg-ink focus:px-3 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
          <span
            aria-hidden="true"
            className="grid size-8 place-items-center rounded-sm bg-ink font-display text-sm font-semibold text-paper italic"
          >
            {profile.initials}
          </span>
          <span className="text-sm font-medium tracking-tight">{profile.name}</span>
        </a>

        <div className="flex items-center gap-2 md:gap-6">
          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-7">
              {navigation.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className={linkClass(item.id)} aria-current={active === item.id ? 'true' : undefined}>
                    {item.label}
                    {active === item.id && <span aria-hidden="true" className="absolute inset-x-0 -bottom-0.5 h-px bg-copper" />}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            ref={menuButtonRef}
            type="button"
            className="inline-flex items-center gap-2 rounded-sm p-2 text-sm md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
            <span>{menuOpen ? 'Close' : 'Menu'}</span>
          </button>
          <ThemeToggle />
        </div>
      </div>

      {menuOpen && (
        <nav id="mobile-menu" aria-label="Primary" className="border-t border-line bg-paper md:hidden">
          <ul className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
            {navigation.map((item) => (
              <li key={item.id} className="border-b border-line/60 last:border-0">
                <a
                  href={`#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                  aria-current={active === item.id ? 'true' : undefined}
                  className={`flex items-center justify-between py-3 ${active === item.id ? 'text-ink' : 'text-ink-soft'}`}
                >
                  {item.label}
                  {active === item.id && <span aria-hidden="true" className="size-1.5 rounded-full bg-copper" />}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
