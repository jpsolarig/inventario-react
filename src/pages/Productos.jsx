import { useEffect, useState } from "react"; // importamos hooks
import { productsMock } from "../data/products.mock"; // ahora usaremos mock desde data

export default function Productos() {
  // estado para el texto del buscador
  const [searchTerm, setSearchTerm] = useState("");

  // estado para lista filtrada (lo que se mostrará en pantalla)
  const [filteredProducts, setFilteredProducts] = useState(productsMock);

  // cada vez que cambia searchTerm, recalculamos la lista filtrada
  useEffect(() => {
    // Normalizamos el término de búsqueda

    const term = searchTerm.trim().toLowerCase();

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
  }, [searchTerm]); // dependencia => se ejecuta cuando cambia searchTerm

  return (
    <section>
      <h2>Listado de Productos</h2>

      {/* Buscador de productos */}
      <input
        type="text"
        placeholder="Buscar por nombre, categoría o fabricante..."
        value={searchTerm} // usa el estado creado
        onChange={(e) => setSearchTerm(e.target.value)} // actualiza searchTerm
      />

      <div>
        {/* ahora renderizamos filteredProducts en lugar de productsMock */}
        {filteredProducts.map((product) => (
          <article key={product.id}>
            <h3>{product.name}</h3>
            <p>Categoría: {product.category}</p>
            <p>Fabricante: {product.manufacturer}</p>
            <p>Stock: {product.stock}</p>
            <p>Precio: S/ {product.price}</p>
            <hr />
          </article>
        ))}

        {/* mensaje cuando no hay resultados */}
        {filteredProducts.length === 0 && (
          <p>No se encontraron productos con esa búsqueda.</p>
        )}
      </div>
    </section>
  );
}
