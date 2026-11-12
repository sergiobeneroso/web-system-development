import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CartContext } from '../CartContext';
import products from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const product = products.find((p) => p.id === id);

  
  if (!product) {
    return (
      <div data-testid="product-not-found">
        <p>Product not found</p>
        <Link to="/">Back to the shop</Link>
      </div>
    );
  }

  return (
    <div className="card">
      <h2 data-testid="product-name">{product.name}</h2>
      <p data-testid="product-price">${product.price.toFixed(2)}</p>
      <p data-testid="product-description">{product.description}</p>
      <button onClick={() => addToCart(product)} data-testid="add-to-cart">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetail;
