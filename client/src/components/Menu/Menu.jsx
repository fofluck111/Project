import "./Menu.css";

import menuData from "../../data/menuData";


function Menu({ openModal }) {


  return (

    <section className="menu-section">


      <h2>
        ☕ เมนู
      </h2>


      <div className="menu-grid">


        {
          menuData.map((item)=>(

            <div 
              className="menu-card"
              key={item.id}
            >


              <div className="menu-image">

                <img 
                  src={item.image}
                  alt={item.name}
                />

              </div>



              <h3>
                {item.name}
              </h3>



              <p>
                {item.price} บาท
              </p>



              <button
                onClick={() => openModal(item)}
              >

                ➕ เพิ่มลงตะกร้า

              </button>


            </div>


          ))
        }


      </div>


    </section>

  );

}


export default Menu;