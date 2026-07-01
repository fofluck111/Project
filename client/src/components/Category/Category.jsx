import "./Category.css";

function Category() {
  const categories = [
    { id: 1, name: "☕ กาแฟ" },
    { id: 2, name: "🍰 ของหวาน" },
    { id: 3, name: "🍔 อาหาร" },
    { id: 4, name: "🥤 เครื่องดื่ม" },
  ];

  return (
    <section className="category">
      <h2>หมวดหมู่อาหาร</h2>

      <div className="category-list">
        {categories.map((item) => (
          <div key={item.id} className="category-card">
            {item.name}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Category;