import Link from 'next/link';

import { BreadcrumbItem, BreadcrumbLink } from '../ui/breadcrumb';
import { House } from 'lucide-react';

export default function HomeSegment() {
  return (
    <BreadcrumbItem>
      <BreadcrumbLink asChild>
        <Link href={'/'} prefetch>
          <section className="flex flex-row items-center justify-start gap-x-1">
            <House size={14} />
            {`Home`}
          </section>
        </Link>
      </BreadcrumbLink>
    </BreadcrumbItem>
  );
}
