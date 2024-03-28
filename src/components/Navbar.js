import React from "react";
import "./Navbar.css";
import image from './../assets/logo.jpg'
export default function Navbar() {
  const img1 = "logo.png";
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="logo-container">
          <div className="navbar-brand" href="#">
            PIZZATUNE
            <img src={image} alt="img" />
          </div>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="/about">
                About us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/menu">
                Menu
              </a>
            </li>
            <li className="nav-item dropdown ">
              <a
                className="nav-link  "
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Contact us
              </a>
              <ul
                className="dropdown-menu bg-dark "
               
              >
                <li>
                  <a className="dropdown-item text-light" href="/cutomerInquiry">
                    Customer Enquiry
                  </a>
                </li>
                <li>
                  <a className="dropdown-item  text-light" href="/frenchiseInquiry">
                    Franchise Enquiry
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
