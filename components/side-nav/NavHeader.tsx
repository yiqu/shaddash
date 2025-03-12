import Link from 'next/link';
import Image from 'next/image';

import { cn } from '@/lib/utils';
import { appName } from '@/constants/constants';
import { luckiestGuyFont } from '@/lib/fonts-config';
import { useSidebar, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';

export default function NavHeader() {
  const { state } = useSidebar();
  const isCollapsed = state === 'collapsed';

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton size="lg" asChild>
          <Link href={ `/` } className="flex w-full flex-row items-center gap-2">
            <Image src={ `/images/boba.png` } width={ 40 } height={ 40 } alt="logo" className={ `
              shrink-0
            ` } />
            <div className="relative h-8 w-full overflow-hidden">
              <span
                className={ cn(
                  `
                    absolute top-1/2 left-0 -translate-y-1/2 text-2xl
                    font-normal whitespace-nowrap text-amber-700 transition-all
                    duration-300 ease-out will-change-transform
                  `,
                  luckiestGuyFont.className,
                  isCollapsed ? 'invisible translate-x-8 opacity-0' : `
                    visible translate-x-0 opacity-100
                  `,
                ) }
              >
                { appName }
              </span>
            </div>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
