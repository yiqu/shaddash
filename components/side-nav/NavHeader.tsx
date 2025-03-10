import Link from 'next/link';
import Image from 'next/image';

import { cn } from '@/lib/utils';
import { appName } from '@/constants/constants';
import { pacificoFont } from '@/lib/fonts-config';
import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';

export default function NavHeader() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton size="lg" asChild>
          <Link href={ `/` } className="flex w-full flex-row items-center gap-2">
            <Image src={ `/images/todo.png` } width={ 40 } height={ 40 } alt="logo" />
            <div className="flex flex-col gap-0.5 leading-none">
              <span className={ cn('text-3xl font-normal text-blue-800', pacificoFont.className) }>{ appName }</span>
            </div>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
