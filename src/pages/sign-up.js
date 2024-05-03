import * as React from "react"
import { useRef } from "react"
import { useState } from "react"
import { getAllCountries, handleRegisterRequest } from "../services/services"
import { Toaster, toast } from 'sonner';
import { navigate } from "gatsby";
import Loader from "../components/Modal/loader";
import Navigation from "../components/Navigation";
import { useEffect } from "react";
import { Eye, EyeClosed } from "@phosphor-icons/react";
import { Helmet } from "react-helmet";


const SignUpPage = () => {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [country, setCountry] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [phone, setPhone] = useState("+")
  const [countryData, setCountryData] = useState([])
  const [loading, setLoader] = useState(false);
  const [toggler, setToggler] = useState(false);
  const [togglerC, setTogglerC] = useState(false);
  const [tnc, setTnc] = useState(false);

  useEffect(() => {
    getAllCountries().then(countries => {
      setCountryData(countries.data)
    })
  }, [])
  let signUpForm = useRef(null)
  function validate() {
    signUpForm.current.reportValidity()
  }
  function handleNavigate() {
    navigate("/sign-in")
  }
  function handleSignIn() {
    setLoader(false);
    navigate('/sign-in')
    setEmail("")
    setPassword("")
    setConfirmPassword("")
    setFirstName("")
    setLastName("")
    setCountry("")
    setPhone("+")
  }
  function handleToggler() {
    setToggler(!toggler)
  }
  function handleCToggler() {
    setTogglerC(!togglerC)
  }
  function handleSignUpSubmit(e) {
    e.preventDefault()
    validate()
    if (validate !== "") {
      setLoader(true)
      handleRegisterRequest(firstName, lastName, country, email, phone, password, confirmPassword).then(res => {
        // console.log("response::::::::", res)
        if (res.success === false) {
          Object.keys(res.errors).forEach(key => {
            res.errors[key].forEach(error => {
              toast.error(error, { duration: 25000 });
            });
          });
          setLoader(false)
        } else if (res.success === true) {
          toast.success("Sign Up Successful!", { duration: 5000, position: 'top-center', })
          setTimeout(() => { handleNavigate() }, 5000)
        } else {
          toast.error("We are facing technical issues. Kindly try again later!", { duration: 5000, position: 'top-right', })
          setLoader(false)
        }
      })
    }
  }
  return (
    <>
      <Helmet>
        <link rel="icon" href="/img/favicon.ico" />
      </Helmet>
      <div className="text-white">
        <Navigation />
      </div>
      <main className="text-white py-24 flex flex-col items-center justify-center min-h-screen" >
        <div className="text-2xl md:text-4xl pb-6">Sign Up</div>
        <form ref={signUpForm} onSubmit={handleSignUpSubmit} method="POST" action="/" >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-4 pt-4 px-6 text-left">
            <div>
              <label htmlFor="firstName" className="">
                First Name
              </label>
              <input
                name="firstName"
                className={` border text-black focus:border-purple mt-1 p-4 rounded-lg focus:outline-none w-full border-light_black`}
                type="text"
                required
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                value={firstName}
              />
            </div>
            <div>
              <label htmlFor="lastName" className="">
                Last Name
              </label>
              <input
                name="lastName"
                className={` border text-black focus:border-purple mt-1 p-4 rounded-lg focus:outline-none w-full border-light_black`}
                type="text"
                required
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                value={lastName}
              />
            </div>
            <div>
              <label htmlFor="email" className="">
                Email
              </label>
              <input
                name="email"
                className={` border text-black focus:border-purple mt-1 p-4 rounded-lg focus:outline-none w-full border-light_black`}
                type="email"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              />
            </div>
            <div className="text-black">
              <label htmlFor="country" className="text-white">
                Country
              </label>
              <select name="country" placeholder="country" className={` border focus:border-purple mt-1 p-4 rounded-lg focus:outline-none w-full border-light_black`} type="text" required onChange={(e) => {
                setCountry(e.target.value);
              }}
                value={country}>
                <option disabled selected value="">Select Country</option>
                {countryData.map(country => {

                  return <option>{country.name}</option>
                })}

              </select>
            </div>
            <div>
              <label htmlFor="phone" className="">
                Phone Number (+XXXXXXXXXXX)
              </label>
              <input
                name="phone"
                className={` border text-black focus:border-purple mt-1 p-4 rounded-lg focus:outline-none w-full border-light_black`}
                type="t"
                required
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                value={phone}
              />
            </div>
            <div>
              <label htmlFor="password" className="">
                Password <span className="text-purple">(eg. $Aa)</span>
              </label>
              <div className="flex border text-black focus:border-purple mt-1 rounded-lg focus:outline-none w-full border-light_black bg-white">
                <input
                  name="password"
                  className={`w-full p-4 rounded-lg outline-none appearance-none`}
                  type={toggler ? "text" : "password"}
                  required
                  placeholder="Xxxxx$"
                  title="Password must contain a Symbol (eg. $), Capital letter (eg. A), a small letter (eg. a), and not less than 6 characters."
                  minLength={6}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  value={password}
                />
                <button type="button" onClick={handleToggler} className="flex items-center justify-center px-2">{toggler ? (<Eye size={32} />) : (<EyeClosed size={32} />)}</button>
              </div>
              <small className="text-purple pr-6 ">Password must contain a Symbol (eg. $), Capital letter (eg. A), a small letter (eg. a)</small>
            </div>
            <div>
              <label htmlFor="confirmPassword" className="">
                Confirm Password
              </label>
              <div className="flex border text-black focus:border-purple mt-1 rounded-lg focus:outline-none w-full border-light_black bg-white">
                <input
                  name="confirmPassword"
                  className={`w-full p-4 rounded-lg outline-none appearance-none`}
                  type={togglerC ? "text" : "password"}
                  required
                  title="Confirm Password must match Password above"
                  minLength={6}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                  value={confirmPassword}
                />
                <button type="button" onClick={handleCToggler} className="flex items-center justify-center px-2">{togglerC ? (<Eye size={32} />) : (<EyeClosed size={32} />)}</button>
              </div>
              <small className="text-purple">Confirm Password must match Password above</small>
            </div>
            <div className=" md:col-span-2">
              <div className="flex">
                <input
                  name="confirmPassword"
                  className={` p-4 cursor-pointer`}
                  type="checkbox"
                  required
                  checked={tnc}
                  onChange={(e) => {
                    setTnc(e.target.value);
                  }}
                  value={tnc}
                />
                <span className="pl-2">I have read the</span>
                <a href="/disclaimer" className="px-2 text-purple hover:underline"> Disclaimer{" "} </a>
                <span> {" "}and I agree to continue with the service</span>
              </div>
            </div>
            <div className=" md:col-span-2">
              Do you already have an account? <button type="button" onClick={handleSignIn} className="text-purple hover:underline">Sign In</button>
            </div>
            <div className="flex items-center justify-center md:col-span-2">
              <button disabled={loading === true} type="submit" className="text-black py-4 px-10 w-full md:w-1/2  disabled:text-white disabled:hover:bg-green rounded-lg  bg-green hover:bg-light_green font-bold">
                {loading && (<Loader />)}Continue</button>
            </div>
            {/* <div className=" text-center py-4">---- Or Continue with ----</div>
                <div className="flex items-center justify-center">
                    <button type="button" onClick={handleFinalStep} className="py-4 px-10 w-full lg:w-full rounded-xl border  bg-white hover:bg-light_grey font-bold">Continue with Google</button>
                </div>
                <div className="flex items-center justify-center">
                    <button type="button" onClick={handleFinalStep} className="py-4 px-10 w-full lg:w-full rounded-xl text-white bg-black hover:bg-light_black font-bold">Continue with Apple</button>
                </div>
                <div className="flex items-center justify-center">
                    <button type="button" onClick={handleFinalStep} className="py-4 px-10 w-full lg:w-full rounded-xl text-white bg-blue hover:bg-[#6278f3] font-bold">Continue with Facebook</button>
                </div> */}
          </div>
        </form>
        <Toaster richColors />
      </main>
    </>
  )
}

export default SignUpPage

export const Head = () => <title>Sign Up</title>