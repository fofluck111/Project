import "./Menu.css";

function Menu({ addToCart }) {
  const items = [
    { id: 1, name: "Americano", price: 60 },
    { id: 2, name: "Latte", price: 75 },
    { id: 3, name: "Cappuccino", price: 80 },
    { id: 4, name: "Mocha", price: 85 },
    { id: 5, name: "Green Tea", price: 55 },
  ];

  return (
    <section className="menu-section">

      <h2>☕ เมนูของเรา</h2>

      <div className="menu-grid">

        {items.map((item) => (
          <div className="menu-card" key={item.id}>

            <h3>{item.name}</h3>

            <p>{item.price} บาท</p>

            <button
              onClick={() => addToCart(item)}
            >
              เพิ่มลงตะกร้า
            </button>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Menu;