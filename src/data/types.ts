/**
 * Content model for the portfolio. Every section renders from these shapes,
 * so adding a project or a certificate is a data change, never a UI change.
 */

export interface Photo {
  /** Path under /public, e.g. "/images/portrait.jpg". */
  src: string
  alt: string
  caption?: string
  width: number
  height: number
}

/** A headline number with the context that makes it honest. */
export interface Metric {
  value: string
  label: string
}

export interface Profile {
  name: string
  initials: string
  title: string
  location: string
  headline: string
  intro: string
  /** Leave undefined to show the monogram instead. */
  photo?: Photo
  /**
   * Only set this once you actually want to advertise availability.
   * When undefined, the site makes no availability claim.
   */
  availability?: string
}

export interface Contact {
  email: string
  github: string
  /** Hidden everywhere until a real profile URL is supplied. */
  linkedin?: string
  /** Earlier portfolio, kept as a reference link. */
  previousPortfolio?: string
}

export interface Education {
  qualification: string
  institution?: string
  location?: string
  period?: string
  /** e.g. confirmation that the qualification is verified by ZAQA. */
  verification?: string
}

export interface Experience {
  organisation: string
  role: string
  /** Free text so unknown dates can simply be omitted rather than invented. */
  period?: string
  location?: string
  summary: string
  /** Headline numbers for this role, taken from the CV. */
  metrics?: Metric[]
  /** Outcomes: what changed because of the work. */
  achievements?: string[]
  /** Day-to-day duties. */
  responsibilities: string[]
  /** Related project names shown as tags under the entry. */
  projectExposure?: string[]
  photo?: Photo
}

export interface SkillGroup {
  title: string
  /** Shown under the group title, e.g. to mark exposure rather than expertise. */
  note?: string
  skills: string[]
}

export type ProjectStatus =
  | 'live'
  | 'developed'
  | 'in-development'
  | 'prototype'
  | 'concept'
  | 'academic'
  | 'institutional'

export type ProjectContext =
  | 'Axis Solutions Africa'
  | 'Lusaka South University College'
  | 'Client work'
  | 'Personal'
  | 'Academic'

export interface Project {
  id: string
  name: string
  /** What the product does, in one or two sentences. */
  purpose: string
  /** How it helps the people who use it day to day. */
  impact?: string[]
  status: ProjectStatus
  /** Extra qualifier appended to the status badge, e.g. "PWA · Native App Planned". */
  statusDetail?: string
  context: ProjectContext
  year?: string
  /** Only what is known about Flaviour's own part in the work. */
  contribution?: string[]
  /** Ordered user journey or capability list, rendered as numbered steps. */
  highlights?: { title: string; items: string[] }
  technologies?: string[]
  /** Accuracy caveat shown with the project (e.g. integrations not presented as live). */
  note?: string
  demoUrl?: string
  sourceUrl?: string
  /** Only use real screenshots of the actual project. */
  image?: Photo
  /** Address shown in the screenshot's browser frame, e.g. "demo.revpos.co.zm". */
  displayUrl?: string
  featured?: boolean
  /** Set false to keep an entry in the data file without publishing it. */
  published?: boolean
}

export interface LearningItem {
  title: string
  provider?: string
  year?: string
  kind: 'Training' | 'Certificate' | 'Course' | 'Membership' | 'In progress'
  credentialUrl?: string
}

export interface Value {
  title: string
  description: string
}

export interface Portfolio {
  profile: Profile
  contact: Contact
  about: string[]
  aboutPhoto?: Photo
  values: Value[]
  /** Optional personal values statement; rendered only when enabled. */
  faithStatement: { enabled: boolean; text: string }
  /** Headline numbers shown under the hero. */
  impact: Metric[]
  education: Education[]
  educationPhoto?: Photo
  /** Shown under Education, e.g. how to request certificate copies. */
  educationNote?: string
  experience: Experience[]
  skills: SkillGroup[]
  projects: Project[]
  learning: LearningItem[]
  interests: string[]
}
