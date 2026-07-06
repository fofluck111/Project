import { useState, useEffect } from "react";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Menu from "./components/Menu/Menu";
import Table from "./components/Table/Table";
import Cart from "./components/Cart/Cart";

function App() {
  const [cart, setCart] = useState([]);
  const [table, setTable] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // ✅ toggle cart (กัน bug)
  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  // 💾 โหลดข้อมูล
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    const savedTable = localStorage.getItem("table");

    if (savedCart) setCart(JSON.parse(savedCart));
    if (savedTable) setTable(JSON.parse(savedTable));
  }, []);

  // 💾 เซฟ cart
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // 💾 เซฟ table
  useEffect(() => {
    localStorage.setItem("table", JSON.stringify(table));
  }, [table]);

  // ➕ เพิ่มสินค้า
  const addToCart = (item) => {
    setCart((prev) => {
      const exist = prev.find((i) => i.id === item.id);

      if (exist) {
        return prev.map((i) =>
          i.id === item.id
            ? { ...i, qty: i.qty + 1 }
            : i
        );
      }

      return [...prev, { ...item, qty: 1 }];
    });
  };

  // ➖ ลบทีละ 1
  const removeOne = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  // 🗑️ ลบทั้งหมด
  const clearCart = () => {
    setCart([]);
  };

  return (
    <>
      <Navbar
        toggleCart={toggleCart}
        cartCount={cart.reduce((sum, item) => sum + item.qty, 0)}
      />

      <Table table={table} setTable={setTable} />

      <Hero />

      <Menu addToCart={addToCart} />

      <Cart
        cart={cart}
        setCart={setCart}
        isOpen={isCartOpen}
        toggleCart={toggleCart}
      />
    </>
  );
}

export default App;