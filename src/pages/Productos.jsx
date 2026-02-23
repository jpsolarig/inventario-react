
import { productsMock } from "../data/products.mock";

export default function Productos() {
  return (
    <section>
      <h2>Listado de Productos</h2>

      <div>
        {productsMock.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>Categoría: {product.category}</p>
            <p>Fabricante: {product.manufacturer}</p>
            <p>Stock: {product.stock}</p>
            <p>Precio: S/ {product.price}</p>
            <hr />
          </div>
        ))}
      </div>
    </section>
  );
}