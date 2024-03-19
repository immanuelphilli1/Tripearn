import * as React from "react"
import { useRef } from "react"
import { useState } from "react"
import { handleLoginRequest, handleResetPassword, handleResetVerification } from "../services/services"
import { Toaster, toast } from 'sonner';
import { navigate } from "gatsby";
import Loader from "../components/Modal/loader";
import Navigation from "../components/Navigation";
import { Eye, EyeClosed } from "@phosphor-icons/react";
import { useEffect } from "react";


const SignInPage = ({ location }) => {

  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [loading, setLoader] = useState(false);
  const [toggler, setToggler] = useState(false);
  const [togglerC, setTogglerC] = useState(false);
  const [token, setToken] = useState("")
  const email = typeof window !== "undefined" && localStorage.getItem('email');

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const tokenID = params.get('token')
    setToken(tokenID)

  }, [])
  function handleNavigate() {
    navigate('/sign-in')
  }
  function handleSignIn() {
    setLoader(false);
    navigate('/sign-in')
  }
  function handleToggler() {
    setToggler(!toggler)
  }
  function handleCToggler() {
    setTogglerC(!togglerC)
  }
  function handleReset(e) {
    e.preventDefault()
    if (password === confirmPassword) {
      handleResetPassword(token, email, password, confirmPassword).then(res => {
        console.log("response in restore::::", res)
        if (res.success === false) {
          toast.error(res.errors, { duration: 5000 });
          setLoader(false)
        } else if (res.success === true) {
          toast.success("Password reset successfully!", { duration: 5000, position: 'top-right', })
          setTimeout(() => { handleNavigate() }, 5000)
          localStorage.removeItem('email');
        } else {
          toast.error("We are facing technical issues. Kindly try again later!", { duration: 5000, position: 'top-right', })
          setLoader(false)
        }
      })
    } else {
      toast.error("Password and confirm password do not match!", { duration: 5000, position: 'top-right', })
      setLoader(false)
    }
  }
  return (
    <>
      <div className="text-white">
        <Navigation />
      </div>
      <main className="text-white py-24 flex flex-col items-center justify-center min-h-screen" >
        <div className="text-2xl md:text-4xl">Reset Password</div>
        <div className="text-center pt-4">
          Did you get here by mistake? Go back to  <button type="button" onClick={handleSignIn} className="text-purple hover:underline">Login</button>
        </div>
        <form onSubmit={handleReset} method="POST" action="/" >
          <div className="grid grid-cols-1 gap-4 md:gap-4 pt-4 px-6 text-left">

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

            <div className="flex items-center justify-center">
              <button disabled={loading === true} type="submit" className="py-4 px-10 w-full disabled:text-white disabled:hover:bg-green lg:w-full rounded-lg text-black bg-green hover:bg-light_green font-bold">
                {loading && (<Loader />)}Submit</button>
            </div>

          </div>
        </form>
        <Toaster richColors />
      </main>
    </>
  )
}

export default SignInPage

export const Head = () => <title>Sign In</title>