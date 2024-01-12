import { navigate } from "gatsby";
import * as React from "react";
import { useState } from "react";
import Modal from "../Modal";

const Navigation = ({ active }) => {
  const [showMobileMenu, setMobileMenu] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showFinalStep, setShowFinalStep] = useState(false);

  function handleSignUp() {
    setShowSignUp(true);
    setShowSignIn(false);
    setShowFinalStep(false);
  }
  function handleSignIn() {
    setShowSignIn(true);
    setShowSignUp(false);
    setShowFinalStep(false);
  }
  function handleFinalStep() {
    setShowSignIn(false);
    setShowSignUp(false);
    setShowFinalStep(true);
  }
  function handleClose() {
    setShowSignUp(false);
    setShowSignIn(false);
    setShowFinalStep(false);
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
              className={`hover:text-blue py-2 ${
                active === "home" ? "text-blue border-b border-blue" : ""
              }`}
            >
              Home
            </a>
            <a
              href="/about-us"
              className={`hover:text-blue py-2 ${
                active === "about" ? "text-blue border-b border-blue" : ""
              }`}
            >
              about us
            </a>
            <a
              href="/contact-us"
              className={`hover:text-blue py-2 ${
                active === "contact" ? "text-blue border-b border-blue" : ""
              }`}
            >
              contact us
            </a>
            <a
              href="/disclaimer"
              className={`hover:text-blue py-2 ${
                active === "disclaimer" ? "text-blue border-b border-blue" : ""
              }`}
            >
              disclaimer
            </a>
          </div>
          <div className="relative menu-avatar cursor-pointer hidden lg:block">
          <div className="flex gap-4 items-center ">
            <div className="bg-white rounded-full p-6"></div>
            <div>Immanuel</div>
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
                        <li
                          className="px-4 hover:bg-blue hover:text-white py-3 cursor-pointer "
                        >
                            Logout
                        </li>
                        </ul>
                        </div>
          </div>
          {/* <div className="bg-white px-4 py-2 font-medium items-center hidden lg:flex gap-4 rounded-lg">
          <button
              onClick={handleSignIn} className="text-light_black hover:text-blue">
              Sign In
            </button>
            <button
              onClick={handleSignUp}
              className="bg-light_black hover:text-blue hover:bg-white py-1 px-4 rounded-lg"
            >
              Sign Up
            </button>
          </div> */}
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
          className={`mobile-menu py-2 uppercase z-10 ${
            showMobileMenu === true ? "" : "hidden"
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
          <div>
          <a
            href="/contact-us"
            className="block py-2 px-4 text-sm text-green hover:text-white hover:bg-blue"
          >
            sign in
          </a>
          <a
            href="/disclaimer"
            className="block py-2 px-4 text-sm text-blue hover:text-white hover:bg-blue"
          >
            sign up
          </a>
          </div>
          <div>
          <a
            href="/contact-us"
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
        </div>
      </nav>
      {showFinalStep && (
        <Modal
          handleClose={handleClose} 
          Title={"Final Step"}
          Content={
            <div>
              <form>
                <div className="grid grid-cols-1 gap-6 md:gap-6 pt-4 px-6 text-left">
                  <div>
                    <label htmlFor="departure" className="text-black">
                    Country
                    </label>
                    <input
                      name="departure"
                      className={` border focus:border-red mt-1 p-4 rounded-lg focus:outline-none w-full border-light_black`}
                      type="text"
                      required
                      // onChange={(e) => {
                      //   setDeparture(e.target.value);
                      // }}
                      // value={departure}
                    />
                  </div>
                  <div>
                    <label htmlFor="arrivalDate" className="text-black">
                    Phone Number
                    </label>
                    <input
                      name="arrivalDate"
                      className={` border focus:border-red mt-1 p-4 rounded-lg focus:outline-none w-full border-light_black `}
                      type="text"
                      required
                      // onChange={(e) => {
                      //   setArrivalDate(e.target.value);
                      // }}
                      // value={arrivalDate}
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <button type="button" className="py-4 px-10 w-full lg:w-full rounded-lg text-black bg-green hover:bg-light_green font-bold">Submit</button>
                </div>
                </div>
              </form>
            </div>
          }
        />
      )}
      {showSignUp && (
        <Modal
          handleClose={handleClose} 
          Title={"Sign Up"}
          Content={
            <div>
              <form>
                <div className="grid grid-cols-1 gap-4 md:gap-4 pt-4 px-6 text-left">
                  <div>
                    <label htmlFor="departure" className="text-black">
                    Email
                    </label>
                    <input
                      name="departure"
                      className={` border focus:border-red mt-1 p-4 rounded-lg focus:outline-none w-full border-light_black`}
                      type="email"
                      required
                      // onChange={(e) => {
                      //   setDeparture(e.target.value);
                      // }}
                      // value={departure}
                    />
                  </div>
                  <div>
                    <label htmlFor="departure" className="text-black">
                    Password
                    </label>
                    <input
                      name="departure"
                      className={` border focus:border-red mt-1 p-4 rounded-lg focus:outline-none w-full border-light_black`}
                      type="text"
                      required
                      // onChange={(e) => {
                      //   setDeparture(e.target.value);
                      // }}
                      // value={departure}
                    />
                  </div>
                  <div>
                    <label htmlFor="arrivalDate" className="text-black">
                    Confirm Password
                    </label>
                    <input
                      name="arrivalDate"
                      className={` border focus:border-red mt-1 p-4 rounded-lg focus:outline-none w-full border-light_black `}
                      type="text"
                      required
                      // onChange={(e) => {
                      //   setArrivalDate(e.target.value);
                      // }}
                      // value={arrivalDate}
                    />
                  </div>
                  <div className="text-black">
                  Do you already have an account? <button onClick={handleSignIn} className="text-red">Sign In</button>
                  </div>
                  <div className="flex items-center justify-center">
                    <button type="button" onClick={handleFinalStep} className="py-4 px-10 w-full lg:w-full rounded-lg text-black bg-green hover:bg-light_green font-bold">Continue</button>
                </div>
                <div className="text-black text-center py-4">---- Or Continue with ----</div>
                <div className="flex items-center justify-center">
                    <button type="button" onClick={handleFinalStep} className="py-4 px-10 w-full lg:w-full rounded-xl border text-black bg-white hover:bg-light_grey font-bold">Continue with Google</button>
                </div>
                <div className="flex items-center justify-center">
                    <button type="button" onClick={handleFinalStep} className="py-4 px-10 w-full lg:w-full rounded-xl text-white bg-black hover:bg-light_black font-bold">Continue with Apple</button>
                </div>
                <div className="flex items-center justify-center">
                    <button type="button" onClick={handleFinalStep} className="py-4 px-10 w-full lg:w-full rounded-xl text-white bg-blue hover:bg-[#6278f3] font-bold">Continue with Facebook</button>
                </div>
                </div>
              </form>
            </div>
          }
        />
      )}
      {showSignIn && (
        <Modal
          handleClose={handleClose} 
          Title={"Sign In"}
          Content={
            <div>
              <form>
                <div className="grid grid-cols-1 gap-4 md:gap-4 pt-4 px-6 text-left">
                  <div>
                    <label htmlFor="departure" className="text-black">
                    Email
                    </label>
                    <input
                      name="departure"
                      className={` border focus:border-red mt-1 p-4 rounded-lg focus:outline-none w-full border-light_black`}
                      type="email"
                      required
                      // onChange={(e) => {
                      //   setDeparture(e.target.value);
                      // }}
                      // value={departure}
                    />
                  </div>
                  <div>
                    <label htmlFor="departure" className="text-black">
                    Password
                    </label>
                    <input
                      name="departure"
                      className={` border focus:border-red mt-1 p-4 rounded-lg focus:outline-none w-full border-light_black`}
                      type="text"
                      required
                      // onChange={(e) => {
                      //   setDeparture(e.target.value);
                      // }}
                      // value={departure}
                    />
                  </div>
                  <div className="text-black">
                  Do you not have an account?  <button onClick={handleSignUp} className="text-red">Sign Up</button>
                  </div>
                  <div className="flex items-center justify-center">
                    <button type="button" onClick={handleFinalStep} className="py-4 px-10 w-full lg:w-full rounded-lg text-black bg-green hover:bg-light_green font-bold">Continue</button>
                </div>
                <div className="text-black text-center py-4">---- Or Continue with ----</div>
                <div className="flex items-center justify-center">
                    <button type="button" onClick={handleFinalStep} className="py-4 px-10 w-full lg:w-full rounded-xl border text-black bg-white hover:bg-light_grey font-bold">Continue with Google</button>
                </div>
                <div className="flex items-center justify-center">
                    <button type="button" onClick={handleFinalStep} className="py-4 px-10 w-full lg:w-full rounded-xl text-white bg-black hover:bg-light_black font-bold">Continue with Apple</button>
                </div>
                <div className="flex items-center justify-center">
                    <button type="button" onClick={handleFinalStep} className="py-4 px-10 w-full lg:w-full rounded-xl text-white bg-blue hover:bg-[#6278f3] font-bold">Continue with Facebook</button>
                </div>
                </div>
              </form>
            </div>
          }
        />
      )}
    </div>
  );
};

export default Navigation;
