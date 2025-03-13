'use client';

import { FolderHeart } from 'lucide-react';

import { SidebarMenu } from '@/components/ui/sidebar';
import { NestNavListItem } from '@/models/NavItem.models';
import { SIDEBAR_COLLAPSABLE_FAVORITES } from '@/constants/constants';

import NavExpandableItem from '../NavExpandableItem';

const ITEMS: NestNavListItem[] = [
  {
    title: 'Favorites',
    url: '/favorites',
    icon: FolderHeart,
    isActive: false,
    collapsableStateCookieKey: SIDEBAR_COLLAPSABLE_FAVORITES,
    items: [
      // {
      //   name: 'Jasmine tea, Lg, less ice, boba, jelly',
      //   url: '/favorites',
      // },
      // {
      //   name: 'Brown sugar tea, Lg, less ice, boba, jelly',
      //   url: '/favorites',
      // },
    ],
  },
];

export function NavItemFavorites({ isCollapsed }: { isCollapsed: boolean }) {
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
