import "./ProductModal.css";
import { useState } from "react";

function ProductModal({
  product,
  closeModal,
  addToCart
}) {

const [size, setSize] = useState("M");

const [temperature, setTemperature] = useState("เย็น");

const [sweet, setSweet] = useState("50%");

const [ice, setIce] = useState("ปกติ");

const [toppings, setToppings] = useState([]);

const [qty, setQty] = useState(1);


if (!product) return null;


const sizePrice = {
  S:0,
  M:10,
  L:20
};


const toppingPrice = toppings.reduce(
  (sum,item)=> sum + item.price,
  0
);


const totalPrice =
(
  product.price
  +
  sizePrice[size]
  +
  toppingPrice
)
*
qty;


  return (

    <div className="modal-overlay">


      <div className="product-modal">


        <button
          className="close-btn"
          onClick={closeModal}
        >
          ✕
        </button>


        <img
          src={product.image}
          alt={product.name}
        />


        <h2>
          {product.name}
        </h2>
<p className="total-price">

ราคา: {totalPrice} บาท

</p>

       <div className="options">


  {/* SIZE */}

  {
    product.options.size && (

      <div className="option-group">

        <h4>ขนาด</h4>

        <button
          className={size === "S" ? "active" : ""}
          onClick={() => setSize("S")}
        >
          S +0
        </button>


        <button
          className={size === "M" ? "active" : ""}
          onClick={() => setSize("M")}
        >
          M +10
        </button>


        <button
          className={size === "L" ? "active" : ""}
          onClick={() => setSize("L")}
        >
          L +20
        </button>

      </div>

    )
  }



  {/* TEMPERATURE */}

  {
    product.options.temperature && (

      <div className="option-group">

        <h4>อุณหภูมิ</h4>


        <button
          className={temperature === "ร้อน" ? "active" : ""}
          onClick={() => {
  setTemperature("ร้อน");
  setIce("ไม่มี");
}}
        >
          🔥 ร้อน
        </button>


        <button
          className={temperature === "เย็น" ? "active" : ""}
          onClick={() => setTemperature("เย็น")}
        >
          🧊 เย็น
        </button>


      </div>

    )
  }



  {/* SWEET */}

  {
    product.options.sweet && (

      <div className="option-group">

        <h4>ความหวาน</h4>


        {
          ["0%","25%","50%","100%"]
          .map((level)=>(

            <button
              key={level}

              className={
                sweet === level
                ? "active"
                : ""
              }

              onClick={() => setSweet(level)}
            >

              {level}

            </button>

          ))
        }


      </div>

    )
  }



  {/* ICE */}

 {
  product.options.ice && temperature === "เย็น" && (

    <div className="option-group">

      <h4>น้ำแข็ง</h4>


      {
        ["ไม่มี","ปกติ","เยอะ"]
        .map((level)=>(

          <button

            key={level}

            className={
              ice === level
              ? "active"
              :""
            }


            onClick={() => setIce(level)}

          >

            {level}

          </button>

        ))
      }


    </div>
    

  )
}



</div>
{
  product.options.toppings &&
  (
    temperature === "เย็น" ||
    product.category === "dessert"
  )
  &&
  (

    <div className="option-group">

      <h4>
        Topping
      </h4>


      {
        product.options.toppings.map((item)=>(

          <label key={item.name}>

            <input

              type="checkbox"


              checked={
                toppings.some(
                  t => t.name === item.name
                )
              }


              onChange={(e)=>{


                if(e.target.checked){

                  setToppings([
                    ...toppings,
                    item
                  ]);

                }else{

                  setToppings(
                    toppings.filter(
                      t =>
                      t.name !== item.name
                    )
                  );

                }


              }}

            />

            {item.name} +{item.price} บาท


          </label>


        ))
      }


    </div>

  )
}
<div className="option-group quantity-box">

  <h4>
    จำนวน
  </h4>


  <button
    onClick={()=>{
      if(qty > 1){
        setQty(qty - 1);
      }
    }}
  >
    -
  </button>


  <span>
    {qty}
  </span>


  <button
    onClick={()=>{
      setQty(qty + 1);
    }}
  >
    +
  </button>


</div>

        <button
          className="confirm-btn"
         onClick={()=>{

  const cartItem = {

  cartId: Date.now(),

  ...product,

  price: totalPrice / qty,

  qty,


  options:{

    ...(product.options.size && {
      size
    }),

    ...(product.options.temperature && {
      temperature
    }),

    ...(product.options.sweet && {
      sweet
    }),

    ...(product.options.ice && {
      ice
    })

  },


  toppings

};


  addToCart(cartItem);

  closeModal();

}}
        >

          เพิ่มลงตะกร้า

        </button>


      </div>


    </div>

  );

}


export default ProductModal;