import { navigate } from "gatsby"
import * as React from "react"
import { useEffect } from "react"
import { handlePayment } from "../services/services"
import Loader from "../components/Modal/loader"


const PaymentPage = ({ location }) => {
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
        navigate(-1)
      }
    })

  }, [])
  return (
    <main >
      <div className=" flex justify-center min-h-screen items-center text-green   flex-col" >
        <Loader clasStyle="w-20 h-20 text-black" />
      </div>
    </main>
  )
}

export default PaymentPage

export const Head = () => <title>Payment Status</title>
