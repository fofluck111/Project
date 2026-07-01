function Checkout({ cart, setCart, table, removeOne, clearCart }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const confirmOrder = () => {
    const order = {
      cart,
      table,
      total,
      time: new Date()
    };

    localStorage.setItem("order", JSON.stringify(order));

    setCart([]);
    alert("สั่งอาหารสำเร็จ ✅");
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>🧾 Checkout</h1>

      <h3>🍽️ โต๊ะ: {table || "ยังไม่เลือก"}</h3>

      {cart.length === 0 ? (
        <p>ไม่มีสินค้าในตะกร้า</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} style={{ marginBottom: 10 }}>
            <p>
              {item.name} x {item.qty}
            </p>

            <button onClick={() => removeOne(item.id)}>
              ➖ ลบ 1
            </button>
          </div>
        ))
      )}

      {cart.length > 0 && (
        <button
          onClick={clearCart}
          style={{ marginTop: 10 }}
        >
          🗑️ ลบทั้งหมด
        </button>
      )}

      <h2>💰 รวม: {total} บาท</h2>

      <button onClick={confirmOrder}>
        ยืนยันสั่งอาหาร
      </button>
    </div>
  );
}

export default Checkout;