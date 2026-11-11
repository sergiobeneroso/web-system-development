import { useContext, useState } from 'react';
import { CartContext } from '../CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);

  const [customerName, setCustomerName] = useState('');
  const [orderName, setOrderName] = useState(''); // nombre del pedido ya realizado

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleNameChange = (event) => {
    setCustomerName(event.target.value);
  };

  const handleCheckout = (event) => {
    event.preventDefault();

    // Un nombre vacío no realiza el pedido
    if (customerName.trim() === '') {
      return;
    }

    setOrderName(customerName);
    clearCart();
    setCustomerName('');
  };

  return (
    <div>
      <h2>Cart</h2>

      {cartItems.length === 0 ? (
        <p data-testid="cart-empty">Your cart is empty</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} data-testid={`cart-item-${item.id}`}>
                <span>{item.name}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  data-testid={`decrease-${item.id}`}
                >
                  -
                </button>
                <span data-testid={`quantity-${item.id}`}>{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  data-testid={`increase-${item.id}`}
                >
                  +
                </button>
                <button onClick={() => removeFromCart(item.id)} data-testid={`remove-${item.id}`}>
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <p>
            Total: <span data-testid="cart-total">${total.toFixed(2)}</span>
          </p>

          <form onSubmit={handleCheckout}>
            <input
              value={customerName}
              onChange={handleNameChange}
              placeholder="Your name"
              data-testid="customer-name"
            />
            <button type="submit" data-testid="checkout">
              Checkout
            </button>
          </form>
        </div>
      )}

      {orderName !== '' && (
        <p data-testid="order-confirmation">Thank you for your order, {orderName}!</p>
      )}
    </div>
  );
};

export default Cart;
