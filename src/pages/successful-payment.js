import { ShieldCheck } from "@phosphor-icons/react/dist/ssr"
import { navigate } from "gatsby"
import * as React from "react"
import { handlePaymentStatus } from "../services/services"
import { useEffect } from "react"
import { useState } from "react"
import Loader from "../components/Modal/loader"
import { XCircle } from "@phosphor-icons/react"


const PaymentSuccessfulPage = ({location}) => {
  const [successMessage, setSuccessMessage] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const sessionlID = params.get('session_id')

    handlePaymentStatus(sessionlID).then(results => {
      console.log("status:::::;", results)
      if (results.success === true) {
        setSuccessMessage(true)
        setErrorMessage(false)
      } else {
        setErrorMessage(true)
        setSuccessMessage(false)
      }
    })

  }, [])
  return (
    <main >
      {!successMessage && !errorMessage &&
      <div className=" flex justify-center min-h-screen items-center text-green flex-col" >
      <Loader clasStyle="w-20 h-20 text-black" />
    </div>
      }
      {successMessage &&
      <div className=" flex justify-center min-h-screen items-center text-green flex-col" >
      <ShieldCheck size={270} weight="duotone" />
      <div className="text-2xl text-center md:text-4xl text-white pt-4">Payment confirmed!</div>
      <div className="px-4 text-center md:text-2xl text-white pt-2">Your payment was successful. Kindly review your email for the traveler's contact information we've just sent.</div>
      <div className="pt-8"><button onClick={() => navigate("/")} className="px-4 py-4 bg-green text-black rounded-lg hover:bg-black hover:text-white">Go to Homepage</button></div>
    </div>
}
{successMessage &&
      <div className=" flex justify-center min-h-screen items-center text-red flex-col" >
      <XCircle size={270} weight="duotone" />
      <div className="text-2xl text-center md:text-4xl text-white pt-4">Payment error!</div>
      <div className="px-4 text-center md:text-2xl text-white pt-2">Your payment was unsuccessful. Please ensure that you have enough funds available and try again!</div>
      <div className="pt-8"><button onClick={() => navigate("/")} className="px-4 py-4 bg-green text-black rounded-lg hover:bg-black hover:text-white">Go to Homepage</button></div>
    </div>
}
    </main>
  )
}

export default PaymentSuccessfulPage

export const Head = () => <title>Payment Successful</title>
