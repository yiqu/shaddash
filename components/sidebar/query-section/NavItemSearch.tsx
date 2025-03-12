import Link from 'next/link';
import { Search } from 'lucide-react';

import { LeftNavItem } from '@/models/NavItem.models';
import { SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarGroupLabel } from '@/components/ui/sidebar';

const ITEMS: LeftNavItem[] = [
  {
    name: 'Search',
    url: '/search',
    icon: Search,
  },
];

export function NavItemSearch() {
  return (
    <>
      <SidebarGroupLabel>Query</SidebarGroupLabel>
      <SidebarMenu className="gap-2">
        { ITEMS.map((item) => (
          <SidebarMenuItem key={ item.name }>
            <SidebarMenuButton asChild>
              <Link href={ item.url }>
                <item.icon />
                <span>{ item.name }</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        )) }
      </SidebarMenu>
    </>
  );
}
