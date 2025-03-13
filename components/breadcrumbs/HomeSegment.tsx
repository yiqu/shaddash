import Link from 'next/link';

import { BreadcrumbItem, BreadcrumbLink } from '../ui/breadcrumb';

export default function HomeSegment() {
  return (
    <BreadcrumbItem>
      <BreadcrumbLink asChild>
        <Link href={ '/' }>{ 'Home' }</Link>
      </BreadcrumbLink>
    </BreadcrumbItem>
  );
}
