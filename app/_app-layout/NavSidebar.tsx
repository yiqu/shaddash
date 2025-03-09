'use client';

import {
  Sidebar,
  SidebarRail,
  SidebarMenu,
  SidebarGroup,
  SidebarFooter,
  SidebarHeader,
  SidebarContent,
} from '@/components/ui/sidebar';

import NavHeader from './NavHeader';
import { NavFooter } from './NavFooter';
import { LEFT_NAV_ITEMS } from './NavList';
import { NavFlatSection } from './NavFlatSection';
import { NavExpandableSection } from './NavExpandableSection';
import AddNewNavItem from '../_left-navigation/AddNewNavItem';
import { NavProjects } from '../_left-navigation/ProjectsNavItems';

export function NavSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" { ...props }>
      <SidebarHeader>
        <NavHeader />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <NavExpandableSection items={ LEFT_NAV_ITEMS.navMain2 } />
          <div className="my-2"></div>
          <NavFlatSection items={ LEFT_NAV_ITEMS.navMain } />
          <div className="my-1"></div>
        </SidebarGroup>
        <NavProjects />
      </SidebarContent>
      <SidebarFooter>
        <NavFooter />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
