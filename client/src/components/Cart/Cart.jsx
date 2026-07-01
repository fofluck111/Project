import "./Cart.css";

function Cart({ cart, setCart, isOpen }) {

  // 💰 รวมราคา
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  // ❌ ลบ 1 ชิ้น
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

  // 🗑️ ล้างทั้งหมด
  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className={`cart ${isOpen ? "open" : ""}`}>

      <h2>🛒 ตะกร้าสินค้า</h2>

      {cart.length > 0 && (
        <button className="clear-btn" onClick={clearCart}>
          🗑️ ลบทั้งหมด
        </button>
      )}

      {cart.length === 0 ? (
        <p>ยังไม่มีสินค้า</p>
      ) : (
        cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <div>
              <p>{item.name}</p>

              <small>
                {item.price} x {item.qty} ={" "}
                {item.price * item.qty} บาท
              </small>
            </div>

            <button onClick={() => removeItem(item.id)}>
              ❌
            </button>
          </div>
        ))
      )}

      <hr />

      <h3>รวม: {total} บาท</h3>
    </div>
  );
}

export default Cart;