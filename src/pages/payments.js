import { navigate } from "gatsby"
import * as React from "react"
import { useEffect } from "react"
import { handlePayment } from "../services/services"
import Loader from "../components/Modal/loader"
import { useState } from "react"
import { XCircle } from "@phosphor-icons/react"


const PaymentPage = ({ location }) => {
  const [message, setMessage] = useState(false)
  const token = typeof window !== "undefined" && localStorage.getItem('token');
  useEffect(() => {
    // Retrieve data from localStorage when the component mounts
    if (token === undefined || token === null || token === "" || !token) {
      navigate("/sign-in")

    }
  }, []);
  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const parcelID = params.get('parcel_id')
    const deliveryID = params.get('delivery_id')

    handlePayment(token, parcelID, deliveryID).then(results => {
      console.log("redirection:::::;", results)
      if (results.success === true) {
        window.location.href = (results.url)
      } else {
        setMessage(true)
      }
    })

  }, [])
  return (
    <main >
      {!message &&
      <div className=" flex justify-center min-h-screen items-center text-green   flex-col" >
      <Loader clasStyle="w-20 h-20 text-black" />
    </div>
      }
      {message &&
      <div className=" flex justify-center min-h-screen items-center text-red  flex-col" >
      <XCircle size={270} weight="duotone" />
      <div className="text-2xl text-center md:text-4xl text-white pt-4">Payment error!</div>
      <div className="px-4 text-center md:text-2xl text-white pt-2">You cannot pay for the delivery of this package!</div>
      <div className="pt-8"><button onClick={() => navigate("/")} className="px-4 py-4 bg-green text-black rounded-lg hover:bg-black hover:text-white">Go to Homepage</button></div>
    </div>
}
    </main>
  )
}

export default PaymentPage

export const Head = () => <title>Payment Status</title>
