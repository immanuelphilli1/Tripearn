import * as React from "react"
import Layout from "../components/layout"
import ParcelCard from "../components/Card/parcelCard"
import Search from "../components/Search"
import { useState } from "react"
import Modal from "../components/Modal"
import { navigate } from "gatsby"
import { getAllCountries, getCountriesCities, getSearchParcels, handleGetAllParcels, handleGetDetails, handleOfferDelivery } from "../services/services"
import { useEffect } from "react"
import { Toaster, toast } from "sonner"
import Loader from "../components/Modal/loader"

const today = new Date()
today.setDate(today.getDate())
const minDate = today.toISOString().split("T")[0]

const ParcelPage = () => {
  const [filter, setFilter] = useState("")
  const [showAcceptParcel, setShowAcceptParcel] = useState(false);
  const [showParcelDetails, setShowParcelDetails] = useState(false);
  const [showParcelSubmit, setShowParcelSubmit] = useState(false);
  const [fromCountryData, setFromCountryData] = useState(null)
  const [fromCountry, setFromCountry] = useState("")
  const [parcelID, setParcelID] = useState()
  const [fromCity, setFromCity] = useState("")
  const [toCountry, setToCountry] = useState("")
  const [toCountryData, setToCountryData] = useState(null)
  const [toCity, setToCity] = useState("")
  const [countryData, setCountryData] = useState([])
  const [cityData, setCityData] = useState([])
  const [toCityData, setToCityData] = useState([])
  const [loading, setLoader] = useState(false);
  const [allParcelsData, setAllParcelsData] = useState([])
  const [showAllParcelsData, setShowAllParcelsData] = useState(true)
  const [searchData, setSearchData] = useState([])
  const [showSearchResults, setShowSearchResults] = useState(false)
  const [showError, setShowError] = useState(false)
  const [departureDate, setDepartureDate] = useState("")
  const [arrivalDate, setArrivalDate] = useState("")
  const [data, setData] = useState([]);
  const token = typeof window !== "undefined" && localStorage.getItem('token');

  useEffect(() => {
    getAllCountries().then(countries => {
      // console.log("from country:::::;", countries.data)
      setCountryData(countries.data)
    })
  }, [])
  useEffect(() => {
    handleGetAllParcels().then(parcels => {
      // console.log("from all parcels:::::;", parcels.data.data)
      setAllParcelsData(parcels.data.data)
    })
  }, [])

  // from handle Change
  function handleFromChange(event) {
    event.preventDefault()
    setShowError(false)
    setShowSearchResults(false)
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
    setShowError(false)
    setShowSearchResults(false)
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
  function handleSearch(e) {
    e.preventDefault()
    setLoader(true)
    toast.info("Processing!", { duration: 5000 })
    getSearchParcels(fromCity, toCity).then(details => {
      // console.log("see details::::::", details)
      if (details.status === false) {
        Object.keys(details.errors).forEach(key => {
          details.errors[key].forEach(error => {
            toast.error(error, { duration: 5000 });
          });
        });
        setShowError(true)
        setShowAllParcelsData(false)
        setShowSearchResults(false)
        setLoader(false)
      } else if (details.status === true && details.parcels.data.length !== 0) {
        setSearchData(details.parcels.data)
        setShowAllParcelsData(false)
        setShowSearchResults(true)
        setShowError(false)
        setLoader(false)
      } else if (details.status === true && details.parcels.data.length === 0) {
        toast.error("No Parcels currently available for this route!", { duration: 20000 })
        setShowError(true)
        setShowAllParcelsData(false)
        setLoader(false)
      } else {
        toast.error("Location not found!", { duration: 5000 })
        setLoader(false)
        setShowError(true)
      }
    })
  }

  function handleAllParcels(e) {
    e.preventDefault()
    setShowError(false)
    setShowAllParcelsData(true)

  }
  function handleSubmit(e) {
    e.preventDefault()
    setLoader(true)
    handleOfferDelivery(token, departureDate, arrivalDate, parcelID).then(details => {
      // console.log("see accept parcel details::::::", details)
      if (details.success === false) {
        Object.keys(details.errors).forEach(key => {
          details.errors[key].forEach(error => {
            toast.error(error, { duration: 5000 });
          });
        });
        setLoader(false)
      } else if (details.success === true) {
        setShowParcelSubmit(true);
        setShowAcceptParcel(false);
        setShowParcelDetails(false);
      } else {
        toast.error("Parcel cannot be selected by same user!", { duration: 5000 });
      }
    })
  }
  function handleAcceptParcel() {

    if (token === undefined || token === null || token === "" || !token) {
      navigate("/sign-in")

    }
    setShowAcceptParcel(true);
    setShowParcelSubmit(false);
    setShowParcelDetails(false);
  }
  function handleParcelDetails(id) {
    // console.log("yesssssss", id)
    if (token === undefined || token === null || token === "" || !token) {
      navigate("/sign-in")

    } else {
      handleGetDetails(id).then((res) => {
        // console.log("response : ", res)
        setData(res.data)
        setParcelID(id)
        setShowParcelDetails(true);
        setShowParcelSubmit(false);
        setShowAcceptParcel(false);
      })
    }



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
                <Search border={"border-white"} loading={loading}
                  handleFromChange={handleFromChange} handleSearch={handleSearch} handleToChange={handleToChange} fromCity={fromCity} fromCountry={fromCountry} countryData={countryData} setFromCity={setFromCity} setToCity={setToCity} cityData={cityData} toCountry={toCountry} toCity={toCity} toCityData={toCityData}
                />
              </div>
            </div>
          </div>
          {/* <div className="py-10">
            <div className="flex gap-4 pt-10 items-center justify-end">
              <div className="">Filter</div>
              <div className="w-full md:w-1/3">
                <select name="filter" placeholder="Filter" className={` border bg-white appearance-none text-black mt-1 p-4 rounded-lg focus:outline-none w-full border-white`} type="text" required onChange={e => { setFilter(e.target.value) }} value={filter}>
                  <option>Documets</option>
                </select>
              </div>
            </div>
          </div> */}
          {showAllParcelsData && (
            <>
              <div className="pt-10 md:pt-16 pb-4 text-center font-bold text-4xl">{allParcelsData.length > 0 ? "All Parcels" : <Loader />}</div>
              <div className="py-10 grid grid-cols-1 lg:grid-cols-2 gap-10 ">
                {allParcelsData.map((details, key) => (
                  <ParcelCard handleDetails={(e) => handleParcelDetails(details.id)}
                    key={key}
                    arrival={details.arrival_addr}
                    departure={details.departure_addr}
                    price={details.price}
                    id={details.id}
                  />
                  // console.log("al details:::::::::::::: ", details)
                ))}
              </div>
            </>
          )}
          {showError &&
            <div className="flex justify-center items-center flex-col gap-4 py-20 text-red text-2xl text-center"><
              div> No Parcels are currently available from {fromCity} to {toCity}</div>
              <div className="flex">
                <button onClick={handleAllParcels} type="button" className="py-3 px-6 w-full rounded-lg text-base font-bold text-black bg-green hover:bg-light_green \">See all parcels</button>
              </div>
            </div>
          }
          {showSearchResults && (
            <>
              <div className="pt-10 md:pt-16 pb-4 text-center font-bold text-4xl">Search Results</div>
              <div className="py-10 grid grid-cols-1 lg:grid-cols-2 gap-10 ">
                {searchData.map((details, key) => (
                  <ParcelCard handleDetails={(e) => handleParcelDetails(details.id)}
                    key={key}
                    arrival={details.arrival_addr}
                    departure={details.departure_addr}
                    price={details.price}
                    id={details.id}
                  />
                ))}
              </div>
            </>
          )}
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
                  <div>Destination: <span className="font-bold">{data.arrival_addr}</span></div>
                  <div>Primary Location: <span className="font-bold">{data.departure_addr}</span></div>
                  <div>Required Delivery Date: <span className="font-bold">{data.arrival_date}</span></div>
                  <div>Package Size: <span className="font-bold">{data.weight} kg</span></div>
                  <div>Package Type: <span className="font-bold">{data.size}</span></div>
                  <div>Amount: <span className="font-bold">$ {data.price}</span></div>
                </div>
                <div>{data.comment} </div>
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
                      min={minDate}
                      onChange={(e) => {
                        setDepartureDate(e.target.value);
                      }}
                      value={departureDate}
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
                      min={departureDate}
                      required
                      onChange={(e) => {
                        setArrivalDate(e.target.value);
                      }}
                      value={arrivalDate}
                    />
                  </div>
                  {/* <div>
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
                  </div> */}
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
              We have received your request to deliver parcel PD1020000{parcelID}. Your details provided
              are being processed! We will send you an email of parcel details
              once approval is completed. Approval takes less than 24 hours
            </div>
          }
        />
      )}
      <Toaster richColors />
    </Layout>
  )
}

export default ParcelPage

export const Head = () => <title>Parcels</title>
