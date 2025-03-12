'use client';

import {
  Sidebar,
  SidebarRail,
  SidebarGroup,
  SidebarFooter,
  SidebarHeader,
  SidebarContent,
} from '@/components/ui/sidebar';

import NavHeader from './NavHeader';
import { NavFooter } from './NavFooter';
import { NavItemSearch } from '../sidebar/query-section/NavItemSearch';
import NavItemAddNewBoba from '../sidebar/add-section/NavItemAddNewBoba';
import NavSectionQuickAccess from '../sidebar/quick-access-section/NavSectionQuickAccess';

export function NavSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" { ...props }>
      <SidebarHeader>
        <NavHeader />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <NavItemSearch />
          <div className="my-1"></div>
          <NavItemAddNewBoba />
          <div className="my-1"></div>
          <NavSectionQuickAccess />
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavFooter />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
