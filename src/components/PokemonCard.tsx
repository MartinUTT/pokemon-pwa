interface Props {
  pokemon: any;
}

export default function PokemonCard({ pokemon }: Props) {
  return (
    <div className="card">
      <h2>
        #{pokemon.id} - {pokemon.name.toUpperCase()}
      </h2>

      {/* IMÁGENES */}
      <div className="images">
        <div>
          <p>Normal</p>
          <img src={pokemon.sprites.front_default} />
        </div>

        <div>
          <p>Shiny</p>
          <img src={pokemon.sprites.front_shiny} />
        </div>

        {pokemon.sprites.front_female && (
          <div>
            <p>Femenino</p>
            <img src={pokemon.sprites.front_female} />
          </div>
        )}

        {pokemon.sprites.front_shiny_female && (
          <div>
            <p>Shiny Femenino</p>
            <img src={pokemon.sprites.front_shiny_female} />
          </div>
        )}
      </div>

      {/* TIPOS */}
      <p>
        <strong>Tipos:</strong>{" "}
        {pokemon.types.map((t: any) => t.type.name).join(", ")}
      </p>

      {/* HABILIDADES */}
      <p>
        <strong>Habilidades:</strong>{" "}
        {pokemon.abilities
          .map((a: any) => a.ability.name)
          .join(", ")}
      </p>

      {/* ESTADÍSTICAS */}
      <div className="stats">
        <h3>Estadísticas</h3>
        {pokemon.stats.map((stat: any) => (
          <div key={stat.stat.name} className="stat">
            <span>{stat.stat.name}</span> : <span>{stat.base_stat}</span>
            <div className="stat-bar">
              <div
                className="stat-bar-fill"
                style={{ width: `${stat.base_stat}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* FORMAS REGIONALES */}
      {pokemon.speciesData.varieties.length > 1 && (
        <div>
          <h3>Formas / Variantes</h3>
          <ul>
            {pokemon.speciesData.varieties.map((v: any) => (
              <li key={v.pokemon.name}>{v.pokemon.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
