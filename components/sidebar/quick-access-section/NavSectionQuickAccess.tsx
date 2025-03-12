import { useSidebar, SidebarGroupLabel } from '@/components/ui/sidebar';

import { NavItemHistory } from '../history-section/NavItemHistory';
import { NavItemFavorites } from '../favorites-section/NavItemFavorites';

export default function NavSectionQuickAccess() {
  const { state } = useSidebar();
  const isCollapsed = state === 'collapsed';

  return (
    <>
      { !isCollapsed ?
        <SidebarGroupLabel>Quick Access</SidebarGroupLabel>
      : null }
      <NavItemHistory />
      <div className="my-1"></div>
      <NavItemFavorites />
      <div className="my-1"></div>
    </>
  );
}
