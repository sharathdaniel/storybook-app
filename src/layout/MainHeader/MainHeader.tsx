import { useCallback, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './MainHeader.scss';

const THEME_STORAGE_KEY = 'storybook-theme';
type Theme = 'light' | 'dark';

export function MainHeader() {
  // The inline bootstrap script in index.html sets data-theme before paint, so
  // initialise from it — no setState-in-effect needed for the initial value.
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.dataset['theme'] === 'dark' ? 'dark' : 'light',
  );

  const applyTheme = useCallback((next: Theme, persist: boolean) => {
    setTheme(next);
    document.documentElement.dataset['theme'] = next;
    if (persist) localStorage.setItem(THEME_STORAGE_KEY, next);
  }, []);

  useEffect(() => {
    // Follow the OS preference, but only while the user hasn't made a manual
    // choice (a persisted value). setState happens only in the callback.
    const darkQuery = globalThis.matchMedia('(prefers-color-scheme: dark)');
    const onSystemChange = (e: MediaQueryListEvent): void => {
      if (localStorage.getItem(THEME_STORAGE_KEY)) return;
      applyTheme(e.matches ? 'dark' : 'light', false);
    };
    darkQuery.addEventListener('change', onSystemChange);
    return () => darkQuery.removeEventListener('change', onSystemChange);
  }, [applyTheme]);

  const toggleTheme = useCallback(() => {
    applyTheme(theme === 'light' ? 'dark' : 'light', true);
  }, [theme, applyTheme]);

  return (
    <header className="app-c-main-header">
      <Link to="/" className="app-c-page-title" aria-label="Back to home">
        StyleBase
      </Link>
      <nav className="app-c-header-nav" aria-label="Demos">
        <ul className="u-scrollbar">
          <li>
            <NavLink to="/" end>
              Components
            </NavLink>
          </li>
        </ul>
      </nav>

      <button
        type="button"
        className="app-c-btn app-c-btn-secondary app-c-btn-sm u-ms-auto"
        aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
        onClick={toggleTheme}
      >
        {theme === 'dark' ? 'Light mode' : 'Dark mode'}
      </button>
    </header>
  );
}
