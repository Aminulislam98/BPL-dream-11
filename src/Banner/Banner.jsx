import React from "react";
import banner from "../assets/bg-shadow.png";
import bannerMain from "../assets/banner-main.png";

const Banner = ({ coin, setCoin }) => {
  const claimFreeCredit = () => {
    setCoin(coin + 90000);
  };
  return (
    <div
      style={{
        backgroundImage: `url(${banner})`,
      }}
      className="min-h-[60vh] container mx-auto rounded-3xl
      bg-black bg-cover bg-center
      bg-no-repeat flex justify-center items-center
    
    "
    >
      <div className="flex flex-col justify-center items-center space-y-4">
        <div className="max-w-62 max-h-50 md:mb-6">
          <img className="w-full h-full" src={bannerMain} alt="" />
        </div>
        <div className=" flex flex-col justify-center items-center space-y-4">
          <h1 className="font-bold text-4xl text-white">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>
          <h3 className="font-medium text-2xl text-gray-400">
            Beyond Boundaries Beyond Limits
          </h3>
          <div
            className="border border-[#E7FE29] rounded-2xl p-1.5 
          hover:-translate-y-0.5 transition-transform duration-200
          "
          >
            <button
              onClick={() => {
                claimFreeCredit();
              }}
              className=" bg-[#E7FE29] rounded-xl text-sm font-bold py-2.5 px-5 cursor-pointer "
            >
              Claim Free Credit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
