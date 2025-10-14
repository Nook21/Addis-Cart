import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://media.istockphoto.com/id/2061836380/photo/buy-an-item-through-online-shopping-and-add-it-to-your-shopping-cart-3d-rendering.jpg?s=2048x2048&w=is&k=20&c=HIr1WMcVDNIy1A56dLw4HbVU0YiHQROBuDqG_xs0dGY=)",
      }}
    >
      <div className={`${styles.section} w-[90%] 700px:w-[60%]`}>
        <h1
        className={`text-[35px] leading-[1.2] 400px:text-[60px] text-[#d468c2] font-[600] capitalize
             transition-all duration-300 hover:text-[#e32fe7] hover:scale-105`}
>
            Discover the Latest Deals <br /> on Trendy Products
            </h1>


        <p className="pt-5 text-[16px] 800px:text-[18px] font-[Poppins] font-[400] text-[#00000085]">
          Shop smart and explore the best products at unbeatable prices,
          <br/> all in one
          
        </p>

        <Link to="/products" className="inline-block">
          <div className="mt-5 px-6 py-3 rounded-lg cursor-pointer bg-gradient-to-r from-[#e847eb] to-[#feb47b] 
                          transform transition-all duration-300 hover:scale-110 ">
            <span className="text-white font-[Poppins] text-[18px] ">Shop Now</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
