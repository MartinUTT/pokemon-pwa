import { useState } from "react";
import SearchBar from "./components/SearchBar";
import PokemonCard from "./components/PokemonCard";
import { getPokemon } from "./services/pokemonService";

function App() {
  const [pokemon, setPokemon] = useState<any>(null);
  const [error, setError] = useState("");

  const handleSearch = async (name: string) => {
    try {
      const data = await getPokemon(name);
      setPokemon(data);
      setError("");

      // Guardar en LocalStorage para modo offline
      localStorage.setItem("lastPokemon", JSON.stringify(data));
    } catch {
      setError("No se encontró el Pokémon");
    }
  };

  // Cargar último Pokémon si está offline
  window.addEventListener("load", () => {
    const saved = localStorage.getItem("lastPokemon");
    if (saved) {
      setPokemon(JSON.parse(saved));
    }
  });

return (
  <div className="app">
    <h1>Pokédex PWA</h1>

    <SearchBar onSearch={handleSearch} />

    {error && <p>{error}</p>}

    {!pokemon && !error && (
      <div className="empty-state">
        <p>Busca un Pokémon por nombre</p>
        <p>Ejemplo: pikachu, charizard, mewtwo...</p>
      </div>
    )}

    {pokemon && <PokemonCard pokemon={pokemon} />}
  </div>
);

}

export default App;
