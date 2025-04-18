export default function MenuButton({item, ...props}: {item: LeftNavItem} & VariantProps<typeof sidebarMenuButtonVariants>) {
  const pathName = usePathName();
  const firstPath = pathName.split('/')[1] || '';
  const isActive = firstPath.toLowerCase() === item.url.toLowerCase();

  return (
    <SidebarMenuButton asChild tooltip={ item.tooltip } isActive={ isActive } { ...props }>
      <Link href={ `/${item.url}` } prefetch>
        <SidebarLucideIcon url={ item.url } />
        <span>
          { item.name }
        </span>
      </Link>
    </SidebarMenuButton>
  );
}