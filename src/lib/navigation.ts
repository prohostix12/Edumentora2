export type NavigationKind = 'nav' | 'sub';

export type NavigationItemData = {
  id?: string;
  name: string;
  href: string;
  visibility: boolean;
  kind: NavigationKind;
  parentId?: string | null;
  order: number;
};

export const NAV_OPTIONS = [
  { name: 'Home', href: '/' },
  { name: 'B.Tech Credit Transfer', href: '/b-tech-credit-transfer' },
  { name: 'Programmes', href: '/programs' },
  { name: 'Universities', href: '/universities' },
  { name: 'About', href: '/about-us' },
  { name: 'Contact', href: '/contact' },
  { name: 'About us', href: '/about-us' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Blog', href: '/blog' },
  { name: 'UG Credit Transfer', href: '/ug-credit-transfer' },
  { name: 'PG Credit Transfer', href: '/pg-credit-transfer' },
  { name: 'Diploma Credit Transfer', href: '/diploma-credit-transfer' },
  { name: 'Apprenticeship Learning Program', href: '/apprenticeship-learning-program' },
];

export const defaultNavigationData: NavigationItemData[] = [
  { id: 'home', name: 'Home', href: '/', visibility: true, kind: 'nav', parentId: null, order: 0 },
  { id: 'b-tech-credit-transfer', name: 'B.Tech Credit Transfer', href: '/b-tech-credit-transfer', visibility: true, kind: 'nav', parentId: null, order: 1 },
  { id: 'programmes', name: 'Programmes', href: '/programs', visibility: true, kind: 'nav', parentId: null, order: 2 },
  { id: 'universities', name: 'Universities', href: '/universities', visibility: true, kind: 'nav', parentId: null, order: 3 },
  { id: 'about', name: 'About', href: '/about-us', visibility: true, kind: 'nav', parentId: null, order: 4 },
  { id: 'contact', name: 'Contact', href: '/contact', visibility: true, kind: 'nav', parentId: null, order: 5 },
  { id: 'about-us', name: 'About us', href: '/about-us', visibility: true, kind: 'sub', parentId: '/about-us', order: 6 },
  { id: 'gallery', name: 'Gallery', href: '/gallery', visibility: true, kind: 'sub', parentId: '/about-us', order: 7 },
  { id: 'blog', name: 'Blog', href: '/blog', visibility: true, kind: 'sub', parentId: '/about-us', order: 8 },
];

export function sortNavigationItems<T extends { order: number; parentId?: string | null }>(items: T[]) {
  return [...items].sort((a, b) => {
    if ((a.parentId ?? '') === (b.parentId ?? '')) return a.order - b.order;
    if (!a.parentId) return -1;
    if (!b.parentId) return 1;
    return a.order - b.order;
  });
}
