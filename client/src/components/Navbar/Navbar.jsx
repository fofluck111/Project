import "./Navbar.css";

function Navbar({ toggleCart, cartCount }) {
  return (
    <nav className="navbar">
      <div className="logo">☕ Smart Café</div>

      <ul className="menu">
        <li>หน้าแรก</li>
        <li>เมนู</li>
        <li>ติดต่อ</li>
      </ul>

      <button className="cart-btn" onClick={toggleCart}>
        🛒 {cartCount}
      </button>

      <button className="login-btn">
        เข้าสู่ระบบ
      </button>
    </nav>
  );
}

export default Navbar;