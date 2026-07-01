import "./Menu.css";

import coffee from "../../assets/coffee.jpg";
import latte from "../../assets/latte.jpg";
import cake from "../../assets/cake.jpg";

function Menu({ addToCart }) {
  const foods = [
    { id: 1, name: "Americano", price: 60, img: coffee },
    { id: 2, name: "Latte", price: 75, img: latte },
    { id: 3, name: "Cheesecake", price: 95, img: cake }
  ];

  const handleAdd = (item) => {
    addToCart(item);

    const el = document.getElementById("food-" + item.id);
    if (el) {
      el.classList.add("active");
      setTimeout(() => el.classList.remove("active"), 200);
    }
  };

  return (
    <section className="menu">
      <h2>🍽️ เมนูแนะนำ</h2>

      <div className="menu-grid">
        {foods.map((item) => (
          <div
            key={item.id}
            id={"food-" + item.id}
            className="menu-card"
          >
            <img src={item.img} alt={item.name} />

            <div className="menu-info">
              <h3>{item.name}</h3>
              <p>{item.price} บาท</p>

              <button onClick={() => handleAdd(item)}>
                ➕ เพิ่มลงตะกร้า
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;