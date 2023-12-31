import * as React from "react"
import Layout from "../components/layout"
import { useState } from "react"
import ProfileCard from "../components/Card/profileCard"
import Modal from "../components/Modal"

const ProfilePage = () => {
  const [filter, setFilter] = useState("")
  const [showUpdate, setShowUpdate] = useState(false);
  const [showAcceptParcel, setShowAcceptParcel] = useState(false);
  const [showParcelDetails, setShowParcelDetails] = useState(false);
  const [showParcelSubmit, setShowParcelSubmit] = useState(false);

  
  function handleSubmit() {
    setShowParcelSubmit(true);
    setShowAcceptParcel(false);
    setShowParcelDetails(false);
  }
  function handleAcceptParcel() {
    setShowAcceptParcel(true);
    setShowParcelSubmit(false);
    setShowParcelDetails(false);
  }
  function handleParcelDetails() {
    setShowParcelDetails(true);
    setShowParcelSubmit(false);
    setShowAcceptParcel(false);
  }

  function handleUpdate() {
    setShowUpdate(true);
  }
  function handleClose() {
    setShowUpdate(false);
    setShowParcelSubmit(false);
    setShowAcceptParcel(false);
    setShowParcelDetails(false);
  }

  return (
    <Layout>
      <main>
        <div className="container mx-auto py-10">
          <div className="flex gap-10 justify-between">
            <div className="flex flex-col gap-6 lg:gap-10 w-full">
              <div className="bg-blue w-full min-h-[350px] rounded-lg p-10 flex flex-col justify-between gap-10">
                <div className="flex flex-col md:flex-row gap-4 justify-between items-center  pt-10">
                  <div className="uppercase text-2xl md:text-5xl font-bold text-center">profile details</div>
                  <div>
                    <button onClick={handleUpdate} type="button" className="py-3 px-6 w-full rounded-lg text-black bg-green hover:bg-light_green font-bold">Update Number</button>
                  </div>
                </div>
                <div className="flex gap-1 flex-col text-center md:text-left uppercase font-bold">
                  <div>Immanuel phillips</div>
                  <div>+233506397746</div>
                </div>
                <div className="">For more information, issues and others, Click Contact Us for assistance. Kindly read the DISCLAIMER to be informed of our policies. </div>
              </div>
            </div>
          </div>
          <div className="py-10">
            <div className="uppercase text-2xl md:text-4xl font-bold text-center">parcel activity</div>
            <div className="flex gap-4 pt-10 items-center justify-end">
              <div className="">Filter</div>
              <div className="w-full md:w-1/3">
                <select name="filter" placeholder="Filter" className={` border bg-white appearance-none text-black mt-1 p-4 rounded-lg focus:outline-none w-full border-white`} type="text" required onChange={e => { setFilter(e.target.value) }} value={filter}>
                  <option>All</option>
                </select>
              </div>
            </div>
          </div>
          <div className="py-10 grid grid-cols-1 gap-10 ">
            <ProfileCard handleDetails={handleParcelDetails} />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
          </div>
        </div>
      </main>
      {showUpdate && (
        <Modal
          handleClose={handleClose} 
          Title={"Update Number"}
          Content={
            <div>
              <form>
                <div className="grid grid-cols-1 gap-6 md:gap-6 pt-4 px-6 text-left">
                  <div>
                    <label htmlFor="departure" className="text-black">
                    Country
                    </label>
                    <input
                      name="departure"
                      className={` border focus:border-red mt-1 p-4 rounded-lg focus:outline-none w-full border-light_black`}
                      type="text"
                      required
                      // onChange={(e) => {
                      //   setDeparture(e.target.value);
                      // }}
                      // value={departure}
                    />
                  </div>
                  <div>
                    <label htmlFor="arrivalDate" className="text-black">
                    Phone Number
                    </label>
                    <input
                      name="arrivalDate"
                      className={` border focus:border-red mt-1 p-4 rounded-lg focus:outline-none w-full border-light_black `}
                      type="text"
                      required
                      // onChange={(e) => {
                      //   setArrivalDate(e.target.value);
                      // }}
                      // value={arrivalDate}
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <button type="button" className="py-4 px-10 w-full lg:w-full rounded-lg text-black bg-green hover:bg-light_green font-bold">Submit</button>
                </div>
                </div>
              </form>
            </div>
          }
        />
      )}
      {showParcelDetails && (
        <Modal
          handleClose={handleClose}
          bigModal={true}
          Content={
            <div className="flex flex-col lg:flex-row gap-10">
              <div className="flex p-10 bg-light_grey">
                <div className="flex justify-center items-center">
                <img src="/svg/siren-icon.svg" className="w-[20rem]" alt="logo" />
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
                    Request Payment
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
          Title={"Redeem Funds"}
          Content={
            <div>
              <form>
                <div className="grid grid-cols-1 gap-6 md:gap-6 pt-4 px-6 text-left">
                  <div>
                    <label htmlFor="departure" className="text-black">
                    Package ID
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
                    <label htmlFor="departure" className="text-black">
                    Full Name
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
                    Payment Channel
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
                    Account Number
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
              We have received your request to redeem your funds. Your details provided 
are being processed! We will send you an email and SMS of successful 
payment once approval is completed. Approval takes less than 72 hours 
            </div>
          }
        />
      )}
    </Layout>
  )
}

export default ProfilePage

export const Head = () => <title>Profile</title>
