import Carousel from "../Carousel";
import DivFlex from "../DivFlex";
import Offerdiv from "../Offerdiv";
import RowCol from "../RowCol";
import Test from "../TestimonialComponent";
import Testimonial from "../Testimonial";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <Carousel />
        <DivFlex />
        <RowCol />
        <Offerdiv />
        <Test />
      </div>
    </>
  );
};

export default Home;
