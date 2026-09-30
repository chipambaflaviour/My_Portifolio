import { ExternalLink } from '../components/ExternalLink'
import { portfolio } from '../data/portfolio'

const currentYear = new Date().getFullYear()

export function Footer() {
  const { profile, contact } = portfolio
  return (
    <footer className="bg-ink text-paper/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 border-t border-paper/15 py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} {profile.name}
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {contact.previousPortfolio && (
              <ExternalLink href={contact.previousPortfolio} className="hover:text-paper">
                Earlier portfolio
              </ExternalLink>
            )}
            <a href="#home" className="hover:text-paper">
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
