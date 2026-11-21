'use client';
import {createContext, useCallback, useContext, useEffect, useMemo, useRef, useState} from 'react';
import {useRouter} from 'next/navigation';
import {Search, CornerDownLeft, ArrowUpRight, X} from 'lucide-react';
import {searchSite, type SearchEntry} from './catalog';

type SearchContextValue = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  query: string;
  setQuery: (value: string) => void;
  active: number;
  setActive: (value: number) => void;
};

const SearchContext = createContext<SearchContextValue>({
  isOpen: false,
  open: () => {},
  close: () => {},
  query: '',
  setQuery: () => {},
  active: 0,
  setActive: () => {},
});

export function useSearch() {
  return useContext(SearchContext);
}

const quickLinks: SearchEntry[] = [
  {title: 'Get rumahl', description: 'Choose your edition and make yourself at home.', href: '/get-rumahl', category: 'rumahl'},
  {title: 'Installation', description: 'Install rumahl OS on any platform.', href: '/docs/installation', category: 'Docs'},
  {title: 'rumahl OS', description: 'One home for every service you run.', href: '/os', category: 'Products'},
  {title: 'Support center', description: 'How can we help you?', href: '/help', category: 'Support'},
  {title: 'Developer documentation', description: 'Architecture, app packages, API and Storybook.', href: '/developers', category: 'Developers'},
  {title: 'rumahl Design', description: 'RWDS for the web, RUI for the operating system.', href: '/design', category: 'Design'},
];

export function SearchProvider({children}: {children: React.ReactNode}) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => {
    setIsOpen(false);
    setQuery('');
    setActive(0);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setIsOpen((value) => !value);
        setQuery('');
        setActive(0);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <SearchContext.Provider value={{isOpen, open, close, query, setQuery, active, setActive}}>
      {children}
    </SearchContext.Provider>
  );
}

export function NavSearch() {
  const {isOpen, close, query, setQuery, active, setActive} = useSearch();
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const results = useMemo(() => (query.trim() ? searchSite(query).slice(0, 8) : quickLinks), [query]);

  const go = useCallback(
    (href: string) => {
      close();
      if (href.startsWith('http')) {
        window.location.href = href;
      } else {
        router.push(href);
      }
    },
    [close, router]
  );

  useEffect(() => {
    if (!isOpen) return;
    const timer = window.setTimeout(() => inputRef.current?.focus(), 30);
    document.body.style.overflow = 'hidden';
    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        close();
      } else if (event.key === 'ArrowDown') {
        event.preventDefault();
        setActive(Math.min(active + 1, results.length - 1));
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        setActive(Math.max(active - 1, 0));
      } else if (event.key === 'Enter') {
        const target = results[active];
        if (target) {
          event.preventDefault();
          go(target.href);
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, results, active, close, setActive, go]);

  useEffect(() => {
    const item = listRef.current?.querySelector<HTMLElement>('[data-active="true"]');
    item?.scrollIntoView({block: 'nearest'});
  }, [active]);

  if (!isOpen) return null;

  return (
    <>
      <div className="nav-search" role="search">
        <Search size={19} />
        <input
          ref={inputRef}
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setActive(0);
          }}
          placeholder="Search rumahl, docs and support…"
          aria-label="Search"
        />
        <button className="nav-search-close" onClick={close} aria-label="Close search" type="button">
          <X size={18} />
        </button>
      </div>
      <div className="nav-search-panel">
        <p className="nav-search-label">{query.trim() ? 'Results' : 'Quick links'}</p>
        <div className="nav-search-list" ref={listRef}>
          {results.length === 0 && <p className="nav-search-empty">No matches. Try “installation”, “integrations” or “permissions”.</p>}
          {results.map((entry, index) => (
            <button
              key={entry.href + entry.title}
              className="nav-search-result"
              data-active={index === active}
              onMouseEnter={() => setActive(index)}
              onClick={() => go(entry.href)}
              type="button"
            >
              <span className="nav-search-cat">{entry.category}</span>
              <span className="nav-search-body">
                <strong>{entry.title}</strong>
                <span>{entry.description}</span>
              </span>
              {entry.href.startsWith('http') ? <ArrowUpRight size={16} /> : <CornerDownLeft size={16} />}
            </button>
          ))}
        </div>
        <div className="nav-search-footer">
          <span>
            <kbd>↑</kbd>
            <kbd>↓</kbd> to navigate
          </span>
          <span>
            <kbd>↵</kbd> to open
          </span>
          <span>
            <kbd>esc</kbd> to close
          </span>
        </div>
      </div>
    </>
  );
}
