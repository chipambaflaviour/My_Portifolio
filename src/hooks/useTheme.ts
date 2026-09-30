import { useCallback, useState } from 'react'

export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'theme'

function readTheme(): Theme {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'
}

/** Light by default; the visitor's choice is remembered in this browser only. */
export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(readTheme)

  const setTheme = useCallback((next: Theme) => {
    if (next === 'dark') document.documentElement.dataset.theme = 'dark'
    else delete document.documentElement.dataset.theme
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Storage can be blocked (private mode); the theme still applies for this visit.
    }
    setThemeState(next)
  }, [])

  return { theme, toggleTheme: () => setTheme(theme === 'dark' ? 'light' : 'dark') }
}
