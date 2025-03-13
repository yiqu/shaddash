import { type LucideIcon } from 'lucide-react';

export interface LeftNavItem {
  name: string;
  tooltip?: string;
  url: string;
  icon: LucideIcon;
}

export interface NestNavListItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  isActive?: boolean;
  items?: LinkItem[];
}


export interface LinkItem {
  name: string;
  url: string;
}