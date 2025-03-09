import { Separator } from '@/components/ui/separator';
import { SidebarTrigger } from '@/components/ui/sidebar';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

import ThemeToggleButton from './ThemeToggleButton';

export default function TopNav() {
  return (
    <>
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className={ `
          mr-2
          data-[orientation=vertical]:h-4
        ` } />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className={ `
              hidden
              md:block
            ` }>
              <BreadcrumbLink href="#">Building Your Application</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className={ `
              hidden
              md:block
            ` } />
            <BreadcrumbItem>
              <BreadcrumbPage>Data Fetching</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="px-4">
        <ThemeToggleButton />
      </div>
    </>
  );
}
