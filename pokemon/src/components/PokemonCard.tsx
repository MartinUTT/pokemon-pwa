interface Props {
  pokemon: any;
}

export default function PokemonCard({ pokemon }: Props) {
  return (
    <div>
      <h2>{pokemon.name.toUpperCase()}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Altura: {pokemon.height}</p>
      <p>Peso: {pokemon.weight}</p>
      <p>
        Tipos:
        {pokemon.types.map((t: any) => (
          <span key={t.type.name}> {t.type.name} </span>
        ))}
      </p>
    </div>
  );
}
