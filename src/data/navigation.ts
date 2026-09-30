export interface NavItem {
  id: string
  label: string
}

/** Section order for the header navigation. Each id must match a rendered section. */
export const navigation: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'learning', label: 'Learning' },
  { id: 'contact', label: 'Contact' },
]
