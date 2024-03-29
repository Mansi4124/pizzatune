import React from "react";
import "./ContactUs.css";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";

export default function CustomerInquiry() {
  return (
    <>
      <Navbar />
      <div className="contactus">
        <form className="contactForm">
          <h1 className="contactusTitle">Get in touch</h1>
          <p>We are always happy to assist you in every way we can.</p>
          <div className="form-group">
            <input
              type="text"
              id="customerName"
              name="customerName"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              id="customerEmail"
              name="customerEmail"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              id="customerQuery"
              name="customerQuery"
              rows="4"
              placeholder="Enter your query"
            ></textarea>
          </div>
          <button className="btn btn-lg btn-dark btn-outline-light ">
            Submit
          </button>
        </form>
      </div>

      <Footer/>
    </>
  );
}
