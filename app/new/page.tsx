'use client';
import { Button } from '@/components/ui/button';
import { revalidateTeaList } from '@/server/teas/teas';

export default function NewBobaPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const handleOnClick = async () => {
    await revalidateTeaList();
  };

  return (
    <div>
      { ' ' }
      New Boba
      <Button onClick={ handleOnClick }>Revalidate Tea List</Button>
    </div>
  );
}
