import React from "react";
import navbarLogo from "../assets/logo.png";

const Navbar = ({ coin }) => {
  return (
    <div className="border-b border-b-gray-100 md:shadow-sm sticky top-0 z-50 bg-white px-2">
      <div className=" bg-white max-w-7xl mx-auto flex justify-between h-12 md:h-15 items-center">
        <div className="flex-1">
          <img className="w-10 md:w-13  h-10 md:h-13" src={navbarLogo} alt="" />
        </div>

        <div className=" flex flex-row md:justify-between  justify-end  items-center gap-x-12">
          <div className="hidden md:flex">
            <ul
              tabIndex="-1"
              className="flex flex-row space-x-12 text-base text-gray-600"
            >
              <li>
                <a className="cursor-pointer">Home</a>
              </li>
              <li>
                <a className="cursor-pointer">Fixture</a>
              </li>
              <li>
                <a className="cursor-pointer">Teams</a>
              </li>
              <li>
                <a className="cursor-pointer">Schedules</a>
              </li>
            </ul>
          </div>
          <div className=" flex flex-row gap-x-1 justify-center items-center space-x-3">
            <div className="flex flex-row">
              <button
                className="flex justify-between
           items-center font-semibold gap-2
            py-1 px-2 md:py-2 md:px-3 border rounded-xl border-gray-200
            text-sm md:text-base hover:bg-gray-100
             "
              >
                Budget: £{coin.toLocaleString()}
              </button>
            </div>
            <div className="md:hidden flex">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="flex justify-center items-center cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h7"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex="-1"
                  className="menu menu-md dropdown-content   bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow right-0 "
                >
                  <li>
                    <a>Home</a>
                  </li>
                  <li>
                    <a>Fixture</a>
                  </li>
                  <li>
                    <a>Teams</a>
                  </li>
                  <li>
                    <a>Schedules</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

//  <div className="shadow mb-10 sticky top-0 z-50 bg-white">
//       <div className="navbar bg-base-100  container mx-auto  ">
//         <div className="flex-1">
//           <img className="w-15 h-15" src={navbarLogo} alt="" />
//         </div>
//         <div className="flex-none">
//           <button
//             className="flex justify-between
//            items-center font-semibold gap-2
//              py-2 px-4 border-2 rounded-xl border-gray-300
//              text-base hover:bg-gray-100
//              "
//           >
//             Budget: £{coin.toLocaleString()}
//           </button>
//         </div>
//       </div>
//     </div>
