import { ReactNode } from 'react';
import { Plus, Search, History, CircleDot, FolderHeart } from 'lucide-react';

export function getSideBarLucideIcon(url: string) {
  switch (url) {
    case 'new':
      return <Plus />;
    case 'search':
      return <Search />;
    case 'favorites':
      return <FolderHeart />;
    case 'history':
      return <History />;
    default:
      return null;
  }
}

export function SideBarLucideIcon({ url }: { url: string }): ReactNode {
  if (url === 'new') {
    return <Plus />;
  } else if (url === 'search') {
    return <Search />;
  } else if (url === 'favorites') {
    return <FolderHeart />;
  } else if (url === 'history') {
    return <History />;
  }
  return <CircleDot />;
}
