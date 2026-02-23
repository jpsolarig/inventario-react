import ProductCard from "./ProductCard";

export default function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.length === 0 && (
        <p className="product-list__empty">No se encontraron productos.</p>
      )}

      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
