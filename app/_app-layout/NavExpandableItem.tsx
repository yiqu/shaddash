'use client';

import { ChevronRight } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

import { NestNavListItem } from '@/components/models/nav.model';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import {
  SidebarMenuSub,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from '@/components/ui/sidebar';

export default function NavExpandableItem({ item, isCollapsed }: { item: NestNavListItem; isCollapsed: boolean }) {
  const [open, setOpen] = useState(false);
  const hasItems = item.items && item.items.length > 0;
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Clear timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 300); // Small delay to prevent flickering
  };

  // If collapsed and has items, use Popover for hover menu
  if (isCollapsed && hasItems) {
    return (
      <SidebarMenuItem>
        <Popover open={ open } onOpenChange={ setOpen }>
          <PopoverTrigger asChild>
            <SidebarMenuButton onMouseEnter={ handleMouseEnter } onMouseLeave={ handleMouseLeave }>
              { item.icon ?
                <item.icon />
              : null }
              <span>{ item.title }</span>
              <ChevronRight className="ml-auto" />
            </SidebarMenuButton>
          </PopoverTrigger>
          <PopoverContent
            side="right"
            align="start"
            className="w-48 p-2"
            onMouseEnter={ handleMouseEnter }
            onMouseLeave={ handleMouseLeave }
          >
            <div className="mb-2 text-sm font-medium">{ item.title }</div>
            <div className="space-y-1">
              { item.items?.map((subItem) => (
                <a
                  key={ subItem.title }
                  href={ subItem.url }
                  className={ `
                    hover:bg-accent hover:text-accent-foreground
                    flex items-center rounded-md px-2 py-1.5 text-sm
                  ` }
                >
                  { subItem.title }
                </a>
              )) }
            </div>
          </PopoverContent>
        </Popover>
      </SidebarMenuItem>
    );
  }

  // Default collapsible behavior when not collapsed
  return (
    <Collapsible asChild defaultOpen={ item.isActive } className={ `
      group/collapsible
    ` }>
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton tooltip={ item.title }>
            { item.icon ?
              <item.icon />
            : null }
            <span>{ item.title }</span>
            <ChevronRight
              className={ `
                ml-auto transition-transform duration-200
                group-data-[state=open]/collapsible:rotate-90
              ` }
            />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            { item.items?.map((subItem) => (
              <SidebarMenuSubItem key={ subItem.title }>
                <SidebarMenuSubButton asChild>
                  <a href={ subItem.url }>
                    <span>{ subItem.title }</span>
                  </a>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            )) }
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  );
}
