import * as React from "react"
import { useRef } from "react"
import { useState } from "react"
import { handleLoginRequest } from "../services/services"
import { Toaster, toast } from 'sonner';
import { navigate } from "gatsby";
import Loader from "../components/Modal/loader";
import Navigation from "../components/Navigation";


const SignInPage = () => {
    
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoader] = useState(false);

  let signInForm = useRef(null)
  function signInValidate() {
    signInForm.current.reportValidity()
  }
  function handleNavigate(){
    navigate("/profile")
  }
  function handleSignUp() {
    setLoader(false);
    setEmail("")
    setPassword("")
  }

    function handleSignInSubmit(e) {
        e.preventDefault()
        signInValidate()
        if (signInValidate !== "") {
    setLoader(true)
          handleLoginRequest(email, password).then(res => {
            console.log("response::::::::", res)
            if (res.success === false) {
              Object.keys(res.errors).forEach(key => {
                res.errors[key].forEach(error => {
                  toast.error(error, { duration: 25000 });
                });
              });
              setLoader(false)
            } else {
              toast.success("Login Successful!", {duration: 5000, position: 'bottom-center',})
              setTimeout(()=> {handleNavigate()}, 5000)
              localStorage.setItem('token', res.token);
              localStorage.setItem('user', res.user.name);
            }
          })
        }
      }
  return (
    <>
    <div className="text-white">
    <Navigation />
    </div>
    <main className="text-white flex flex-col items-center justify-center min-h-screen" >
        <div className="text-2xl md:text-4xl">Sign In</div>
      <form ref={signInForm} onSubmit={handleSignInSubmit} method="POST" action="/" >
                <div className="grid grid-cols-1 gap-4 md:gap-4 pt-4 px-6 text-left">
                  <div>
                    <label htmlFor="email" className="">
                      Email
                    </label>
                    <input
                      name="email"
                      className={` border text-black focus:border-purple mt-1 p-4 rounded-lg focus:outline-none w-full border-light_black`}
                      type="email"
                      requipurple
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      value={email}
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="">
                      Password <span className="text-purple">(eg. $Aa)</span>
                    </label>
                    <input
                      name="password"
                      className={` border text-black focus:border-purple mt-1 p-4 rounded-lg focus:outline-none w-full border-light_black`}
                      type="password"
                      requipurple
                      placeholder="Xxxxx$"
                      title="Password must contain a Symbol (eg. $), Capital letter (eg. A), a small letter (eg. a), and not less than 6 characters."
                      minLength={6}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      value={password}
                    />
                    <small className="text-purple tracking-tighter ">Password must contain a Symbol (eg. $), Capital letter (eg. A), a small letter (eg. a)</small>
                  </div>
                  <div className="">
                    Do you not have an account?  <button onClick={handleSignUp} className="text-purple">Sign Up</button>
                  </div>
                  <div className="flex items-center justify-center">
                  <button disabled={loading === true} type="submit" className="py-4 px-10 w-full disabled:text-white disabled:hover:bg-green lg:w-full rounded-lg text-black bg-green hover:bg-light_green font-bold">
                    {loading && (<Loader />)}Continue</button>
                  </div>
                  {/* <div className="text-black text-center py-4">---- Or Continue with ----</div>
                <div className="flex items-center justify-center">
                    <button type="button" onClick={handleFinalStep} className="py-4 px-10 w-full lg:w-full rounded-xl border text-black bg-white hover:bg-light_grey font-bold">Continue with Google</button>
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

export default SignInPage

export const Head = () => <title>Sign In</title>