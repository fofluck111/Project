import "./Cart.css";

function Cart({ cart, setCart, isOpen, toggleCart }) {

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const removeItem = (id) => {
    const updated = cart
      .map((item) =>
        item.id === id
          ? { ...item, qty: item.qty - 1 }
          : item
      )
      .filter((item) => item.qty > 0);

    setCart(updated);
  };

  const clearCart = () => setCart([]);

  if (!isOpen) return null;

  return (
    <>
      {/* overlay */}
      <div className="cart-overlay" onClick={toggleCart}></div>

      {/* popup */}
      <div className="cart-popup">

        <div className="cart-header">
          <h3>🛒 ตะกร้า</h3>
          <button onClick={toggleCart}>✖</button>
        </div>

        {cart.length === 0 ? (
          <p>ยังไม่มีสินค้า</p>
        ) : (
          cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <div>
                <p>{item.name}</p>
                <small>
                  {item.price} x {item.qty}
                </small>
              </div>

              <button onClick={() => removeItem(item.id)}>
                ❌
              </button>
            </div>
          ))
        )}

        {cart.length > 0 && (
          <button className="clear-btn" onClick={clearCart}>
            ลบทั้งหมด
          </button>
        )}

        <hr />

        <h4>รวม: {total} บาท</h4>
      </div>
    </>
  );
}

export default Cart;