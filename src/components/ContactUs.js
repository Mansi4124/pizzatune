import React from "react";
import "./ContactUs.css";

export default function CustomerInquiry() {
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
    </>
  );
}
