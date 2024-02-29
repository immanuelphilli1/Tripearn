import * as React from "react";
import Layout from "../components/layout";
import ParcelCard from "../components/Card/parcelCard";
import Search from "../components/Search";
import { navigate } from "gatsby";
import { useState } from "react";
import Modal from "../components/Modal";
import { useEffect } from "react";
import { getAllCountries, getCountriesCities, handleParcelCreate } from "../services/services";
import Loader from "../components/Modal/loader";
import { Toaster, toast } from "sonner";
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
const today = new Date()
today.setDate(today.getDate() + 5)
const minDate = today.toISOString().split("T")[0]
const IndexPage = () => {
  const [showCreateParcel, setShowCreateParcel] = useState(false);
  const [showAcceptParcel, setShowAcceptParcel] = useState(false);
  const [showParcelDetails, setShowParcelDetails] = useState(false);
  const [showParcelSubmit, setShowParcelSubmit] = useState(false);
  const [deliveryDate, setDeliveryDate] = useState("")
  const [packageSize, setPackageSize] = useState("")
  const [packageType, setPackageType] = useState("")
  const [fromCountry, setFromCountry] = useState("")
  const [message, setMessage] = useState("")
  const [fromCountryData, setFromCountryData] = useState(null)
  const [fromCity, setFromCity] = useState("")
  const [toCountry, setToCountry] = useState("")
  const [toCountryData, setToCountryData] = useState(null)
  const [toCity, setToCity] = useState("")
  const [countryData, setCountryData] = useState([])
  const [cityData, setCityData] = useState([])
  const [toCityData, setToCityData] = useState([])
  const [loading, setLoader] = useState(false);
  const token = typeof window !== "undefined" && localStorage.getItem('token');
  useEffect(() => {
    getAllCountries().then(countries => {
      // console.log("from country:::::;", countries.data)
      setCountryData(countries.data)
    })
  }, [])
  //handle Show Create Parcel
  function handleCreateParcel() {
    setShowCreateParcel(true);
  }
// from handle Change
  function handleFromChange(event) {
    event.preventDefault()
    setFromCountry(event.target.value)
    setFromCity("")
    const country = countryData.find((country) => {
      if (country.name === event.target.value) {
        return true
      }
      return false
    })
    if (country) {
      setFromCountryData(country)
    }
    getCountriesCities(event.target.value).then(city => {
      // console.log("from country:::::;", city)
      if (city.success) {
        setCityData(city.data)
      }
    })
  }
  // to handle Change
  function handleToChange(event) {
    event.preventDefault()
    setToCountry(event.target.value)
    setToCity("")
    const country = countryData.find((country) => {
      if (country.name === event.target.value) {
        return true
      }
      return false
    })
    if (country) {
      setToCountryData(country)
    }
    getCountriesCities(event.target.value).then(city => {
      // console.log("from country:::::;", city)
      if (city.success) {
        setToCityData(city.data)
      }
      
    })
  }
// handle Parcel Creation
  let price = 0
  let distanceCheck = 0
  if (fromCountryData && toCountryData) {
    // console.log("from", fromCountryData, "to", toCountryData)
    let distanceCalculated = distance(
      parseFloat(fromCountryData.lat), parseFloat(toCountryData.lat), parseFloat(fromCountryData.long), parseFloat(toCountryData.long)
    )
    distanceCheck = Math.ceil(distanceCalculated)
    price = Math.ceil(0.01*distanceCheck)
  }

  function handleSubmitCreateParcel (e) {
e.preventDefault()
setLoader(true)
if (token === undefined || token === null || token === "" || !token) {
  navigate("/sign-in")
} else{
  handleParcelCreate(token,fromCity, toCity, deliveryDate, price, packageSize, packageType, message).then(res => {
    // console.log("response::::::::", res)
    if (res.success === false) {
      Object.keys(res.errors).forEach(key => {
        res.errors[key].forEach(error => {
          toast.error(error, { duration: 25000 });
        });
      });
      setLoader(false)
    } else if (res.success === true) {
      toast.success("Parcel Created!", {duration: 5000, position: 'top-right',})
      setTimeout(()=> {handleNavigate()}, 5000)
    } else {
      toast.error("We are facing technical issues. Kindly try again later!", {duration: 5000, position: 'top-right',})
      setLoader(false)
    }
  })
}
  }
  function handleNavigate(){
    navigate("/profile")
  }
  function distance(lat1,
    lat2, lon1, lon2) {

    // The math module contains a function
    // named toRadians which converts from
    // degrees to radians.
    lon1 = lon1 * Math.PI / 180;
    lon2 = lon2 * Math.PI / 180;
    lat1 = lat1 * Math.PI / 180;
    lat2 = lat2 * Math.PI / 180;

    // Haversine formula 
    let dlon = lon2 - lon1;
    let dlat = lat2 - lat1;
    let a = Math.pow(Math.sin(dlat / 2), 2)
      + Math.cos(lat1) * Math.cos(lat2)
      * Math.pow(Math.sin(dlon / 2), 2);

    let c = 2 * Math.asin(Math.sqrt(a));

    // Radius of earth in kilometers. Use 3956 
    // for miles
    let r = 6371;

    // calculate the result
    return (c * r);
  }





  function handleSubmit() {
    setShowParcelSubmit(true);
    setShowAcceptParcel(false);
    setShowCreateParcel(false);
    setShowParcelDetails(false);
  }
  function handleAcceptParcel() {
    
    if (token === undefined || token === null || token === "" || !token) {
      navigate("/sign-in")
    }
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
          <div className="flex gap-10 justify-between pb-3">
            <div className="flex flex-col gap-6 lg:gap-10 w-full lg:pr-2">
              <div className="bg-blue w-full rounded-lg">
                <img alt="landing" src="/img/landing.jpg" className="rounded-lg" />
              </div>
              <div>
                <div className="uppercase font-bold text-5xl md:text-[92px] lg:pt-4">
                  Parcelra
                </div>
                <div className="pt-4 md:text-xl">
                Have a parcel to send? Connect with a traveler and get it delivered.
                </div>
                <div className="flex flex-col md:flex-row gap-4 md:gap-10 pt-10">
                  <div className="lg:pr-3 w-full">
                  <button
                    onClick={handleCreateParcel}
                    type="button"
                    className="py-3 px-6 w-full rounded-lg text-black bg-green hover:bg-light_green uppercase font-bold"
                  >
                    send parcel
                  </button>
                  </div>
                  <div className="lg:pl-3 w-full">
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
            </div>
            <div className="w-full hidden rounded-lg bg-purple lg:block lg:pl-2">
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
              <div className="absolute top-1/2 bottom-0 left-1/2 -translate-y-1/2">
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
              Make your trip count! Help others by delivering parcels and earn extra cash along the way

              </div>
            </div>
            <div className="py-10 flex flex-col lg:flex-row gap-10  ">
              {/* <Carousel autoPlay={true} interval={3000} infiniteLoop={true}> */}
              <ParcelCard />
              <ParcelCard />
              {/* </Carousel> */}
            </div>
          </div>
        </div>
        <div className="container mx-auto pt-20 pb-40">
          <div className="uppercase text-2xl md:text-5xl font-bold text-center pb-10">
            See Parcelra parcels in your area
          </div>
          <div className="flex items-center justify-center pt-4">
                    <button type="button" onClick={e=>navigate('/parcel-content')} className="py-4 px-10 w-full lg:w-1/2 rounded-lg text-black bg-green hover:bg-light_green font-bold">Search Now!</button>
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
        <div className="py-1 bg-white opacity-50">
          <img alt="bg" src="https://images.unsplash.com/photo-1522199873717-bc67b1a5e32b?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="" />
        </div>
        <div className="bg-purple py-10">
          <div className="container mx-auto py-10">
            <div>
              <div className="uppercase text-2xl md:text-5xl text- font-bold text-center pb-10">
                advantages using Parcelra
              </div>
            </div>
            <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center text- gap-10">
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
              <div className="pb-2">Kindly <a className="font-bold text-red hover:underline" href="/sign-in">Sign In</a> before you complete this form</div>
              <form method="POST" onSubmit={handleSubmitCreateParcel} action="/">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-6 pt-4 px-6 text-left">
                  <div className="text-black">
                    <label htmlFor="fromCountry" className="">
                      From (<span className="text-blue">Current Country</span>)
                    </label>
                    <input
                      name="fromCountry"
                      className={` border focus:border-blue mt-1 p-4 rounded-lg focus:outline-none w-full border-light_black `}
                      type="text"
                      list="fromCountryList"
                      required
                      onChange={handleFromChange}
                      value={fromCountry}
                    />
                    <datalist id="fromCountryList">
                      {countryData.map(country => {

                        return <option>{country.name}</option>
                      })}
                    </datalist>
                  </div>
                  <div>
                    <label htmlFor="fromCity" className="text-black">
                      From (<span className="text-blue">Current City</span>)
                    </label>
                    <input
                      name="fromCity"
                      className={` border focus:border-blue mt-1 p-4 rounded-lg focus:outline-none w-full border-light_black `}
                      type="text"
                      list="fromCityList"
                      required
                      onChange={(e) => {
                        setFromCity(e.target.value);
                      }}
                      value={fromCity}
                    />
                    <datalist id="fromCityList">
                      {cityData.map(city => {

                        return <option>{city}</option>
                      })}
                    </datalist>
                  </div>
                  <div className="text-black">
                    <label htmlFor="toCountry" className="">
                      To (<span className="text-blue">Destination Country</span>)
                    </label>
                    <input
                      name="toCountry"
                      className={` border focus:border-blue mt-1 p-4 rounded-lg focus:outline-none w-full border-light_black `}
                      type="text"
                      list="toCountryList"
                      required
                      onChange={handleToChange}
                      value={toCountry}
                    />
                    <datalist id="toCountryList">
                      {countryData.map(country => {

                        return <option>{country.name}</option>
                      })}
                    </datalist>
                  </div>
                  <div>
                    <label htmlFor="toCity" className="text-black">
                      To (<span className="text-blue">Destination City</span>)
                    </label>
                    <input
                      name="toCity"
                      className={` border focus:border-blue mt-1 p-4 rounded-lg focus:outline-none w-full border-light_black `}
                      type="text"
                      required
                      list="toCityList"
                      onChange={(e) => {
                        setToCity(e.target.value);
                      }}
                      value={toCity}
                    />
                    <datalist id="toCityList">
                      {toCityData.map(city => {

                        return <option>{city}</option>
                      })}
                    </datalist>
                  </div>
                  <div>
                    <label htmlFor="deliveryDate" className="text-black">
                      Required Delivery Date
                    </label>
                    <input
                      name="deliveryDate"
                      className={` border focus:border-blue mt-1 p-4 rounded-lg focus:outline-none w-full border-light_black`}
                      type="date"
                      min={minDate}
                      required
                    onChange={(e) => {
                      setDeliveryDate(e.target.value);
                    }}
                    value={deliveryDate}
                    />
                  </div>
                  <div>
                    <label htmlFor="packageSize" className="text-black">
                      Package Size
                    </label>
                    <select name="packageSize" required placeholder="Package Size" className={` border focus:border-blue mt-1 p-4 rounded-lg focus:outline-none w-full border-light_black`} type="text"
                     onChange={e => { setPackageSize(e.target.value) }} value={packageSize}
                    >
                      <option value="" selected disabled>Select size</option>
                      <option value="5">1-5 Kg</option>
                      <option value="10">5-10 Kg</option>
                      <option value="15">10-15 Kg</option>
                      <option value="20">15-20 Kg</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="packageType" className="text-black">
                      Package Type
                    </label>
                    <select name="packageType" required placeholder="Package Type" className={` border focus:border-blue mt-1 p-4 rounded-lg focus:outline-none w-full border-light_black`} type="text"
                     onChange={e => { setPackageType(e.target.value) }} value={packageType}
                    >
                      <option value="" selected disabled>Select type</option>
                      <option value="food">Food</option>
                      <option value="documents">Documents</option>
                      <option value="fragile items">Fragile goods</option>
                      <option value="personal items">Personal items</option>
                      <option value="others">Others</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="amount" className="text-black">
                      Calculated Payment Amount ($)
                    </label>
                    <input
                      name="amount"
                      disabled
                      className={` border focus:border-blue mt-1 p-4 rounded-lg focus:outline-none w-full border-blue `}
                      type="text"
                      value={`$ `+price}
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
                      className={` border border-light_black focus:border-blue mt-1 p-4 rounded-lg focus:outline-none w-full bg-transparent`}
                      type="text"
                      required
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    value={message}
                    />
                  </div>
                  <div className=" md:col-span-2 flex flex-col md:flex-row justify-between md:items-center gap-4">
                    <div>Calculated Distance: <span className="text-red">{distanceCheck} km</span></div>
                    <div className="flex items-center justify-center">
                      <button disabled={loading === true} type="submit"  className="py-4 px-10 w-full lg:w-full rounded-lg text-black bg-green hover:bg-light_green font-bold">{loading && (<Loader />)}Submit</button>
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
      <Toaster richColors />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
