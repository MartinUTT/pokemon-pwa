export const getPokemon = async (name: string) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);

  if (!response.ok) {
    throw new Error("Pokémon no encontrado");
  }

  return response.json();
};
