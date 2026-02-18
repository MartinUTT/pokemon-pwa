export const getPokemon = async (name: string) => {
  const pokemonRes = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
  );

  if (!pokemonRes.ok) {
    throw new Error("Pokémon no encontrado");
  }

  const pokemonData = await pokemonRes.json();
  const speciesRes = await fetch(pokemonData.species.url);
  const speciesData = await speciesRes.json();

  return {
    ...pokemonData,
    speciesData,
  };
};
