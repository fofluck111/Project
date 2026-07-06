import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <h1>☕ Smart Café</h1>

        <h2>ระบบสั่งอาหารภายในร้าน</h2>

        <p>
          สั่งอาหารง่าย ๆ ผ่านมือถือ
          รองรับทุกอุปกรณ์ ทั้งมือถือ แท็บเล็ต และคอมพิวเตอร์
        </p>

        <button className="hero-btn">
          🍽️ สั่งอาหารเลย
        </button>

      </div>

    </section>
  );
}

export default Hero;