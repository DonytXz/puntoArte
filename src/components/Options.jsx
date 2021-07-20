import React from "react";
import Search from "../assets/icons/search.png";
import Heart from "../assets/icons/heart.png";
import ShopingCart from "../assets/icons/shopingCar.png";
import Profile from "../assets/icons/profile.png";

const Options = () => {
  return (
    <>
      <div className="w-1/4  grid grid-cols-4 gap-0">
        <div>
          <img src={Search} alt="" srcset="" />
        </div>
        <div>
          <img src={Profile} alt="" srcset="" />
        </div>
        <div>
          <img src={Heart} alt="" srcset="" />
        </div>
        <div>
          <img src={ShopingCart} alt="" srcset="" />
        </div>
      </div>
    </>
  );
};

export default Options;
