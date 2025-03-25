import Stack from '@mui/material/Stack';
import Grid2 from '@mui/material/Grid2';
import Button from '@mui/material/Button';

import { Suspense } from 'react';

import TeaList from '@/components/teas/TeaList';
import { Skeleton } from '@/components/ui/skeleton';
import SearchForm from '@/components/search/SearchForm';
import LayoutWithGutter from '@/components/layout/LayoutWithGutter';

export default function SearchPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  return (
    <Stack direction="column" spacing={ 2 }>
      <Suspense fallback={ <div>loading</div> }>
        <TeaList />
      </Suspense>
    </Stack>
  );
}
