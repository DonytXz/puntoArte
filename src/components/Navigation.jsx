import React from "react";
import ArrowDown from "../assets/icons/chevron-down.svg";

const Navigation = () => {
  return (
    <>
      <div className="flex flex-col justify-center w-1/4 mx-auto">
        <div className="flex flex-row justify-center">
          <p className="text-xl text-gray-200 font-normal mb-2">
            Envios a todo Mexico
          </p>
        </div>
        <div>
          <div className="flex flex-row justify-center">
            <div className="mx-2 text-2xl text-white font-bold flex flex-row">
              <p>Obras</p>
              <img className="my-auto mx-2" src={ArrowDown} alt="" srcset="" />
            </div>
            <div className="mx-2 text-2xl text-white font-bold flex flex-row">
              <p>Artistas</p>
              <img className="my-auto mx-2" src={ArrowDown} alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
