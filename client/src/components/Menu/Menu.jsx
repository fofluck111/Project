import "./Menu.css";

function Menu({ addToCart }) {
  const items = [
    { id: 1, name: "Coffee", price: 60 },
    { id: 2, name: "Latte", price: 70 },
  { id: 3, name: "Cake", price: 80 },
    
    
  ];

  return (
    <div className="menu">

      <h2>☕ เมนู</h2>

      <div className="menu-grid">

        {items.map((item) => (
          <div className="menu-card" key={item.id}>

            <h3>{item.name}</h3>
            <p>{item.price} บาท</p>

            <button onClick={() => addToCart(item)}>
              ➕ เพิ่มลงตะกร้า
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Menu;