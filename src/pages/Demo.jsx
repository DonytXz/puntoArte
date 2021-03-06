import React from "react";
import Header from "../components/Header";
import Login from "../components/Login";
import SingIng from "../components/SingIng";
import Contact from "../components/Contact";

const Demo = () => {
  return (
    <>
      <div className="w-full h-full">
        <Header />
        <div className="w-full flex flex-col lg:flex-row">
          <div className="flex flex-col w-11/12">
            <Login />
            <SingIng />
          </div>
          <div className="w-1/12">
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
};

export default Demo;
