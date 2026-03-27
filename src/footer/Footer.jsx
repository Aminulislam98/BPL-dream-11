import React from "react";
import footerLogo from "../assets/logo-footer.png";
import banner from "../assets/bg-shadow.png";

const Footer = () => {
  return (
    <footer className=" flex justify-center bg-[#06091A] flex-col pt-7 w-full px-2">
      {/* footer top */}
      <div className="max-w-7xl w-full mx-auto">
        {/* newsletter container */}
        <div className="border-2 border-gray-100 p-4 mx-auto w-full bg-white/20 rounded-xl md:rounded-4xl">
          <div
            style={{
              backgroundImage: `url(${banner})`,
            }}
            className="bg-white rounded-2xl overflow-hidden max-w-7xl mx-auto md:min-h-70 w-full min-h-full  md:rounded-3xl
       bg-cover bg-center 
      bg-no-repeat flex justify-center items-center"
          >
            <div className="flex flex-col justify-center items-center space-y-3 text-black text-center px-6 py-8">
              <h2 className="font-bold text-xl md:text-3xl">
                Subscribe to our Newsletter
              </h2>
              <p className="font-medium text-sm md:text-xl text-gray-800">
                Get the latest updates and news right in your inbox!
              </p>
              <div className="flex flex-row gap-2 md:gap-3 mt-2 w-full justify-center">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered rounded text-black w-full max-w-50 md:max-w-xs"
                />
                <button className=" btn bg-linear-to-r from-pink-400 via-purple-400 via-30% to-yellow-400 rounded text-black font-semibold border-0 shrink-0">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* footer information container */}
        <div className=" px-3 md:px-0 pt-10 flex flex-col w-full">
          {/* footer logo */}
          <div className="flex justify-center items-center mb-5 md:mb-10 px-3 w-full ">
            <img className="w-30 h-29 " src={footerLogo} alt="" />
          </div>

          {/* footer details |about os | quick links |subscribe */}
          <div className="footer justify-between sm:footer-horizontal max-w-7xl mx-auto mb-10">
            <nav className="text-gray-400">
              <h6 className=" text-white uppercase font-semibold">About Us</h6>
              <a className="link link-hover">We are a passionate team</a>
              <a className="link link-hover">
                dedicated to providing the best{" "}
              </a>
              <a className="link link-hover">services to our customers.</a>
            </nav>
            <nav className="text-gray-400">
              <h6 className="text-white uppercase font-semibold">
                Quick Links
              </h6>
              <a className="link link-hover">Home</a>

              <a className="link link-hover">Services</a>

              <a className="link link-hover">About</a>

              <a className="link link-hover">Contact</a>
            </nav>

            <form className="text-gray-400">
              <h6 className="text-white uppercase font-semibold">Subscribe</h6>
              <fieldset className="w-80">
                <label className="">
                  Subscribe to our newsletter for the latest updates.
                </label>
                <div className="join mt-3">
                  <input
                    type="text"
                    placeholder="username@site.com"
                    className="input input-bordered join-item rounded-l-2xl"
                  />
                  <button className="btn bg-linear-to-r from-pink-400  to-yellow-400 join-item rounded-r-2xl ">
                    Subscribe
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>

      {/* footer bottom copyright */}
      <div className="border-t border-gray-800 flex justify-center items-center py-8">
        <p className="text-gray-400 text-center font-normal text-sm">
          @2024 Your Company All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
