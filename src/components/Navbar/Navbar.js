import img1 from "../.././assets/logo.jpg";
import './Navbar.css';
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg position-absolute top-0 w-100 z-2">
        <div className="container">
          <img src={img1} className="logoNav" alt="" />
          <a href="/" className="navbar-brand text-light">
            PIZZATUNE
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto d-flex justify-content-end w-100">
              <li className="nav-item">
                <a
                  href="/"
                  className="nav-link text-light text-center active"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="/about" className="nav-link text-light text-center">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a href="/menu" className="nav-link text-light text-center">
                  Menu
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/cutomerInquiry"
                  className="nav-link text-light text-center"
                >
                  Customer Inquiry
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/frenchiseInquiry"
                  className="nav-link text-light text-center"
                >
                  Franchise Enquiry
                </a>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
