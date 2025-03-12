'use client';

import { FolderHeart } from 'lucide-react';

import { NestNavListItem } from '@/components/models/nav.model';
import { useSidebar, SidebarMenu } from '@/components/ui/sidebar';

import NavExpandableItem from '../NavExpandableItem';

const ITEMS: NestNavListItem[] = [
  {
    title: 'Favorites',
    url: '/favorites',
    icon: FolderHeart,
    isActive: true,
    items: [
      {
        title: 'Jasmine tea, Lg, less ice, boba, jelly',
        url: '/favorites',
      },
      {
        title: 'Brown sugar tea, Lg, less ice, boba, jelly',
        url: '/favorites',
      },
    ],
  },
];

export function NavItemFavorites() {
  const { state } = useSidebar();
  const isCollapsed = state === 'collapsed';

  return (
    <>
      <SidebarMenu className="gap-2">
        { ITEMS.map((item) => (
          <NavExpandableItem key={ item.title } item={ item } isCollapsed={ isCollapsed } />
        )) }
      </SidebarMenu>
    </>
  );
}
