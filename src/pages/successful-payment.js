import { ShieldCheck } from "@phosphor-icons/react/dist/ssr"
import { navigate } from "gatsby"
import * as React from "react"


const PaymentSuccessfulPage = () => {
  return (
    <main className=" flex justify-center min-h-screen items-center text-green   flex-col" >
        <ShieldCheck size={270} weight="duotone" />
      <div className="text-4xl text-white pt-4">Payment confirmed!</div>
      <div className="text-2xl text-white pt-2">Your payment was successful. Kindly review your email for the traveler's contact information we've just sent.</div>
      <div className="pt-8"><button onClick={()=>navigate("/")} className="px-4 py-4 bg-green text-black rounded-lg hover:bg-black hover:text-white">Go to Homepage</button></div>
    </main>
  )
}

export default PaymentSuccessfulPage

export const Head = () => <title>Payment Successful</title>
