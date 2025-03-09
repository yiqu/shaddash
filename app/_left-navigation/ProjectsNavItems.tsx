'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Plus, Folder, MoreHorizontal, type LucideIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import {
  useSidebar,
  SidebarMenu,
  SidebarGroup,
  SidebarMenuItem,
  SidebarGroupLabel,
  SidebarMenuAction,
  SidebarMenuButton,
} from '@/components/ui/sidebar';

const projects: any[] = [
  {
    name: 'New Task',
    url: '/tasks/new',
    icon: Plus,
  },
];

export function NavProjects() {
  const [isHovered, setIsHovered] = useState(false);
  const { isMobile } = useSidebar();

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      { /* <SidebarGroupLabel>Projects</SidebarGroupLabel> */ }
      <SidebarMenu>
        <SidebarMenuItem onMouseEnter={ () => setIsHovered(true) } onMouseLeave={ () => setIsHovered(false) }>
          <SidebarMenuButton
            asChild
            className={ cn({
              'bg-sidebar-accent text-sidebar-accent-foreground': isHovered,
            }) }
          >
            <Link href="/tasks/new">
              <Plus />
              <span>New Task</span>
            </Link>
          </SidebarMenuButton>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuAction showOnHover onMouseEnter={ () => setIsHovered(true) }>
                <MoreHorizontal />
                <span className="sr-only">More</span>
              </SidebarMenuAction>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-48 rounded-lg"
              side={ isMobile ? 'bottom' : 'right' }
              align={ isMobile ? 'end' : 'start' }
            >
              <DropdownMenuItem>
                <Folder className="text-muted-foreground" />
                <span>Cleaning</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Folder className="text-muted-foreground" />
                <span>Maintenance</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Folder className="text-muted-foreground" />
                <span>Select...</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton className="text-sidebar-foreground/70">
            <MoreHorizontal className="text-sidebar-foreground/70" />
            <span>More</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  );
}
