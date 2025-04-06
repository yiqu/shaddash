import { use } from 'react';

export default function PokemonPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);

  console.log(slug);

  return <div>PokemonPage { slug }</div>;
}
