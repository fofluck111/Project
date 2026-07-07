import coffee from "../assets/images/coffee.jpg";
import latte from "../assets/images/latte.jpg";
import cake from "../assets/images/cake.jpg";


const menuData = [

  {
    id: 1,

    name: "Coffee",

    price: 60,

    image: coffee,

    category: "drink",

    rating: 5,

    options: {

  temperature:true,

  size:true,

  sweet:true,

  ice:true,

  toppings:[
    {
      name:"ไข่มุก",
      price:10,
      type:"cold"
    },

    {
      name:"วิปครีม",
      price:15,
      type:"cold"
    },

    {
      name:"ซอสช็อกโกแลต",
      price:20,
      type:"cold"
    }
  ]

}

  },


  {
    id: 2,

    name: "Latte",

    price: 70,

    image: latte,

    category: "drink",

    rating: 5,

    options: {

  temperature:true,

  size:true,

  sweet:true,

  ice:true,

  toppings:[
    {
      name:"ไข่มุก",
      price:10,
      type:"cold"
    },

    {
      name:"วิปครีม",
      price:15,
      type:"cold"
    },

    {
      name:"ซอสช็อกโกแลต",
      price:20,
      type:"cold"
    }
  ]

}

  },


  {
    id: 3,

    name: "Cake",

    price: 80,

    image: cake,

    category: "dessert",

    rating: 5,

    options: {

  temperature:false,

  size:false,

  sweet:false,

  ice:false,

  toppings:[

    {
      name:"วิปครีม",
      price:15,
      type:"dessert"
    },

    {
      name:"ซอสช็อกโกแลต",
      price:20,
      type:"dessert"
    },

    {
      name:"ผลไม้",
      price:25,
      type:"dessert"
    }

  ]

}

  }


];


export default menuData;