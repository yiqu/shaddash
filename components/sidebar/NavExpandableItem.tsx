/* eslint-disable readable-tailwind/multiline */
'use client';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import { useOptimistic, useTransition } from 'react';

import useSideBarState from '@/hooks/useSideBarState';
import { LinkItem, NestNavListItem } from '@/models/NavItem.models';
import { setSidebarCollapsableStateAction } from '@/api/sidebar/sidebar-actions';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import {
  SidebarMenuSub,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from '@/components/ui/sidebar';

import { Skeleton } from '../ui/skeleton';
import { Separator } from '../ui/separator';

interface NavExpandableItemProps {
  item: NestNavListItem;
  isCollapsed: boolean;
}

export default function NavExpandableItem({ item, isCollapsed }: NavExpandableItemProps) {
  const [isPending, startTransition] = useTransition();
  const { isSidebarCollapsed } = useSideBarState();
  const [isCollapsedMenuOpen, setIsCollapsedMenuOpen] = useState(false);
  const [optimisticState, addOptimistic] = useOptimistic(
    isCollapsed,
    (currentState: boolean, optimisticValue: boolean) => {
      return optimisticValue;
    },
  );

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
    setIsCollapsedMenuOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsCollapsedMenuOpen(false);
    }, 100); // Small delay to prevent flickering
  };

  const handleOnOpenChange = async (open: boolean) => {
    startTransition(async () => {
      addOptimistic(open);
      if (item.collapsableStateCookieKey) {
        try {
          await setSidebarCollapsableStateAction(item.collapsableStateCookieKey, open);
        } catch (error) {
          addOptimistic(isCollapsed);
        }
      }
    });
  };

  // If collapsed and has items, use Popover for hover menu
  if (isSidebarCollapsed) {
    return (
      <SidebarMenuItem>
        <Popover open={ isCollapsedMenuOpen } onOpenChange={ setIsCollapsedMenuOpen }>
          <PopoverTrigger asChild>
            <SidebarMenuButton
              onMouseEnter={ handleMouseEnter }
              onMouseLeave={ handleMouseLeave }
              className="cursor-pointer"
            >
              { item.icon ?
                <item.icon />
              : null }
            </SidebarMenuButton>
          </PopoverTrigger>
          <PopoverContent
            side="right"
            align="start"
            className="w-48 p-2"
            onMouseEnter={ handleMouseEnter }
            onMouseLeave={ handleMouseLeave }
          >
            <CollapsedMenuContent item={ item } />
          </PopoverContent>
        </Popover>
      </SidebarMenuItem>
    );
  }

  // Default collapsible behavior when not collapsed
  return (
    <Collapsible asChild open={ optimisticState } className={ `group/collapsible` } onOpenChange={ handleOnOpenChange }>
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton tooltip={ item.title } className="cursor-pointer">
            { item.icon ?
              <item.icon />
            : null }
            <span>{ item.title }</span>
            { isPending ?
              <Skeleton className="ml-auto h-4 w-4" />
            : <ChevronRight
                className={ `ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90` }
              />
            }
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            <MenuSubParent item={ item } />
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  );
}

function MenuSubParent({ item }: { item: NestNavListItem }) {
  if (!item.items || item.items.length === 0) {
    return <div className="px-2 text-start text-sm text-muted-foreground italic">Empty</div>;
  }

  return (
    <>
      { item.items?.map((subItem) => (
        <SidebarMenuSubItem key={ subItem.name }>
          <SidebarMenuSubButton asChild>
            <Link href={ subItem.url } prefetch>
              <span>{ subItem.name }</span>
            </Link>
          </SidebarMenuSubButton>
        </SidebarMenuSubItem>
      )) }
    </>
  );
}

function CollapsedMenuContent({ item }: { item: NestNavListItem }) {
  if (!item.items || item.items.length === 0) {
    return (
      <>
        <div className="mb-2 text-sm font-medium">{ item.title }</div>
        <Separator className="my-1" />
        <div className="px-2 text-start text-sm text-muted-foreground italic">Empty</div>
      </>
    );
  }

  return (
    <>
      <div className="mb-2 text-sm font-medium">{ item.title }</div>
      <Separator className="my-1" />
      <CollapsedMenuContentMenuItems items={ item.items } />
    </>
  );
}

function CollapsedMenuContentMenuItems({ items }: { items?: LinkItem[] }) {
  return (
    <div className="space-y-1">
      { items?.map((subItem) => (
        <Link
          key={ subItem.name }
          href={ subItem.url }
          className={ `flex items-center rounded-md px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground` }
        >
          { subItem.name }
        </Link>
      )) }
    </div>
  );
}
