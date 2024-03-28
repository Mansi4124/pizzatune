import React from "react";
import "./Offerdiv.css";

import offer2 from "./../assets/pizza16_coupon.jpg";
import offer1 from "./../assets/pizza24.png";
export default function Offerdiv() {
  return (
    <>
      <h1 className="offer-title">GREAT DEALS </h1>

      <div className="coupon-container">
      <img className="coupon-image" src={offer1} alt="mk"></img>
      <img className="coupon-image" src={offer2} alt="mk"></img>

      </div>

      {/* <div className="row coupon">
        <div className="col-lg-1"></div>
        <div className="col-lg-5 offer1">
          <h1>FLAT 50% OFF</h1>
          <h3> Coupon code:PT135</h3>
        </div>
        <div className="offer2">
          <h1>PIZZA @100 RS</h1>
          <h3> Coupon code:PT500</h3>
          <img src={offer2} alt="mk"></img>
        </div>
        <div className="col-lg-1"></div>
      </div> */}
    </>
  );
}
