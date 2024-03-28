import React from 'react';
import './CarouselNav.css';
import img1 from "./../assets/pizza20.png";
import img2 from "./../assets/pizza28.jpg";
import img3 from "./../assets/pizza29.jpg";

export default function CarouselNav() {
  return (
    <div>
       <header>
        <nav className="navbar navbar-expand-lg position-absolute top-0 w-100 z-2">
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
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-light text-center" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              Contact Us
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                              <li><a className="dropdown-item" href="#">Customer Inquiry</a></li>
                              <li><a className="dropdown-item" href="#">Franchise Enquiry</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div id="carouselExampleAutoplaying" className="carousel slide position-relative" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>

            <div className="carousel-inner h-100">
                <div className="carousel-item h-100 active">
                    <img src={img1} className="d-block w-100" alt="img1"/>
                    <div className="carousel-caption h-100 d-flex flex-column justify-content-center align-items-start">
                        <h2 className="fw-bold">PIZAATUNE</h2>
                        <p className="w-50 text-start d-none d-md-block fs-5 fw-light">WHERE FLAVOUR MEETS HARMONY</p>
                    </div>
                </div>
                <div className="carousel-item h-100">
                    <img src={img2} className="d-block w-100" alt="img2"/>
                    <div className="carousel-caption h-100 d-flex flex-column justify-content-center align-items-start">
                        <h2 className="fw-bold">Explore Menu!</h2>
                        <p className="w-50 text-start d-none d-md-block fs-5 fw-light">Discover a world of culinary delights that will tantalize your taste buds!</p>
                        <button type="button" className="btn btn-outline-light shadow text-capitalize">Discover Menu</button>
                    </div>
                </div>
                <div className="carousel-item h-100">
                    <img src={img3} className="d-block w-100" alt="img3"/>
                    <div className="carousel-caption h-100 mt-6 d-flex flex-column justify-content-center align-items-end">
                        <h2 className="fw-bold">Join Us</h2>
                        <p className="w-50 text-end d-none d-md-block fs-4 fw-light">Let's make Pizzatune famous in the world</p> 
                        <button type="button" className="btn btn-primary shadow text-capitalize">Franchise Enquiry</button>
                    </div>
                </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>

            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </header>
    </div>
  );
}
