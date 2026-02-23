import { useEffect, useState } from "react"; // importamos hooks
import { productsMock } from "../data/products.mock"; // ahora usaremos mock desde data
import SearchBar from "../components/SearchBar";
import ProductList from "../components/ProductList";
import useDebounce from "../hooks/useDebounce";

export default function Productos() {
  // estado para el texto del buscador
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500); // 500ms de retraso

  // estado para lista filtrada (lo que se mostrará en pantalla)
  const [filteredProducts, setFilteredProducts] = useState(productsMock);

  // cada vez que cambia searchTerm, recalculamos la lista filtrada
  useEffect(() => {
    // Normalizamos el término de búsqueda

    const term = debouncedSearchTerm.trim().toLowerCase();

    // Si no hay búsqueda, mostramos todo
    if (!term) {
      setFilteredProducts(productsMock);
      return;
    }

    // Filtramos por nombre, categoría o fabricante
    const filtered = productsMock.filter((product) => {
      const name = product.name.toLowerCase();
      const category = product.category.toLowerCase();
      const manufacturer = product.manufacturer.toLowerCase();

      return (
        name.includes(term) ||
        category.includes(term) ||
        manufacturer.includes(term)
      );
    });

    setFilteredProducts(filtered);
  }, [debouncedSearchTerm]);

  return (
    <section>
      <h2>Listado de Productos</h2>

      {/* Buscador de productos */}
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div>
        <ProductList products={filteredProducts} />
      </div>
    </section>
  );
}
