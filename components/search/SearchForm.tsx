'use client';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { useQuery } from '@tanstack/react-query';

import { getRandomPokemon } from '@/server/query/pokemon';

import { Alert } from '../alerts/Alert';
import { Skeleton } from '../ui/skeleton';
import LayoutWithGutter from '../layout/LayoutWithGutter';

export default function SearchForm({ pokemonId }: { pokemonId: string }) {
  const { data, isFetching, isLoading } = useQuery({
    queryKey: ['pokemon-random', pokemonId],
    queryFn: getRandomPokemon,
    // Prevent refetching on mount or window focus
    //refetchOnMount: false,
    //refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return (
      <section className="flex h-full w-full items-center justify-center">
        <Skeleton className="h-[1rem] w-2xl" />
      </section>
    );
  }

  return (
    <LayoutWithGutter size="wider" gridProps={ { className: 'HELLO' } }>
      <div className="flex w-4xl flex-col space-y-2">
        <Alert title={ <div>NOTE!</div> } description={ <div className={ `
          text-foreground
        ` }>NOTE!</div> } variant="note" />
        <Alert title="Heads up!" description="You can add components to your app using the cli." variant="info" />
        <Alert description="You can add components to your app using the cli." variant="danger" />
        <Alert title="Heads up!" description="You can add components to your app using the cli." variant="success" />
        <Alert description="You can add components to your app using the cli." variant="warning" />
        <Alert description="You can add components to your app using the cli." variant="tip" />
      </div>
      <Stack direction="row">
        <Typography>Data:</Typography>
        <Typography>{ data?.data.name }</Typography>
      </Stack>
    </LayoutWithGutter>
  );
}
