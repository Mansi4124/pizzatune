import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Cart.css";

const Cart = ({ cartProps, setIsCartOpen }) => {
  return (
    <>
      <Navbar />
      <div className="cart-page">
        <div className="cart-container">
          <div
            className="back-cart-container"
            onClick={() => setIsCartOpen(false)}
          >
            <div className="back-cart">
              <i className="fas fa-arrow-left"></i>
              Back
            </div>
          </div>
          <h2>Your Cart</h2>
          <div
            className="cart-item"
            style={{ background: "black", color: "white" }}
          >
            <div className="cart-item-name">Name</div>
            <div className="cart-item-price">Price</div>
            <div className="cart-item-quantity">Quantity</div>

            <div className="cart-item-total">Total</div>
          </div>
          <div
            className="cart-item-container"
            style={{
              paddingTop: cartProps.length > 5 ? "60px" : "0px",
              overflowY: cartProps.length > 5 ? "scroll" : "hidden",
            }}
          >
            {cartProps.map((item) => (
              <div className="cart-item">
                <div className="cart-item-name">{item.name}</div>
                <div className="cart-item-price">Rs.{item.price}</div>
                <div className="cart-item-quantity">{item.qty}</div>=
                <div className="cart-item-total">
                  Rs. {(item.qty * item.price).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <h3>
              Rs.
              {cartProps
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)}
            </h3>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Cart;
