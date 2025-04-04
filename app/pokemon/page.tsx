import { CircleCheck } from 'lucide-react';

import SearchForm from '@/components/search/SearchForm';

export default async function PokemonPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string }>;
}) {
  const pokemonIdParams = await searchParams;
  const { pokemonId } = pokemonIdParams;

  return (
    <div>
      <SearchForm pokemonId={ pokemonId } />
    </div>
  );
}
