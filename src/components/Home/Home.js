import Carousel from "../Carousel";
import DivFlex from "../DivFlex";
import Offerdiv from "../Offerdiv";
import RowCol from "../RowCol";
import Test from "../TestimonialComponent";
import Testimonial from "../Testimonial";
import "./Home.css";
import CarouselNav from "../CarouselNav";
import Footer from "../Footer";

const Home = () => {
  return (
    <>
      <div className="home-container">
        {/* <Carousel /> */}
        <CarouselNav/>
        <DivFlex />
        <RowCol />
        <Offerdiv />
        <Test />
        <Footer/>
      </div>
    </>
  );
};

export default Home;
