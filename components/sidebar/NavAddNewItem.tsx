'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';
import { Plus, Folder, MoreHorizontal } from 'lucide-react';

import { cn } from '@/lib/utils';
import {
  useSidebar,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuAction,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';

export function AddNewItem() {
  const [isHovered, setIsHovered] = useState(false);
  const { isMobile, state } = useSidebar();
  const isCollapsed = state === 'collapsed';
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<boolean>(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (event: React.MouseEvent) => {
    setIsHovered(true);
    if (isCollapsed) {
      setActiveItem(true);
      const rect = event.currentTarget.getBoundingClientRect();
      setMenuPosition({ x: rect.right, y: rect.top });
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (isCollapsed) {
      timeoutRef.current = setTimeout(() => {
        setIsOpen(false);
      }, 300);
    }
  };

  const handleMenuMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleMenuMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <SidebarMenu>
      <SidebarMenuItem onMouseEnter={ (e) => handleMouseEnter(e) } onMouseLeave={ () => handleMouseLeave() }>
        { isCollapsed ?
          <SidebarMenuButton
            asChild
            className={ cn({
              'bg-sidebar-accent text-sidebar-accent-foreground': activeItem,
            }) }
          >
            <Link href="/tasks/new">
              <Plus />
            </Link>
          </SidebarMenuButton>
        : <>
          <SidebarMenuButton asChild>
            <Link href="/tasks/new">
              <Plus />
              <span>New Item</span>
            </Link>
          </SidebarMenuButton>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuAction className="cursor-pointer">
                <MoreHorizontal
                    className={ cn('h-4 w-4', {
                      hidden: !isMobile && !isHovered,
                    }) }
                  />
              </SidebarMenuAction>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="right" align="start" className="w-48">
              <DropdownMenuItem asChild>
                <a href={ '' }>
                  <Folder className="mr-2 h-4 w-4" />
                  <span>View Project</span>
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Folder className="mr-2 h-4 w-4" />
                <span>Share Project</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Folder className="mr-2 h-4 w-4" />
                <span>Delete Project</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </>
        }
        { isCollapsed ?
          <DropdownMenu open={ isOpen } onOpenChange={ setIsOpen }>
            <DropdownMenuContent
              side="right"
              align="start"
              className="w-48"
              style={ {
                position: 'fixed',
                left: `${menuPosition.x}px`,
                top: `${menuPosition.y}px`,
              } }
              onMouseEnter={ handleMenuMouseEnter }
              onMouseLeave={ handleMenuMouseLeave }
            >
              { activeItem ?
                <>
                  <DropdownMenuItem disabled className="font-medium">
                    New Item
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href={ '' }>
                      <Folder className="mr-2 h-4 w-4" />
                      <span>View Project</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Folder className="mr-2 h-4 w-4" />
                    <span>Share Project</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Folder className="mr-2 h-4 w-4" />
                    <span>Delete Project</span>
                  </DropdownMenuItem>
                </>
              : null }
            </DropdownMenuContent>
          </DropdownMenu>
        : null }
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
