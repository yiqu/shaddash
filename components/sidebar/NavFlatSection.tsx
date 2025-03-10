import Link from 'next/link';
import { type LucideIcon } from 'lucide-react';

import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';

import { LEFT_NAV_ITEMS } from '../side-nav/NavList';

const ITEMS = LEFT_NAV_ITEMS.navMain;

export function NavFlatSection({ items = ITEMS }: { items?: LeftNavItem[] }) {
  return (
    <>
      { /* <SidebarGroupLabel>About</SidebarGroupLabel> */ }
      <SidebarMenu className="gap-2">
        { items.map((item) => (
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

interface LeftNavItem {
  name: string;
  tooltip?: string;
  url: string;
  icon: LucideIcon;
}
