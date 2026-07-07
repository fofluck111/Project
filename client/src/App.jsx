import { useState, useEffect } from "react";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Menu from "./components/Menu/Menu";
import Table from "./components/Table/Table";
import Cart from "./components/Cart/Cart";
import ProductModal from "./components/ProductModal/ProductModal";

function App() {
  const [cart, setCart] = useState([]);
  const [table, setTable] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // ✅ toggle cart (กัน bug)
  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };
  const openModal = (item) => {
  setSelectedProduct(item);
};


const closeModal = () => {
  setSelectedProduct(null);
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

    const exist = prev.find(
      (i) => i.cartId === item.cartId
    );


    if (exist) {

      return prev.map((i) =>

        i.cartId === item.cartId

        ? {
            ...i,
            qty: i.qty + item.qty
          }

        : i

      );

    }


    return [
      ...prev,
      item
    ];

  });

};

  // ➖ ลบทีละ 1
const removeOne = (id) => {
  setCart((prev) =>
    prev
      .map((item) =>
        item.cartId === id
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

      <Menu 
  openModal={openModal}
/>

      <Cart
        cart={cart}
        setCart={setCart}
        isOpen={isCartOpen}
        toggleCart={toggleCart}
        
      />
      <ProductModal
  product={selectedProduct}
  closeModal={closeModal}
  addToCart={addToCart}
/>
    </>
  );
}

export default App;