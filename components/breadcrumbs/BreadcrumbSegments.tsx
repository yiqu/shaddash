'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { BreadcrumbItem, BreadcrumbPage, BreadcrumbLink, BreadcrumbSeparator } from '../ui/breadcrumb';

export default function BreadcrumbSegments() {
  const pathname = usePathname();
  const paths = pathname.split('/').filter(Boolean);

  return (
    <>
      { paths.map((path, index) => {
        const href = `/${paths.slice(0, index + 1).join('/')}`;
        const isLast = index === paths.length - 1;

        return (
          <BreadcrumbItem key={ path }>
            { isLast ?
              <BreadcrumbPage>{ path }</BreadcrumbPage>
            : <>
              <BreadcrumbLink asChild>
                <Link href={ href }>{ path }</Link>
              </BreadcrumbLink>
              <BreadcrumbSeparator />
            </>
            }
          </BreadcrumbItem>
        );
      }) }
    </>
  );
}
