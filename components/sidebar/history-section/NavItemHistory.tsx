'use client';

import { History as HistoryIcon } from 'lucide-react';

import { NestNavListItem } from '@/components/models/nav.model';
import { useSidebar, SidebarMenu } from '@/components/ui/sidebar';

import NavExpandableItem from '../NavExpandableItem';

const ITEMS: NestNavListItem[] = [
  {
    title: 'History',
    url: '/history',
    icon: HistoryIcon,
    isActive: true,
    items: [
      {
        title: 'Milk tea, Lg, less ice, boba, jelly',
        url: '/history',
      },
      {
        title: 'Mango tea, Lg, less ice, boba, jelly',
        url: '/history',
      },
    ],
  },
];

export function NavItemHistory() {
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
