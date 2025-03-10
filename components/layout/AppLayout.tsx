import { ReactNode } from 'react';

import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';

import TopNav from '../top-nav/TopNav';
import { NavSidebar } from '../side-nav/NavSidebar';
import TopNavWrapper from '../top-nav/TopNavWrapper';

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <NavSidebar />
      <SidebarInset>
        <TopNavWrapper>
          <TopNav />
        </TopNavWrapper>
        <main className="flex w-full flex-1 flex-col gap-4 p-4" id="main-content">
          { children }
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
