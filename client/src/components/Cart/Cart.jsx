import "./Cart.css";

function Cart({ cart, setCart, isOpen, toggleCart }) {


  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.qty,
    0
  );


  const increaseQty = (id) => {

    setCart(
      cart.map((item)=>

        item.cartId === id

        ? {
            ...item,
            qty:item.qty + 1
          }

        : item

      )
    );

  };



  const decreaseQty = (id) => {

    setCart(

      cart
      .map((item)=>

        item.cartId === id

        ? {
            ...item,
            qty:item.qty - 1
        }

        : item

      )

      .filter(item=>item.qty > 0)

    );

  };



  const clearCart = () => {

    setCart([]);

  };



  if (!isOpen) return null;



  return (

    <>


      <div
        className="cart-overlay"
        onClick={toggleCart}
      />



      <div className="cart-popup">


        <div className="cart-header">

          <h3>
            🛒 ตะกร้า
          </h3>


          <button
            onClick={toggleCart}
          >
            ✖
          </button>


        </div>




        {
          cart.length === 0

          ?

          (
            <p>
              ยังไม่มีสินค้า
            </p>
          )


          :


          cart.map((item)=>(


            <div
              className="cart-item"
              key={item.cartId}
            >



              <div>


                <h4>
                  {item.name}
                </h4>



                <p>
                  ราคา {item.price} บาท
                </p>



                {
  item.options && (

    <small className="cart-options">

      {[
        item.options.size && `Size ${item.options.size}`,
        item.options.temperature,
        item.options.sweet && `หวาน ${item.options.sweet}`,
        item.options.ice && `น้ำแข็ง ${item.options.ice}`
      ]
      .filter(Boolean)
      .join(" • ")}

    </small>

  )
}



                {
                  item.toppings?.length > 0 && (

                    <div>

                      Topping:

                      {
                        item.toppings.map((t)=>(

                          <div key={t.name}>

                            + {t.name}

                          </div>

                        ))

                      }


                    </div>

                  )
                }




                <div className="qty-control">


                  <button
                    onClick={()=>decreaseQty(item.cartId)}
                  >
                    -
                  </button>



                  <span>
                    {item.qty}
                  </span>



                  <button
                    onClick={()=>increaseQty(item.cartId)}
                  >
                    +
                  </button>



                </div>



              </div>


            </div>


          ))

        }



        {
          cart.length > 0 &&

          <button
            className="clear-btn"
            onClick={clearCart}
          >
            ลบทั้งหมด
          </button>

        }



        <hr/>


        <h4>
          รวม: {total} บาท
        </h4>



      </div>


    </>

  );

}


export default Cart;