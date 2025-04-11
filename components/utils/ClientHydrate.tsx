'use client';

import { useState, useEffect, ReactNode } from 'react';

import { Skeleton } from '../ui/skeleton';

interface HydrateProps {
  children: ReactNode;
  fallback?: ReactNode;
}

function ClientHydrate({ children, fallback }: HydrateProps) {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    isHydrated ? <>{ children }</>
    : fallback ? fallback
    : <div className="flex flex-col gap-y-2">
      <Skeleton className="h-4 w-full rounded-full" />
      <Skeleton className="h-4 w-full rounded-full" />
      <Skeleton className="h-4 w-full rounded-full" />
    </div>
  );
}

export default ClientHydrate;
