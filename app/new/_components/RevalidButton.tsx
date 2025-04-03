'use client';

import { Button } from '@/components/ui/button';
import { revalidateTeaList } from '@/server/teas/teas';
import { revalidateBobaTime } from '@/server/new/new-actions';

export default function RevalidButton() {
  const handleOnClick = async () => {
    revalidateBobaTime();
    revalidateTeaList();
  };

  return (
    <Button onClick={ handleOnClick } variant="outline">
      Revalidate Tea List
    </Button>
  );
}
