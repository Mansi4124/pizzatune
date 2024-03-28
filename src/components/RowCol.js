import React from "react";
import "./RowCol.css";

import img1 from "./../assets/pizza-popular1.webp";
import img2 from "./../assets/pizza_offer4.jpg";
import img3 from "./../assets/pizza-popular3.jpg";
import img4 from "./../assets/pizza15.jpg";
export default function RowCol() {
  return (
    <>
      <h1 className="popular-title">POPULAR ITEMS</h1>

      <div className="row popular-items1">
        <div className="col-lg-2"></div>
        <div className="col-lg-4 image-container">
          <img src={img1} className="image1" alt="Pizza" />
          <div className="image-text">Fresh Delight</div>{" "}
          {/* Add text overlay */}
        </div>
        <div className="col-lg-4 image-container">
          <img src={img2} className="image2" />
          <div className="image-text">Peri Peri</div>{" "}
          {/* Add text overlay */}
        </div>
        <div className="col-lg-2"></div>
      </div>
      <div className="row popular-items2">
        <div className="col-lg-2"></div>
        <div className="col-lg-4 image-container">
          <img src={img3} alt="Pizza" className="image3" />
          <div className="image-text">9-cheesy</div>{" "}
          {/* Add text overlay */}
        </div>
        <div className="col-lg-4 image-container">
          <img src={img4} alt="Pizza" className="image3" />
          <div className="image-text">Indian Bite</div>{" "}
          {/* Add text overlay */}
        </div>
        <div className="col-lg-2"></div>
      </div>
    </>
  );
}
