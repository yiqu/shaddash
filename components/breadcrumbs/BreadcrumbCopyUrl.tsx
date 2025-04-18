export default function BreadcrumbCopyUrl() {
  const pathName = usePathname();
  const params = useParams();
  const searchParams = useSearchParams();

  const isClient = useIsClient();

  if (!isClient) {
    return <Skeleton className="h-4 w-4 rounded-full" />
  }

  const url = `${window.location.protocol}//${window.location.host}${pathName}?${searchParams.toString()}`;

  return (
    <CopyToClipBoard text={url} title="Copy shareable link" className="size-6" />
  )
}