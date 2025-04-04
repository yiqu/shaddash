export default async function SearchPage({ params }: { params: Promise<{ searchId: string }> }) {
  const { searchId } = await params;
  return (
    <div>
      <h1>Search</h1>
      <p>{ searchId }</p>
    </div>
  );
}
