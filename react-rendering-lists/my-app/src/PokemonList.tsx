type ComponentProps = {
  pokedex: { number: string; name: string }[];
};

export function PokemonList({ pokedex }: ComponentProps) {
  const listItems = pokedex.map((pokemon) => (
    <li key={pokemon.number}>{pokemon.name}</li>
  ));

  return <ul>{listItems}</ul>;
}
