import Stack from '@mui/material/Stack';

import { Suspense } from 'react';

import TeaList from '@/components/teas/TeaList';
import TextCursor from '@/components/reactbits/TextAnimations/TextCursor/TextCursor';

export default function SearchPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  return (
    <Stack direction="column" spacing={ 2 }>
      { /* <TextCursor
        text="🤖"
        delay={ 0.01 }
        spacing={ 80 }
        followMouseDirection={ true }
        randomFloat={ true }
        exitDuration={ 0.3 }
        removalInterval={ 20 }
        maxPoints={ 10 }
      > */ }
      <Suspense fallback={ <div>loading</div> }>
        <TeaList />
      </Suspense>
      { /* </TextCursor> */ }
    </Stack>
  );
}
