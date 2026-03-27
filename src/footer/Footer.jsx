import React from "react";
import footerLogo from "../assets/logo-footer.png";
import banner from "../assets/bg-shadow.png";

const Footer = () => {
  return (
    <footer className="relative bg-amber-700 h-[90vh] flex justify-center items-end">
      <div className="bg-[#06091A] px-3 md:px-0 relative pt-10">
        <div className=" flex flex-col ">
          <div className="flex justify-center items-center mb-5 md:mb-10 px-3">
            <img className="w-30 h-29" src={footerLogo} alt="" />
          </div>
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
        <div className="border-t border-gray-800 flex justify-center items-center py-8">
          <p className="text-gray-400 text-center font-normal text-sm">
            @2024 Your Company All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
