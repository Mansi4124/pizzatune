import "./Menu.css";
import React, { useRef, useState } from "react";
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
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Cart from "../Cart/Cart";
import cartGIF from "../../assets/icons8-cart.gif";
const garlicBreadMenu = [
  {
    veg: vegIcon,
    name: "Plain Garlic Bread",
    img: plainGarlicBread,
    price: 100,
    description: "Simple Garlic Bread",
    qty: 0,
  },
  {
    veg: vegIcon,
    name: "Corn Garlic Bread",
    img: cornGarlicBread,
    price: 150,
    description: "Taste of corn ",
    qty: 0,
  },
  {
    veg: vegIcon,
    name: "Cheese Garlic Bread",
    img: cheeseGarlicBread,
    price: 120,
    description: "With cheesy taste",
    qty: 0,
  },
  {
    veg: vegIcon,
    name: "Onion Garlic Bread",
    img: onionGarlicBread,
    price: 120,
    description: "With Onion",
    qty: 0,
  },
  {
    veg: vegIcon,
    name: "Stuffed Garlic Bread",
    img: stuffedGarlicBread,
    price: 180,
    description: "With stuffing of jalapenos and corns",
    qty: 0,
  },
];

const packOf4Menu = [
  {
    veg: vegIcon,
    name: "Pack of 4 premium pizza ",
    img: packOf4,
    price: 500,
    description: "4 pizzas",
    qty: 0,
  },
  {
    veg: vegIcon,
    name: "Pack of 4 single pizza",
    img: packof4,
    price: 300,
    description: "4 pizzas",
    qty: 0,
  },
];
const menuItems = [
  {
    veg: vegIcon,
    name: "Margerita",
    img: margeritta,
    price: 155,
    description: "Enjoy 100% Real Mozzarella Cheese Over A Zesty Gravy",
    qty: 0,
  },
  {
    veg: vegIcon,
    name: "Makhani Mashhoor",
    img: makhaniMashhoor,
    price: 160,
    description: "Crisp onlion with real mozzarella & cheddar cheese",
    qty: 0,
  },
  {
    veg: vegIcon,
    name: "Double Cheese Margerita",
    img: doublecheese,
    price: 175,
    description:
      "Extra Loaded 100% Real Mozzarella Cheese Over A Zesty Tomato Gravy",
    qty: 0,
  },
  {
    veg: vegIcon,
    name: "Fresh Delight",
    img: freshDelight,
    price: 180,
    description:
      "Loaded With Crips Green Peppers, Fresh Cut Onion,Juicy Tomatoes With 100% Mozzarella",
    qty: 0,
  },
  {
    veg: vegIcon,
    name: "Indian Bite",
    img: indianBite,
    price: 170,
    description:
      "Fresh Juice Sweet Corn,Olives And Mushroom With 100% Real Mozzarella And Cheddar Cheesea",
    qty: 0,
  },
  {
    veg: vegIcon,
    name: "Indian Garden",
    img: indianGarden,
    price: 190,
    description:
      "Delightful Combination Of Onion,Yellow Bell Pepper,Cherry Tomatoes & Grilled Mushroom",
    qty: 0,
  },
  {
    veg: vegIcon,
    name: "Hawaii Style Pizza",
    img: hawaii,
    price: 180,
    description:
      "Flavourful Trio Of Juicy Paneer, Freshly Cut Pineapple, Sweet Corn With Extra Cheese",
    qty: 0,
  },
  {
    veg: vegIcon,
    name: "Sweet Spicy",
    img: sweetSpicy,
    price: 200,
    description:
      "It Is Hot. It Is So Sweet. Sweet & Juicy Golden Corn With Red Paprika, Jalapenos",
    qty: 0,
  },
  {
    veg: vegIcon,
    name: "Special Paneer",
    img: specialPanner,
    price: 170,
    description:
      "Topped With Double Paneer And The Refreshing Burst From The Capsicum, Onion And Red Paprika",
    qty: 0,
  },
  {
    veg: vegIcon,
    name: "Punjab Da Tadka",
    img: punjabDaTadka,
    price: 190,
    description:
      "Flavourful Twist Of Cheesy Sauce With Paneer Tikka, Chopped Onions, Red Paprika, Capsicum",
    qty: 0,
  },
  {
    veg: vegIcon,
    name: "Peri Peri",
    img: periPeri,
    price: 210,
    description:
      "Paneer Chunks With Your Favourite Toppings Of Mushroom, Olives, Red&Green Bell Paper",
    qty: 0,
  },
  {
    veg: vegIcon,
    name: "Great Lovers",
    img: greatLovers,
    price: 190,
    description:
      "Cheese Lovers Paradise. Loaded With Fresh Paneer,Baby Corn, Mushrooms, Crisp Capsicum",
    qty: 0,
  },
  {
    veg: vegIcon,
    name: "9 Cheesy Pizza",
    img: cheese9,
    price: 200,
    description:
      "The Magic Of 9 Kind Of Cheese On Your Pizza Long Stands Of Stringy Mozzarella",
    qty: 0,
  },
];

const bevarages = [
  {
    veg: vegIcon,
    name: "Water",
    img: kinley,
    price: 20,
    description: "",
    qty: 0,
  },
  {
    veg: vegIcon,
    name: "Coca Cola-750ml",
    img: cocacola750ml,
    price: 45,
    description: "",
    qty: 0,
  },
  {
    veg: vegIcon,
    name: "Coca Cola Tin",
    img: cocacola,
    price: 30,
    description: "",
    qty: 0,
  },
  {
    veg: vegIcon,
    name: "Thumbs Up-750ml",
    img: thumbsup750ml,
    price: 45,
    description: "",
    qty: 0,
  },
  {
    veg: vegIcon,
    name: "Thumbs Up Tin",
    img: thumbsup,
    price: 30,
    description: "",
    qty: 0,
  },
];

const Menu = () => {
  const pizzaRef = useRef(null);
  const garlicBreadRef = useRef(null);
  const packOf4Ref = useRef(null);
  const bevaragesRef = useRef(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const [pizzaMenu, setPizzaMenu] = useState(menuItems);
  const [garlicBreadsMenu, setGarlicBreadsMenu] = useState(garlicBreadMenu);
  const [packOfMenu, setPackOfMenu] = useState(packOf4Menu);
  const [bevaragesMenu, setBevaragesMenu] = useState(bevarages);

  const scrollToPizza = () => {
    pizzaRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToGarlicBread = () => {
    console.log("scrollToGarlicBread");
    garlicBreadRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPackOf4 = () => {
    console.log("scrollToPackOf4");
    packOf4Ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToBevarages = () => {
    console.log("scrollToBevarages");
    bevaragesRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const addPizza = (item) => {
    const updatedMenu = pizzaMenu.map((menu) => {
      if (menu.name === item.name) {
        menu.qty = menu.qty + 1;
      }
      return menu;
    });
    setPizzaMenu(updatedMenu);
    if (!cart.includes(item)) {
      const updatedCart = [...cart, item];
      setCart(updatedCart);
    }
  };

  const removePizza = (item) => {
    const updatedMenu = pizzaMenu.map((menu) => {
      if (menu.name === item.name) {
        menu.qty = menu.qty - 1;
      }
      return menu;
    });
    setPizzaMenu(updatedMenu);
    if (item.qty === 0) {
      const updatedCart = cart.filter(
        (cartItem) => cartItem.name !== item.name
      );
      setCart(updatedCart);
    }
  };

  const addGarlicBread = (item) => {
    console.log("addMenu", item);
    const updatedMenu = garlicBreadsMenu.map((menu) => {
      if (menu.name === item.name) {
        menu.qty = menu.qty + 1;
      }
      return menu;
    });
    setGarlicBreadsMenu(updatedMenu);
    if (!cart.includes(item)) {
      const updatedCart = [...cart, item];
      setCart(updatedCart);
    }
  };

  const removeGarlicBread = (item) => {
    console.log("removeMenu", item);
    const updatedMenu = garlicBreadsMenu.map((menu) => {
      if (menu.name === item.name) {
        menu.qty = menu.qty - 1;
      }
      return menu;
    });
    setGarlicBreadsMenu(updatedMenu);
    if (item.qty === 0) {
      const updatedCart = cart.filter(
        (cartItem) => cartItem.name !== item.name
      );
      setCart(updatedCart);
    }
  };

  const addPackOf4 = (item) => {
    console.log("addMenu", item);
    const updatedMenu = packOfMenu.map((menu) => {
      if (menu.name === item.name) {
        menu.qty = menu.qty + 1;
      }
      return menu;
    });
    setPackOfMenu(updatedMenu);
    if (!cart.includes(item)) {
      const updatedCart = [...cart, item];
      setCart(updatedCart);
    }
  };

  const removePackOf4 = (item) => {
    console.log("removeMenu", item);
    const updatedMenu = packOfMenu.map((menu) => {
      if (menu.name === item.name) {
        menu.qty = menu.qty - 1;
      }
      return menu;
    });
    setPackOfMenu(updatedMenu);
    if (item.qty === 0) {
      const updatedCart = cart.filter(
        (cartItem) => cartItem.name !== item.name
      );
      setCart(updatedCart);
    }
  };

  const addBevarages = (item) => {
    console.log("addMenu", item);
    const updatedMenu = bevaragesMenu.map((menu) => {
      if (menu.name === item.name) {
        menu.qty = menu.qty + 1;
      }
      return menu;
    });
    setBevaragesMenu(updatedMenu);
    if (!cart.includes(item)) {
      const updatedCart = [...cart, item];
      setCart(updatedCart);
    }
  };

  const removeBevarages = (item) => {
    console.log("removeMenu", item);
    const updatedMenu = bevaragesMenu.map((menu) => {
      if (menu.name === item.name) {
        menu.qty = menu.qty - 1;
      }
      return menu;
    });
    setBevaragesMenu(updatedMenu);
    if (item.qty === 0) {
      const updatedCart = cart.filter(
        (cartItem) => cartItem.name !== item.name
      );
      setCart(updatedCart);
    }
  };

  return (
    <>
      {isCartOpen && (
        <div className="cart-container">
          <Cart cartProps={cart} setIsCartOpen={setIsCartOpen} />
        </div>
      )}
      {!isCartOpen && (
        <>
          <Navbar />
          <div className="Menu">
            <div className="Menu-Dist">
              <div className="d-flex flex-column ">
                <div className="flex-title">Categories</div>
                <div
                  className="menu-dist-title"
                  onClick={() => scrollToPizza()}
                >
                  <div>Pizza</div>
                </div>
                <div
                  className="menu-dist-title "
                  onClick={() => scrollToGarlicBread()}
                >
                  <div>Garlic Bread</div>
                </div>
                <div
                  className="menu-dist-title"
                  onClick={() => scrollToPackOf4()}
                >
                  <div>Pack of 4</div>
                </div>
                <div
                  className="menu-dist-title"
                  onClick={() => scrollToBevarages()}
                >
                  <div>Bevarages</div>
                </div>
              </div>
            </div>
            <div className="Menu-items">
              <div className="Menu-back"></div>
              <div className="expore-menu-container"></div>
              <div className="Menu-title">
                Explore menu
                {cart && cart.length > 0 && (
                  <>
                    <img
                      src={cartGIF}
                      alt="Example GIF"
                      className="cart-icon"
                      onClick={() => setIsCartOpen(true)}
                    />
                  </>
                )}
              </div>

              <div></div>
              <div className="pizza" ref={pizzaRef}>
                <div className="submenu-title">PIZZA</div>
                <div className="menu-items-container">
                  {pizzaMenu.map((item, index) => {
                    return (
                      <>
                        <MenuCard
                          item={item}
                          add={addPizza}
                          remove={removePizza}
                        />
                      </>
                    );
                  })}
                </div>
              </div>
              <div ref={garlicBreadRef}>
                <div className="submenu-title">GARLIC BREAD</div>
                <div className="menu-items-container">
                  {garlicBreadsMenu.map((item, index) => {
                    return (
                      <>
                        <MenuCard
                          item={item}
                          add={addGarlicBread}
                          remove={removeGarlicBread}
                        />
                      </>
                    );
                  })}
                </div>
              </div>
              <div ref={packOf4Ref}>
                <div className="submenu-title">PACK OF 4 PIZZA</div>
                <div className="menu-items-container">
                  {packOfMenu.map((item, index) => {
                    return (
                      <>
                        <MenuCard
                          item={item}
                          add={addPackOf4}
                          remove={removePackOf4}
                        />
                      </>
                    );
                  })}
                </div>
              </div>
              <div ref={bevaragesRef}>
                <div className="submenu-title">BEVERAGES</div>
                <div className="menu-items-container">
                  {bevaragesMenu.map((item, index) => {
                    return (
                      <>
                        <MenuCard
                          item={item}
                          add={addBevarages}
                          remove={removeBevarages}
                        />
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

const MenuCard = ({ item, add, remove }) => {
  return (
    <div className="menu-item-card">
      <div className="left-card-item-container">
        <img src={item.veg} className="img-veg" />
        <h5>{item.name}</h5>
        <div className="menu-description">{item.description}</div>
        <h6>Rs.{item.price}</h6>
      </div>
      <div className="right-card-item-container">
        <div className="img-item-menu-container">
          <img src={item.img} alt={item.name} className="img-item-menu" />
        </div>
        {item.qty > 0 ? (
          <div className="selected-qty-container">
            <div className="menu-minus-qty-button" onClick={() => remove(item)}>
              <i className="fas fa-minus" style={{ marginRight: "10px" }}></i>
            </div>
            <div className="menu-qty">{item.qty}</div>
            <div className="menu-add-qty-button" onClick={() => add(item)}>
              <i className="fas fa-plus"></i>
            </div>
          </div>
        ) : (
          <div className="menu-add-button" onClick={() => add(item)}>
            Add+
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
