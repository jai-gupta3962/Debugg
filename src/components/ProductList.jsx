import ProductCard from './ProductCard';

function ProductList({ products }) {
  if (products.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-state-icon">😕</div>
        <h2>No products found</h2>
        <p>Try adjusting your search or category filter.</p>
      </div>
    );
  }

  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
