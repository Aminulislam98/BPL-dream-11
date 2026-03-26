import React from "react";
import navbarLogo from "../assets/logo.png";

import CoinImage from "../assets/coin.png";

const Navbar = ({ coin }) => {
  return (
    <div className="shadow mb-10 sticky top-0 z-50 bg-white">
      <div className="navbar bg-base-100  container mx-auto  ">
        <div className="flex-1">
          <img className="w-15 h-15" src={navbarLogo} alt="" />
        </div>
        <div className="flex-none">
          <button
            className="flex justify-between
           items-center font-semibold gap-2
             py-2 px-4 border-2 rounded-xl border-gray-300
             text-base hover:bg-gray-100
             "
          >
            {coin.toLocaleString()} Coin
            <img src={CoinImage} alt="coin-image" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
