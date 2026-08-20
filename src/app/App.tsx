import { useEffect, useState } from 'react';
import { CategoriesPage } from '../pages/CategoriesPage';
import { HomePage } from '../pages/HomePage';
import { RecipesPage } from '../pages/RecipesPage';
import { SearchPage } from '../pages/SearchPage';

type Theme = 'light' | 'dark';
type Page = 'home' | 'recipes' | 'categories' | 'search';

const pagePaths: Record<Page, string> = {
  home: '/',
  recipes: '/recipes/',
  categories: '/categories/',
  search: '/search/',
};

function getInitialTheme(): Theme {
  const savedTheme = window.localStorage.getItem('theme');

  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function getPageFromPath(): Page {
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/';

  if (pathname === '/recipes') return 'recipes';
  if (pathname === '/categories') return 'categories';
  if (pathname === '/search') return 'search';

  return 'home';
}

function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [page, setPage] = useState<Page>(getPageFromPath);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handlePopState = () => setPage(getPageFromPath());

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 8);

    updateScrollState();
    window.addEventListener('scroll', updateScrollState, { passive: true });
    return () => window.removeEventListener('scroll', updateScrollState);
  }, []);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  const navigate = (nextPage: Page) => {
    if (window.location.pathname !== pagePaths[nextPage]) {
      window.history.pushState({}, '', pagePaths[nextPage]);
    }

    setPage(nextPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="app-shell">
      <header className={isScrolled ? 'site-header is-scrolled' : 'site-header'}>
        <button className="brand" type="button" onClick={() => navigate('home')}>
          My Cookbook
        </button>
        <div className="header-actions">
          <nav className="site-nav" aria-label="Main navigation">
            {(['home', 'recipes', 'categories'] as const).map((item) => (
              <button className={page === item ? 'nav-link is-active' : 'nav-link'} type="button" key={item} onClick={() => navigate(item)}>{item}</button>
            ))}
            <button className={page === 'search' ? 'nav-link is-active' : 'nav-link'} type="button" onClick={() => navigate('search')}>Search</button>
          </nav>
          <button className="theme-toggle" type="button" onClick={toggleTheme}>
            <span className="theme-toggle-indicator" aria-hidden="true" />
            {theme === 'light' ? 'Light' : 'Dark'}
          </button>
        </div>
      </header>
      {page === 'home' && <HomePage onNavigate={navigate} />}
      {page === 'recipes' && <RecipesPage />}
      {page === 'categories' && <CategoriesPage />}
      {page === 'search' && <SearchPage />}
    </main>
  );
}

export default App;
