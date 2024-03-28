import "./Menu.css";
import React, {useState } from "react";
import margeritta from "../../assets/margherita.jpg";
import makhaniMashhoor from "../../assets/makhani_mashhoor.jpg";
import doublecheese from "../../assets/double_cheese_margherita.jpg";
import freshDelight from "../../assets/fresh_delight.jpg";
import indianBite from "../../assets/indian_bite.jpg";
import indianGarden from "../../assets/indian_garden.jpg";
import hawaii from "../../assets/hawaiian_style.jpg";
import sweetSpicy from "../../assets/sweet_spicy.jpg";
import specialPanner from "../../assets/special_paneer.jpg";
import punjabDaTadka from "../../assets/punjab_da_paneer_tadka.jpg";
import periPeri from "../../assets/peri_peri.jpg";
import greatLovers from "../../assets/great_lovers.jpg";
import cheese9 from "../../assets/9_cheesy.jpg";
import vegIcon from "../../assets/veg_icon.svg";

import plainGarlicBread from "../../assets/plain_garlic_bread.jpg";
import cornGarlicBread from "../../assets/corn_chilli_garlic_bread.jpg";
import cheeseGarlicBread from "../../assets/cheese_garlic_bread.jpg";
import onionGarlicBread from "../../assets/onion_chilli_garlic_bread.jpg";
import stuffedGarlicBread from "../../assets/stuffed_garlic_bread_sticks.jpg";

import packOf4 from "../../assets/4_primium_veg.jpg";
import packof4 from "../../assets/4_singles_veg.jpg";

import kinley from "../../assets/kinley.jpg";
import cocacola from "../../assets/cocacola__tin.jpg";
import cocacola750ml from "../../assets/cocacola.jpg";
import thumbsup from "../../assets/thumbsup_tin.jpg";
import thumbsup750ml from "../../assets/thumbsup.jpg";
const garlicBreadMenu = [
  {
    veg: vegIcon,
    name: "Plain Garlic Bread",
    img: plainGarlicBread,
    price: 100,
    description: "Simple Garlic Bread",
  },
  {
    veg: vegIcon,
    name: "Corn Garlic Bread",
    img: cornGarlicBread,
    price: 150,
    description: "Taste of corn ",
  },
  {
    veg: vegIcon,
    name: "Cheese Garlic Bread",
    img: cheeseGarlicBread,
    price: 120,
    description: "With cheesy taste",
  },
  {
    veg: vegIcon,
    name: "Onion Garlic Bread",
    img: onionGarlicBread,
    price: 120,
    description: "With Onion",
  },
  {
    veg: vegIcon,
    name: "Stuffed Garlic Bread",
    img: stuffedGarlicBread,
    price: 180,
    description: "With stuffing of jalapenos and corns",
  },
];

const packOf4Menu = [
  {
    veg: vegIcon,
    name: "Pack of 4 premium pizza ",
    img: packOf4,
    price: 500,
    description: "4 pizzas",
  },
  {
    veg: vegIcon,
    name: "Pack of 4 single pizza",
    img: packof4,
    price: 300,
    description: "4 pizzas",
  },
];
const menuItems = [
  {
    veg: vegIcon,
    name: "Margerita",
    img: margeritta,
    price: 155,
    description: "Enjoy 100% Real Mozzarella Cheese Over A Zesty Gravy",
  },
  {
    veg: vegIcon,
    name: "Makhani Mashhoor",
    img: makhaniMashhoor,
    price: 160,
    description: "Crisp onlion with real mozzarella & cheddar cheese",
  },
  {
    veg: vegIcon,
    name: "Double Cheese Margerita",
    img: doublecheese,
    price: 175,
    description:
      "Extra Loaded 100% Real Mozzarella Cheese Over A Zesty Tomato Gravy",
  },
  {
    veg: vegIcon,
    name: "Fresh Delight",
    img: freshDelight,
    price: 180,
    description:
      "Loaded With Crips Green Peppers, Fresh Cut Onion,Juicy Tomatoes With 100% Mozzarella",
  },
  {
    veg: vegIcon,
    name: "Indian Bite",
    img: indianBite,
    price: 170,
    description:
      "Fresh Juice Sweet Corn,Olives And Mushroom With 100% Real Mozzarella And Cheddar Cheesea",
  },
  {
    veg: vegIcon,
    name: "Indian Garden",
    img: indianGarden,
    price: 190,
    description:
      "Delightful Combination Of Onion,Yellow Bell Pepper,Cherry Tomatoes & Grilled Mushroom",
  },
  {
    veg: vegIcon,
    name: "Hawaii Style Pizza",
    img: hawaii,
    price: 180,
    description:
      "Flavourful Trio Of Juicy Paneer, Freshly Cut Pineapple, Sweet Corn With Extra Cheese",
  },
  {
    veg: vegIcon,
    name: "Sweet Spicy",
    img: sweetSpicy,
    price: 200,
    description:
      "It Is Hot. It Is So Sweet. Sweet & Juicy Golden Corn With Red Paprika, Jalapenos",
  },
  {
    veg: vegIcon,
    name: "Special Paneer",
    img: specialPanner,
    price: 170,
    description:
      "Topped With Double Paneer And The Refreshing Burst From The Capsicum, Onion And Red Paprika",
  },
  {
    veg: vegIcon,
    name: "Punjab Da Tadka",
    img: punjabDaTadka,
    price: 190,
    description:
      "Flavourful Twist Of Cheesy Sauce With Paneer Tikka, Chopped Onions, Red Paprika, Capsicum",
  },
  {
    veg: vegIcon,
    name: "Peri Peri",
    img: periPeri,
    price: 210,
    description:
      "Paneer Chunks With Your Favourite Toppings Of Mushroom, Olives, Red&Green Bell Paper",
  },
  {
    veg: vegIcon,
    name: "Great Lovers",
    img: greatLovers,
    price: 190,
    description:
      "Cheese Lovers Paradise. Loaded With Fresh Paneer,Baby Corn, Mushrooms, Crisp Capsicum",
  },
  {
    veg: vegIcon,
    name: "9 Cheesy Pizza",
    img: cheese9,
    price: 200,
    description:
      "The Magic Of 9 Kind Of Cheese On Your Pizza Long Stands Of Stringy Mozzarella",
  },
];

const bevarages = [
  {
    veg: vegIcon,
    name: "Water",
    img: kinley,
    price: 20,
    description: "",
  },
  {
    veg: vegIcon,
    name: "Coca Cola-750ml",
    img: cocacola750ml,
    price: 45,
    description: "",
  },
  {
    veg: vegIcon,
    name: "Coca Cola Tin",
    img: cocacola,
    price: 30,
    description: "",
  },
  {
    veg: vegIcon,
    name: "Thumbs Up-750ml",
    img: thumbsup750ml,
    price: 45,
    description: "",
  },
  {
    veg: vegIcon,
    name: "Thumbs Up Tin",
    img: thumbsup,
    price: 30,
    description: "",
  },
];

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(null);
  

  

  return (
    <>
    <nav className="navbar navbar-expand-lg bg-dark top-0 w-100 z-2">
            <div className="container">
                <a href="#" className="navbar-brand text-light">PIZZATUNE</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-end w-100">
                        <li className="nav-item">
                            <a href="/" className="nav-link text-light text-center active" aria-current="page">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="/about" className="nav-link text-light text-center">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a href="/menu" className="nav-link text-light text-center">Menu</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link text-light text-center">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    <div className="Menu">
      <div className="Menu-Dist">
        <div className="d-flex flex-column ">
          <div className="flex-title">Categories</div>
          <div
            className="menu-dist-title"
            
          >
            <div>Pizza</div>
          </div>
          <div
            className="menu-dist-title "
          
          >
            <div>Garlic Bread</div>
          </div>
          <div
            className="menu-dist-title"
          
          >
            <div>Pack of 4</div>
          </div>
          <div
            className="menu-dist-title"
          
          >
            <div>Bevarages</div>
          </div>
        </div>
      </div>
      <div className="Menu-items">
        <div className="Menu-title">Explore Menu</div>
        <div  className="submenu-title">
          PIZZA
        </div>
        <div className="menu-items-container">
          {menuItems.map((item, index) => {
            return (
              <div className="menu-item-card">
                <img src={item.veg} className="img-veg" />
                <img src={item.img} alt={item.name} className="img-item" />
                <h5>{item.name}</h5>
                <p>{item.description}</p>
                <h6>Rs.{item.price}</h6>

                {/* <button className="">Add+</button> */}
              </div>
            );
          })}
        </div>
        <div  className="submenu-title" >
          GARLIC BREAD
        </div>
        <div className="menu-items-container">
          {garlicBreadMenu.map((item, index) => {
            return (
              <div className="menu-item-card">
                <img src={item.veg} className="img-veg" />
                <img src={item.img} alt={item.name} className="img-item" />
                <h5>{item.name}</h5>
                <p>{item.description}</p>
                <h6>Rs.{item.price}</h6>

                {/* <button className="">Add+</button> */}
              </div>
            );
          })}
        </div>
        <div className="submenu-title">
          PACK OF 4 PIZZA
        </div>
        <div className="menu-items-container">
          {packOf4Menu.map((item, index) => {
            return (
              <div className="menu-item-card">
                <img src={item.veg} className="img-veg" />
                <img src={item.img} alt={item.name} className="img-item" />
                <h5>{item.name}</h5>
                <p>{item.description}</p>
                <h6>Rs.{item.price}</h6>

                {/* <button className="">Add+</button> */}
              </div>
            );
          })}
        </div>
        <div className="submenu-title">
          BEVERAGES
        </div>
        <div  className="menu-items-container">
          {bevarages.map((item, index) => {
            return (
              <div className="menu-item-card">
                <img src={item.veg} className="img-veg" />
                <img src={item.img} alt={item.name} className="img-item" />
                <h5>{item.name}</h5>
                <p>{item.description}</p>
                <h6>Rs.{item.price}</h6>

                {/* <button className="">Add+</button> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
    </>
    
  );
};

export default Menu;
