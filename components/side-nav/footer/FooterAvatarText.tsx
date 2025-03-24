import { Suspense } from 'react';

import { getUser } from '@/server/user/users';
import { User } from '@/models/auth/user.model';
import { Skeleton } from '@/components/ui/skeleton';

async function FooterAvatarText() {
  const user: User = await getUser();

  return (
    <div className="grid flex-1 text-left leading-tight">
      <span className="truncate font-medium">
        { user.firstName } { user.lastName }
      </span>
      <span className="truncate text-xs">{ user.email }</span>
    </div>
  );
}

export default function FooterAvatarTextSuspended() {
  return (
    <Suspense
      fallback={
        <section className="flex flex-col gap-1 w-full">
          <Skeleton className="h-[17.5px] w-[100px]" />
          <Skeleton className="h-[12px] w-full" />
        </section>
      }
    >
      <FooterAvatarText />
    </Suspense>
  );
}
