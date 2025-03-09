'use client';

import { NestNavListItem } from '@/components/models/nav.model';
import { useSidebar, SidebarMenu } from '@/components/ui/sidebar';

import NavExpandableItem from './NavExpandableItem';

export function NavExpandableSection({ items }: { items: NestNavListItem[] }) {
  const { state } = useSidebar();
  const isCollapsed = state === 'collapsed';

  return (
    <>
      { /* <SidebarGroupLabel>Main</SidebarGroupLabel> */ }
      <SidebarMenu className="gap-2">
        { items.map((item) => (
          <NavExpandableItem key={ item.title } item={ item } isCollapsed={ isCollapsed } />
        )) }
      </SidebarMenu>
    </>
  );
}
