import React from "react";

import CoinImage from "../assets/coin.png";

const Navbar = () => {
  return (
    <div className="shadow mb-10">
      <div className="navbar bg-base-100  container mx-auto  ">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
          <button className="flex justify-between items-center font-semibold gap-2 px-4">
            0 Coin
            <img src={CoinImage} alt="coin-image" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
