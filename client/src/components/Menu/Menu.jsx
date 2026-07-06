/* พื้นหลังดำ */
.cart-overlay {
  position: fixed;
  inset: 0;

  background: rgba(0, 0, 0, 0.35);

  z-index: 998;

  animation: fadeIn 0.25s ease;
}

/* Popup */
.cart {
  position: fixed;

  right: 20px;
  bottom: 20px;

  width: 340px;
  max-height: 75vh;

  background: #fff;

  border-radius: 20px;

  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);

  padding: 20px;

  overflow-y: auto;

  z-index: 999;

  transform: translateY(30px);
  opacity: 0;
  pointer-events: none;

  transition: all 0.3s ease;
}

/* เปิด Popup */
.cart.open {
  transform: translateY(0);
  opacity: 1;
  pointer-events: auto;
}

/* Header */
.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 15px;
}

/* ปุ่มปิด */
.close-btn {
  width: 34px;
  height: 34px;

  border: none;
  border-radius: 50%;

  background: #ef4444;
  color: white;

  cursor: pointer;

  font-size: 18px;
  font-weight: bold;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: 0.25s;
}

.close-btn:hover {
  background: #dc2626;
  transform: rotate(90deg);
}

/* ไม่มีสินค้า */
.empty-cart {
  text-align: center;
  color: #888;

  margin: 40px 0;
}

/* รายการสินค้า */
.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 12px 0;

  border-bottom: 1px solid #eee;
}

.cart-item p {
  margin: 0;
  font-weight: 600;
}

.cart-item small {
  color: #666;
}

/* ปุ่มลบ */
.remove-btn {
  width: 32px;
  height: 32px;

  border: none;
  border-radius: 50%;

  background: #ef4444;
  color: white;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: 0.25s;
}

.remove-btn:hover {
  background: #dc2626;
  transform: scale(1.08);
}

/* ปุ่มล้างทั้งหมด */
.clear-btn {
  width: 100%;

  margin-bottom: 15px;

  padding: 10px;

  border: none;
  border-radius: 10px;

  background: #ef4444;
  color: white;

  cursor: pointer;

  font-weight: 600;

  transition: 0.25s;
}

.clear-btn:hover {
  background: #dc2626;
}

/* เส้นคั่น */
.cart hr {
  margin: 18px 0;
  border: none;
  border-top: 1px solid #ddd;
}

/* Animation */
@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}