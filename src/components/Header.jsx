import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Options from "./Options";

const Header = () => {
  return (
    <>
      <div className="bg-indigo-900 p-12 w-full flex flex-row">
        <Logo />
        <Navigation />
        <Options />
      </div>
    </>
  );
};

export default Header;
