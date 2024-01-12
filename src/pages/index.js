import * as React from "react";
import Layout from "../components/layout";
import ParcelCard from "../components/Card/parcelCard";
import Search from "../components/Search";
import { navigate } from "gatsby";
import { useState } from "react";
import Modal from "../components/Modal";
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

const IndexPage = () => {
  const [showCreateParcel, setShowCreateParcel] = useState(false);
  const [showAcceptParcel, setShowAcceptParcel] = useState(false);
  const [showParcelDetails, setShowParcelDetails] = useState(false);
  const [showParcelSubmit, setShowParcelSubmit] = useState(false);
  

  function handleCreateParcel() {
    setShowCreateParcel(true);
  }
  function handleSubmit() {
    setShowParcelSubmit(true);
    setShowAcceptParcel(false);
    setShowCreateParcel(false);
    setShowParcelDetails(false);
  }
  function handleAcceptParcel() {
    setShowAcceptParcel(true);
    setShowParcelSubmit(false);
    setShowCreateParcel(false);
    setShowParcelDetails(false);
  }
  function handleParcelDetails() {
    setShowParcelDetails(true);
    setShowCreateParcel(false);
    setShowParcelSubmit(false);
    setShowAcceptParcel(false);
  }
  function handleClose() {
    setShowCreateParcel(false);
    setShowParcelSubmit(false);
    setShowAcceptParcel(false);
    setShowParcelDetails(false);
  }
  return (
    <Layout active={"home"}>
      <main>
        <div className="container mx-auto py-6">
          <div className="flex gap-10 justify-between">
            <div className="flex flex-col gap-6 lg:gap-10 w-full">
              <div className="bg-blue w-full h-[200px] md:h-[450px] rounded-lg"></div>
              <div>
                <div className="uppercase font-bold text-5xl md:text-[92px] lg:pt-4">
                  Parcelra
                </div>
                <div className="pt-4 md:text-xl">
                  The largest parcel delivery service that unites travelers and
                  people who need to deliver any parcel
                </div>
                <div className="flex flex-col md:flex-row gap-4 md:gap-10 pt-10">
                  <button
                    onClick={handleCreateParcel}
                    type="button"
                    className="py-3 px-6 w-full rounded-lg text-black bg-green hover:bg-light_green uppercase font-bold"
                  >
                    send parcel
                  </button>
                  <button
                    onClick={(e) => navigate("/parcel-content")}
                    type="button"
                    className="py-3 px-6 w-full rounded-lg text-black bg-green hover:bg-light_green uppercase font-bold"
                  >
                    offer delivery
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full hidden rounded-lg bg-purple lg:block">
              <div className="h-full ">
                <div className="flex flex-col h-full justify-between gap-10">
                  <div className="pt-10 flex items-center justify-center">
                    <img
                      src="/img/tripearn.png"
                      className=" w-[40rem] px-10"
                      alt="logo-big"
                    />
                  </div>
                  <div className="uppercase text-black text-3xl font-bold px-10 pb-6 text-center">
                    DELIVER YOUR PARCEL TO YOUR DESTINATION IN A FEW STEPS
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-y-1/2">
                <div className="flex justify-center items-center">
                  <img src="/img/plane.png" alt="plane" className="w-[800px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white py-10 my-10">
          <div className="container mx-auto">
            <div>
              <div className="uppercase text-2xl md:text-5xl text-black font-bold text-center">
                Need to deliver a parcel?
              </div>
              <div className="text-black text-lg md:text-2xl text-center pt-2">
                These are featured routes our travelers easily accept on Parcelra
                
              </div>
            </div>
            <div className="py-10 flex flex-col lg:flex-row gap-10  ">
              {/* <Carousel autoPlay={true} interval={3000} infiniteLoop={true}> */}
              <ParcelCard handleDetails={handleParcelDetails} />
              <ParcelCard />
              {/* </Carousel> */}
            </div>
          </div>
        </div>
        <div className="container mx-auto py-10">
          <div className="uppercase text-2xl md:text-5xl font-bold text-center pb-10">
            See Parcelra parcels in your area
          </div>
          <div className="lg:bg-white rounded-full lg:p-10">
            <Search border={"border-light_black"} />
          </div>
        </div>
        <div className="bg-white py-10 mt-10">
          <div className="container mx-auto">
            <div>
              <div className="uppercase text-2xl md:text-5xl text-black font-bold text-center pb-10">
                Some items you can send with Parcelra
              </div>
            </div>
            <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 justify-items-center text-black gap-10">
              <div className="flex flex-col gap-2 justify-center items-center lg:col-span-2">
                <div>
                  <img
                    src="/svg/archive-file-icon.svg"
                    className="w-28 h-28"
                    alt="document"
                  />
                </div>
                <div className="font-bold text-2xl uppercase">Documents</div>
                <div className="uppercase">
                  invitations, passports, contracts
                </div>
              </div>
              <div className="flex flex-col gap-2 justify-center items-center lg:col-span-2">
                <div>
                  <img
                    src="/svg/handle-with-care-symbol-icon.svg"
                    className="w-28 h-28"
                    alt="document"
                  />
                </div>
                <div className="font-bold text-2xl uppercase">Fragile</div>
                <div className="uppercase">glass, handmade, violin</div>
              </div>
              <div className="flex flex-col gap-2 justify-center items-center lg:col-span-2">
                <div>
                  <img
                    src="/svg/siren-icon.svg"
                    className="w-28 h-28"
                    alt="document"
                  />
                </div>
                <div className="font-bold text-2xl uppercase">very urgent</div>
                <div className="uppercase">a gift for a friend</div>
              </div>
              <div className="flex flex-col gap-2 justify-center items-center lg:col-span-3">
                <div>
                  <img
                    src="/svg/paw-icon.svg"
                    className="w-28 h-28"
                    alt="document"
                  />
                </div>
                <div className="font-bold text-2xl uppercase">Animals</div>
                <div className="uppercase">cats, dogs, parrots, gold fish</div>
              </div>
              <div className="flex flex-col gap-2 justify-center items-center lg:col-span-3">
                <div>
                  <img
                    src="/svg/food-and-drink-icon.svg"
                    className="w-28 h-28"
                    alt="document"
                  />
                </div>
                <div className="font-bold text-2xl uppercase">
                  food and snacks
                </div>
                <div className="uppercase">
                  saffron, tumeric, sweets, alcohol
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-purple py-10">
          <div className="container mx-auto pb-10">
            <div>
              <div className="uppercase text-2xl md:text-5xl text-black font-bold text-center pb-10">
                advantages using Parcelra
              </div>
            </div>
            <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center text-black gap-10">
              <div className="flex flex-col gap-2 justify-center items-center">
                <div>
                  <img
                    src="/svg/pending-clock-icon.svg"
                    className="w-28 h-28"
                    alt="document"
                  />
                </div>
                <div className="font-bold text-2xl uppercase pt-10">Speed</div>
                <div className="uppercase text-center">
                  The parcel will be delivered faster than other delivery
                  services, without intrusive paper bureaucracy
                </div>
              </div>
              <div className="flex flex-col gap-2 justify-center items-center">
                <div>
                  <img
                    src="/svg/shield-checkmark-black-icon.svg"
                    className="w-28 h-28"
                    alt="document"
                  />
                </div>
                <div className="font-bold text-2xl uppercase pt-10">
                  Reliablity
                </div>
                <div className="uppercase text-center">
                  The service brings together only verified travelers who will
                  definitely deliver your package
                </div>
              </div>
              <div className="flex flex-col gap-2 justify-center items-center">
                <div>
                  <img
                    src="/svg/saving-icon.svg"
                    className="w-28 h-28"
                    alt="document"
                  />
                </div>
                <div className="font-bold text-2xl uppercase pt-10">
                  benefits
                </div>
                <div className="uppercase text-center">
                  Pay the traveler less for delivery than other delivery
                  services
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {showCreateParcel && (
        <Modal
          Title={"Send Parcel"}
          handleClose={handleClose}
          bigModal={true}
          Content={
            <div>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-6 pt-4 px-6 text-left">
                  <div>
                    <label htmlFor="From" className="text-black">
                      From (<span className="text-red">Location</span>)
                    </label>
                    <input
                      name="from"
                      className={` border focus:border-red mt-1 p-4 rounded-lg focus:outline-none w-full border-light_black`}
                      type="text"
                      required
                      // onChange={(e) => {
                      //   setFrom(e.target.value);
                      // }}
                      // value={from}
                    />
                  </div>
                  <div>
                    <label htmlFor="to" className="text-black">
                    To (<span className="text-red">Destination</span>)
                    </label>
                    <input
                      name="to"
                      className={` border focus:border-red mt-1 p-4 rounded-lg focus:outline-none w-full border-light_black `}
                      type="text"
                      required
                      // onChange={(e) => {
                      //   setTo(e.target.value);
                      // }}
                      // value={to}
                    />
                  </div>
                  <div>
                    <label htmlFor="deliveryDate" className="text-black">
                    Required Delivery Date
                    </label>
                    <input
                      name="deliveryDate"
                      className={` border focus:border-red mt-1 p-4 rounded-lg focus:outline-none w-full border-light_black`}
                      type="date"
                      required
                      // onChange={(e) => {
                      //   setDeliveryDate(e.target.value);
                      // }}
                      // value={deliveryDate}
                    />
                  </div>
                  <div>
                    <label htmlFor="packageSize" className="text-black">
                    Package Size
                    </label>
                    <input
                      name="packageSize"
                      className={` border focus:border-red mt-1 p-4 rounded-lg focus:outline-none w-full border-light_black `}
                      type="text"
                      required
                      // onChange={(e) => {
                      //   setPackageSize(e.target.value);
                      // }}
                      // value={packageSize}
                    />
                  </div>
                  <div>
                    <label htmlFor="packageType" className="text-black">
                    Package Type
                    </label>
                    <input
                      name="packageType"
                      className={` border focus:border-red mt-1 p-4 rounded-lg focus:outline-none w-full border-light_black`}
                      type="text"
                      required
                      // onChange={(e) => {
                      //   setPackageType(e.target.value);
                      // }}
                      // value={packageType}
                    />
                  </div>
                  <div>
                    <label htmlFor="recipientName" className="text-black">
                    Recipient Name
                    </label>
                    <input
                      name="recipientName"
                      className={` border focus:border-red mt-1 p-4 rounded-lg focus:outline-none w-full border-light_black `}
                      type="text"
                      required
                      // onChange={(e) => {
                      //   setRecipientName(e.target.value);
                      // }}
                      // value={recipientName}
                    />
                  </div>
                  <div>
                    <label htmlFor="recipientNumber" className="text-black">
                    Recipient Number
                    </label>
                    <input
                      name="recipientName"
                      className={` border focus:border-red mt-1 p-4 rounded-lg focus:outline-none w-full border-light_black`}
                      type="text"
                      required
                      // onChange={(e) => {
                      //   setRecipientName(e.target.value);
                      // }}
                      // value={recipientName}
                    />
                  </div>
                  <div>
                    <label htmlFor="amount" className="text-black">
                      Calculated Payment Amount
                    </label>
                    <input
                      name="amount"
                      disabled
                      className={` border focus:border-red mt-1 p-4 rounded-lg focus:outline-none w-full border-red `}
                      type="text"
                      value={"700"}
                    />
                  </div>
                  <div className=" md:col-span-2">
                    <label htmlFor="message" className="">
                      Brief Description / Comments
                    </label>
                    <textarea
                      rows={4}
                      cols={51}
                      name="message"
                      className={` border border-light_black focus:border-red mt-1 p-4 rounded-lg focus:outline-none w-full bg-transparent`}
                      type="text"
                      required
                      // onChange={(e) => {
                      //   setMessage(e.target.value);
                      // }}
                      // value={message}
                    />
                  </div>
                  <div className=" md:col-span-2 flex flex-col md:flex-row justify-between md:items-center gap-4">
                    <div>Calculated Distance</div>
                  <div className="flex items-center justify-center">
                    <button type="button" onClick={e=>navigate('/parcel-content')} className="py-4 px-10 w-full lg:w-full rounded-lg text-black bg-green hover:bg-light_green font-bold">Submit</button>
                </div>
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
                    Form of travel
                    </label>
                    <input
                      name="arrivalTime"
                      className={` border focus:border-red mt-1 p-4 rounded-lg focus:outline-none w-full border-light_black`}
                      type="text"
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
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
