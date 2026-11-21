const router = {
  push: () => {},
  replace: () => {},
  back: () => {},
  forward: () => {},
  refresh: () => {},
  prefetch: () => {},
};

export function usePathname() {
  return '/';
}

export function useRouter() {
  return router;
}

export function useSearchParams() {
  return new URLSearchParams();
}

export function useParams() {
  return {};
}
