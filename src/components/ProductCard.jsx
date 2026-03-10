function ProductCard({ product }) {
  const { name, category, price } = product;

  // Format price to Indian Rupees
  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(price);

  return (
    <div className="product-card">
      <div className="product-info">
        <span className="product-category">{category}</span>
        <h3 className="product-name">{name}</h3>
        <p className="product-price">{formattedPrice}</p>
      </div>
      <div className="product-card-bg"></div>
    </div>
  );
}

export default ProductCard;
