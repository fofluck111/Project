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

  // เปิด / ปิด Cart
  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  // โหลดข้อมูลจาก localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    const savedTable = localStorage.getItem("table");

    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }

    if (savedTable) {
      setTable(JSON.parse(savedTable));
    }
  }, []);

  // บันทึก Cart
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // บันทึกโต๊ะ
  useEffect(() => {
    localStorage.setItem("table", JSON.stringify(table));
  }, [table]);

  // เพิ่มสินค้า
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