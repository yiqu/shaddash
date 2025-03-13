import { BreadcrumbSeparator } from '@/components/ui/breadcrumb';

import HomeSegment from './HomeSegment';
import BreadcrumbsList from './BreadcrumbsList';
import BreadcrumbSegments from './BreadcrumbSegments';

export default function Breadcrumbs() {
  return (
    <BreadcrumbsList>
      <HomeSegment />
      <BreadcrumbSeparator />
      <BreadcrumbSegments />
    </BreadcrumbsList>
  );
}
