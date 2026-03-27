import React from "react";
import banner from "../assets/bg-shadow.png";
import bannerMain from "../assets/banner-main.png";

const Banner = ({ coin, setCoin, isClaimed, setIsClaimed }) => {
  const claimFreeCredit = () => {
    setCoin(coin + 90000);
    setIsClaimed(true);
  };
  return (
    <section className="px-2 mt-8 md:mt-12  md:mt-10 max-w-7xl mx-auto">
      <div
        style={{
          backgroundImage: `url(${banner})`,
        }}
        className="md:min-h-150 w-full min-h-full rounded-xl  md:rounded-3xl
      bg-black bg-cover bg-center 
      bg-no-repeat flex justify-center items-center
    
    "
      >
        <div className="flex flex-col justify-center items-center space-y-3 md:space-y-4 py-8">
          <div className="max-w-30  md:max-w-62 md:max-h-50 max-h-30 md:mb-6">
            <img className="w-full h-full" src={bannerMain} alt="" />
          </div>
          <div className=" flex flex-col justify-center items-center space-y-1 md:space-y-4">
            <h1 className="font-bold text-2xl md:text-4xl text-white text-center px-4 md:px-0">
              Assemble Your Ultimate Dream 11 Cricket Team
            </h1>
            <h3 className="font-medium text-2xl text-gray-400">
              Beyond Boundaries Beyond Limits
            </h3>
            {isClaimed ? (
              <div className="p-1.5 rounded-2xl">
                <div className=" text-green-500 font-semibold flex justify-center items-center flex-col py-2 px-8 rounded-xl">
                  <p>Congratulations!</p>
                  <p> £90,000 has been awarded to your budget.</p>
                </div>
              </div>
            ) : (
              <div
                className="border border-[#E7FE29] rounded-2xl p-1.5 
          hover:-translate-y-0.5 transition-transform duration-200 mt-2
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
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
