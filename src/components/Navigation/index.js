import { navigate } from "gatsby";
import * as React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { handleLogoutRequest } from "../../services/services";

const Navigation = ({ active }) => {
  const [showMobileMenu, setMobileMenu] = useState(false);
  const [check, setCheck] = useState(null)
  const [user, setUser] = useState([])

  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    setUser(user)
    setCheck(token)
  }, [])

  function handleLogout (){
    handleLogoutRequest()
    localStorage.removeItem('token');
    const targetURL = 'http://localhost:8000/' || 'https://parcelra.com/';

if (window.location.href === targetURL) {
  window.location.reload()
} else{
  navigate("/")
}
  }

  const showMenuTray = () => {
    showMobileMenu === false ? setMobileMenu(true) : setMobileMenu(false);
  };
  return (
    <div className=" fixed top-0 left-0 right-0 z-30 bg-light_black">
      <nav className="container mx-auto ">
        <div className="flex justify-between items-center gap-2 py-6 lg:py-10 uppercase">
          <a href="/">
            <img
              src="/img/tripearn.png"
              alt="logo"
              className=" w-[50px] height-[50px]"
            />
          </a>
          <div className="hidden lg:flex gap-10">
            <a
              href="/"
              className={`hover:text-blue py-2 ${active === "home" ? "text-blue border-b border-blue" : ""
                }`}
            >
              Home
            </a>
            <a
              href="/about-us"
              className={`hover:text-blue py-2 ${active === "about" ? "text-blue border-b border-blue" : ""
                }`}
            >
              about us
            </a>
            <a
              href="/contact-us"
              className={`hover:text-blue py-2 ${active === "contact" ? "text-blue border-b border-blue" : ""
                }`}
            >
              contact us
            </a>
            <a
              href="/disclaimer"
              className={`hover:text-blue py-2 ${active === "disclaimer" ? "text-blue border-b border-blue" : ""
                }`}
            >
              disclaimer
            </a>
          </div>
          {check !== null   ? (
          <div className="relative menu-avatar cursor-pointer hidden lg:block">
          <div className="flex gap-4 items-center ">
            <div className="bg-white rounded-full p-6"></div>
            <div>{user}</div>
          </div>
          <div
                      className={`absolute dropdown border-0 mt-4 border-aluminium top-10 right-0 w-[150px] bg-white text-black shadow-xl rounded-md overflow-hidden `}
                    >
                      <ul className="py-1 w-full">
                        <li onClick={e=>navigate('/profile')} 
                          className="px-4 hover:bg-blue hover:text-white py-3 cursor-pointer "
                        >
                           Profile
                        </li>
                        <li onClick={handleLogout} 
                          className="px-4 hover:bg-blue hover:text-white py-3 cursor-pointer "
                        >
                            Logout
                        </li>
                        </ul>
                        </div>
          </div>
          // console.log("res::::::::::check:::::",check)
          ) : (
          <div className="bg-white px-4 py-2 font-medium items-center hidden lg:flex gap-4 rounded-lg">
            <a
              href="/sign-in" className="text-light_black hover:text-blue">
              Sign In
            </a>
            <a
              href="/sign-up"
              className="bg-light_black hover:text-blue hover:bg-white py-1 px-4 rounded-lg"
            >
              Sign Up
            </a>
          </div>
          )}
          {/* <!-- mobile button goes here --> */}
          <div className="lg:hidden flex items-center">
            <button
              className="mobile-menu-button text-orange-400"
              onClick={showMenuTray}
            >
              <svg
                className="w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          className={`mobile-menu py-2 uppercase z-10 ${showMobileMenu === true ? "" : "hidden"
            } lg:hidden`}
        >
          <a
            href="/"
            className="block py-2 px-4 text-sm text-white hover:bg-blue"
          >
            Home
          </a>
          <a
            href="/about-us"
            className="block py-2 px-4 text-sm text-white hover:bg-blue"
          >
            about us
          </a>
          <a
            href="/contact-us"
            className="block py-2 px-4 text-sm text-white hover:bg-blue"
          >
            contact us
          </a>
          <a
            href="/disclaimer"
            className="block py-2 px-4 text-sm text-white hover:bg-blue"
          >
            disclaimer
          </a>
          {check === null ? (
          <div>
            <a
              href="/sign-in"
              className="block py-2 px-4 text-sm text-green hover:text-white hover:bg-blue uppercase"
            >
              sign in
            </a>
            <a
              href="/sign-up"
              className="block py-2 px-4 text-sm text-blue hover:text-white hover:bg-blue uppercase"
            >
              sign up
            </a>
          </div>
          ): (
          <div>
            <a
              href="/profile"
              className="block py-2 px-4 text-sm text-blue hover:text-white hover:bg-blue"
            >
              profile
            </a>
            <a
              href="/disclaimer"
              className="block py-2 px-4 text-sm text-red hover:text-white hover:bg-blue"
            >
              logout
            </a>
          </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
