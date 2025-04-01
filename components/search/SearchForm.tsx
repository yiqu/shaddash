'use client';

import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Grid2 from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';

import { useQuery, keepPreviousData } from '@tanstack/react-query';

import { getRandomPokemon } from '@/server/query/pokemon';

import LayoutWithGutter from '../layout/LayoutWithGutter';

export default function SearchForm({ pokemonId }: { pokemonId: string }) {
  const { data, isFetching, isLoading } = useQuery({
    queryKey: ['pokemon-random', pokemonId],
    queryFn: getRandomPokemon,
    // Prevent refetching on mount or window focus
    //refetchOnMount: false,
    //refetchOnWindowFocus: false,
  });

  console.log(data);

  return (
    <LayoutWithGutter size="wider" gridProps={ { className: 'HELLO' } }>
      <Stack direction="row">
        <Typography>Data:</Typography>
        <Typography>{ data?.data.name }</Typography>
      </Stack>
    </LayoutWithGutter>
  );
}
