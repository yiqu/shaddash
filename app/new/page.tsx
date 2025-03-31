import { connection } from 'next/server';
import { unstable_cacheTag } from 'next/cache';

import { Button } from '@/components/ui/button';
import { revalidateTeaList } from '@/server/teas/teas';

import { FormExample } from './_components/InputForm';
import RevalidButton from './_components/RevalidButton';

export default async function NewBobaPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  //await connection();
  'use cache';
  unstable_cacheTag('bobaTime');
  const currentTime = Date.now();

  return (
    <div>
      New Boba { currentTime }
      <RevalidButton />
      <section>
        <FormExample />
      </section>
    </div>
  );
}
