import { useState } from "react";

interface Props {
  onSearch: (name: string) => void;
}

export default function SearchBar({ onSearch }: Props) {
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    onSearch(name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar Pokémon..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Buscar</button>
    </form>
  );
}
