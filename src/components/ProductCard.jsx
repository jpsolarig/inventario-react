export default function ProductCard({ product }) {
  return (
    <article className="product-card">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="product-card__image"
      />

      <div className="product-card__content">
        <h3 className="product-card__title">{product.name}</h3>

        <p className="product-card__category">Categoría: {product.category}</p>

        <p className="product-card__manufacturer">
          Fabricante: {product.manufacturer}
        </p>

        <p className="product-card__stock">Stock: {product.stock}</p>

        <p className="product-card__price">Precio: S/ {product.price}</p>
      </div>
    </article>
  );
}
