import "./Cart.css";

function Cart({ cart, setCart, isOpen, toggleCart }) {
  // 💰 รวมราคา
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  // ❌ ลบทีละ 1 ชิ้น
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
    <>
      {/* พื้นหลังดำ */}
      {isOpen && (
        <div
          className="cart-overlay"
          onClick={toggleCart}
        ></div>
      )}

      {/* Popup */}
      <div className={`cart ${isOpen ? "open" : ""}`}>

        <div className="cart-header">

          <h2>🛒 ตะกร้าสินค้า</h2>

          <button
            className="close-btn"
            onClick={toggleCart}
          >
            ✕
          </button>

        </div>

        {cart.length > 0 && (
          <button
            className="clear-btn"
            onClick={clearCart}
          >
            🗑️ ลบทั้งหมด
          </button>
        )}

        {cart.length === 0 ? (
          <p className="empty-cart">
            ยังไม่มีสินค้า
          </p>
        ) : (
          cart.map((item) => (
            <div
              className="cart-item"
              key={item.id}
            >

              <div>
                <p>{item.name}</p>

                <small>
                  {item.price} × {item.qty} ={" "}
                  {item.price * item.qty} บาท
                </small>
              </div>

              <button
                className="remove-btn"
                onClick={() =>
                  removeItem(item.id)
                }
              >
                ✕
              </button>

            </div>
          ))
        )}

        <hr />

        <h3>รวมทั้งหมด {total} บาท</h3>

      </div>
    </>
  );
}

export default Cart;