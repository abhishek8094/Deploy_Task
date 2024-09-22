import Hero from "./Hero";
import Features from "./Features";
import AllProducts from "./AllProducts";
import Swiper from "./Swiper";
import Testimonials from "./Testimonials";
import Financials from "./Financials";
import Store from "./Store";

const Body = () => {
  return (
    <div>
      <Hero />
      <Features />
      <AllProducts />
      <Swiper />
      <Store/>
      <Testimonials/>
      <Financials/>
      
    </div>
  );
};

export default Body;
