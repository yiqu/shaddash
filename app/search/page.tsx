import SearchForm from '@/components/search/SearchForm';

export default function SearchPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  return (
    <div className="w-full">
      <SearchForm />
    </div>
  );
}
