import { XCircle } from "@phosphor-icons/react"
import { navigate } from "gatsby"
import * as React from "react"


const PaymentErrorPage = () => {
  return (
    <main className=" flex justify-center min-h-screen items-center text-red  flex-col" >
      <XCircle size={270} weight="duotone" />
      <div className="text-2xl text-center md:text-4xl text-white pt-4">Payment error!</div>
      <div className="px-4 text-center md:text-2xl text-white pt-2">Your payment was unsuccessful. Please ensure that you have enough funds available and try again!</div>
      <div className="pt-8"><button onClick={() => navigate("/")} className="px-4 py-4 bg-green text-black rounded-lg hover:bg-black hover:text-white">Go to Homepage</button></div>
    </main>
  )
}

export default PaymentErrorPage

export const Head = () => <title>Payment Error</title>