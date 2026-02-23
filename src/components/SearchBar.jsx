export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="search">
      {/* Input controlado */}
      <input
        type="text"
        className="search__input"
        placeholder="Buscar por nombre, categoría o fabricante..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}
