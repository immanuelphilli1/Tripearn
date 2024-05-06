import * as React from "react"
import { useState } from "react"
import { handleResetVerification } from "../services/services"
import { Toaster, toast } from 'sonner';
import { navigate } from "gatsby";
import Loader from "../components/Modal/loader";
import Navigation from "../components/Navigation";
import { Helmet } from "react-helmet";


const SignInPage = () => {

  const [email, setEmail] = useState("")
  const [loading, setLoader] = useState(false);


  function handleNavigate() {
    navigate('/')
  }
  function handleSignIn() {
    setLoader(false);
    navigate('/sign-in')
    setEmail("")
  }
  function handleResetVerify(e) {
    e.preventDefault()
    setLoader(true)
    handleResetVerification(email).then(res => {
      if (res.success === false) {
        toast.error(res.errors, { duration: 5000 });
        setLoader(false)
      } else if (res.success === true) {
        toast.success("An email is being sent to you. Kindly follow the instructions to help you reset your password!", { duration: 10000, position: 'top-right', })
        setTimeout(() => { handleNavigate() }, 10000)
        localStorage.setItem('email', email);
      } else {
        toast.error("We are facing technical issues. Kindly try again later!", { duration: 5000, position: 'top-right', })
        setLoader(false)
      }
    })
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
        <div className="text-2xl md:text-4xl">Reset Password</div>
        <div className="text-center pt-4">
          Did you get here by mistake? Go back to  <button type="button" onClick={handleSignIn} className="text-purple hover:underline">Login</button>
        </div>
        <form onSubmit={handleResetVerify} method="POST" action="/" >
          <div className="grid grid-cols-1 gap-4 md:gap-4 pt-4 px-6 text-left">
            <div className={`min-w-[17rem] md:min-w-[30rem]`}>
              <label htmlFor="email" className="">
                Email
              </label>
              <div className=" text-black">
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

export const Head = () => <title>Reset Password</title>