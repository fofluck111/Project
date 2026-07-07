import "./Navbar.css";
import { useState } from "react";

import {
  FaShoppingCart,
  FaUserCircle,
  FaHome,
} from "react-icons/fa";

import { MdRestaurantMenu } from "react-icons/md";
import { BsCalendar2CheckFill } from "react-icons/bs";
import { HiGift } from "react-icons/hi2";
import { IoCall } from "react-icons/io5";
import { FaBars, FaXmark } from "react-icons/fa6";


function Navbar({ toggleCart, cartCount }) {


  const [open, setOpen] = useState(false);


  return (

    <nav className="navbar">


      <div className="logo">
        ☕ Smart Café
      </div>



      {/* Desktop Menu */}

      <ul className={`menu ${open ? "active" : ""}`}>

        <li>
          <FaHome />
          <span>หน้าแรก</span>
        </li>


        <li>
          <MdRestaurantMenu />
          <span>เมนู</span>
        </li>


        <li>
          <HiGift />
          <span>โปรโมชั่น</span>
        </li>


        <li>
          <BsCalendar2CheckFill />
          <span>จองโต๊ะ</span>
        </li>


        <li>
          <IoCall />
          <span>ติดต่อ</span>
        </li>


      </ul>




      <div className="nav-right">


        <button
          className="cart-btn"
          onClick={toggleCart}
        >

          <FaShoppingCart />

          {
            cartCount > 0 &&
            (
              <span className="cart-badge">
                {cartCount}
              </span>
            )
          }

        </button>



        <button className="login-btn">

          <FaUserCircle />

          <span>
            เข้าสู่ระบบ
          </span>

        </button>


        <button
          className="hamburger"
          onClick={()=>setOpen(!open)}
        >

          {
            open
            ?
            <FaXmark />
            :
            <FaBars />
          }


        </button>


      </div>


    </nav>

  );

}


export default Navbar;