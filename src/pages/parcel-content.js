import * as React from "react"
import Layout from "../components/layout"
import ParcelCard from "../components/Card/parcelCard"
import Search from "../components/Search"
import { useState } from "react"
import Modal from "../components/Modal"
import { navigate } from "gatsby"

const ParcelPage = () => {
  const [filter, setFilter] = useState("")
  const [showAcceptParcel, setShowAcceptParcel] = useState(false);
  const [showParcelDetails, setShowParcelDetails] = useState(false);
  const [showParcelSubmit, setShowParcelSubmit] = useState(false);

  
  function handleSubmit() {
    setShowParcelSubmit(true);
    setShowAcceptParcel(false);
    setShowParcelDetails(false);
  }
  function handleAcceptParcel() {
    const token = localStorage.getItem('token');
    if (token === undefined || token === null || token === "" || !token) {
      navigate("/sign-in")

    }
    setShowAcceptParcel(true);
    setShowParcelSubmit(false);
    setShowParcelDetails(false);
  }
  function handleParcelDetails() {
    setShowParcelDetails(true);
    setShowParcelSubmit(false);
    setShowAcceptParcel(false);
  }
  function handleClose() {
    setShowParcelSubmit(false);
    setShowAcceptParcel(false);
    setShowParcelDetails(false);
  }
  return (
    <Layout active={"parcels"}>
      <main>
        <div className="container mx-auto py-10">
          <div className="flex gap-10 justify-between">
            <div className="flex flex-col gap-6 lg:gap-10 w-full">
              <div className="bg-blue w-full min-h-[350px] rounded-lg py-10 px-6">
                <div className="uppercase text-2xl md:text-5xl font-bold text-center py-10">See Parcelra parcels in your area</div>
                <Search border={"border-white"} />
              </div>
            </div>
          </div>
          <div className="py-10">
            <div className="flex gap-4 pt-10 items-center justify-end">
              <div className="">Filter</div>
              <div className="w-full md:w-1/3">
                <select name="filter" placeholder="Filter" className={` border bg-white appearance-none text-black mt-1 p-4 rounded-lg focus:outline-none w-full border-white`} type="text" required onChange={e => { setFilter(e.target.value) }} value={filter}>
                  <option>Documets</option>
                </select>
              </div>
            </div>
          </div>
          <div className="py-10 grid grid-cols-1 lg:grid-cols-2 gap-10 ">
            <ParcelCard handleDetails={handleParcelDetails} />
            <ParcelCard />
            <ParcelCard />
            <ParcelCard />
          </div>
        </div>
      </main>
      {showParcelDetails && (
        <Modal
          handleClose={handleClose}
          bigModal={true}
          Content={
            <div className="flex flex-col lg:flex-row gap-10">
              <div className="flex p-10 bg-purple rounded-lg">
                <div className="flex justify-center items-center">
                <img src="/img/tripearn.png" className="w-[20rem]" alt="logo" />
                </div>
                </div>
              <div className="flex flex-col justify-between gap-10 w-full text-left">
                <div className="border-b">
                  <div>Destination: <span className="font-bold">Accra - Ghana</span></div>
                  <div>Primary Location: <span className="font-bold">Accra - Ghana</span></div>
                  <div>Required Delivery Date: <span className="font-bold">Accra - Ghana</span></div>
                  <div>Package Size: <span className="font-bold">Accra - Ghana</span></div>
                  <div>Package Type: <span className="font-bold">Accra - Ghana</span></div>
                  <div>Amount: <span className="font-bold">Accra - Ghana</span></div>
                </div>
                <div>Amount is simply dummy text of the printing and 
typesetting industry. Lorem Ipsum has been the 
industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </div>
                <div className="w-full">
                <button
                    onClick={handleAcceptParcel}
                    type="button"
                    className="py-3 px-6 w-full rounded-lg text-black bg-green hover:bg-light_green font-bold"
                  >
                    Accept
                  </button>
                </div>
              </div>
            </div>
          }
        />
      )}
      {showAcceptParcel && (
        <Modal
          handleClose={handleClose} 
          Title={"Offer Delivery"}
          Content={
            <div>
              <form>
                <div className="grid grid-cols-1 gap-6 md:gap-6 pt-4 px-6 text-left">
                  <div>
                    <label htmlFor="departure" className="text-black">
                    Date of Departure
                    </label>
                    <input
                      name="departure"
                      className={` border focus:border-red mt-1 p-4 rounded-lg focus:outline-none w-full border-light_black`}
                      type="date"
                      required
                      // onChange={(e) => {
                      //   setDeparture(e.target.value);
                      // }}
                      // value={departure}
                    />
                  </div>
                  <div>
                    <label htmlFor="arrivalDate" className="text-black">
                    Date of Arrival
                    </label>
                    <input
                      name="arrivalDate"
                      className={` border focus:border-red mt-1 p-4 rounded-lg focus:outline-none w-full border-light_black `}
                      type="date"
                      required
                      // onChange={(e) => {
                      //   setArrivalDate(e.target.value);
                      // }}
                      // value={arrivalDate}
                    />
                  </div>
                  <div>
                    <label htmlFor="arrivalTime" className="text-black">
                    Arrival Time
                    </label>
                    <input
                      name="arrivalTime"
                      className={` border focus:border-red mt-1 p-4 rounded-lg focus:outline-none w-full border-light_black`}
                      type="time"
                      required
                      // onChange={(e) => {
                      //   setArrivalTime(e.target.value);
                      // }}
                      // value={arrivalTime}
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <button type="button" onClick={handleSubmit} className="py-4 px-10 w-full lg:w-full rounded-lg text-black bg-green hover:bg-light_green font-bold">Submit</button>
                </div>
                </div>
              </form>
            </div>
          }
        />
      )}
      {showParcelSubmit && (
        <Modal 
          Title={"Thank You"}
          handleClose={handleClose}
          bigModal={true}
          Content={
            <div className="pt-6">
              We have received your request to deliver package 12345. Your details provided 
are being processed! We will send you an email and SMS of package details 
once approval is completed. Approval takes less than 24 hours 
            </div>
          }
        />
      )}
    </Layout>
  )
}

export default ParcelPage

export const Head = () => <title>Parcels</title>
