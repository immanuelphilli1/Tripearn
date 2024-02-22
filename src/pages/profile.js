import * as React from "react"
import Layout from "../components/layout"
import { useState } from "react"
import ProfileCard from "../components/Card/profileCard"
import Modal from "../components/Modal"
import { useEffect } from "react"
import { navigate } from "gatsby"
import { getAllCountries, getCountriesCodes, handleGetDetails, handleGetProfile, handleNumberUpdate } from "../services/services"
import { Toaster, toast } from "sonner"

const ProfilePage = () => {
  const [filter, setFilter] = useState("all")
  const [showUpdate, setShowUpdate] = useState(false);
  const [showAcceptParcel, setShowAcceptParcel] = useState(false);
  const [showParcelDetails, setShowParcelDetails] = useState(false);
  const [fromCountry, setFromCountry] = useState("")
  const [phoneCode, setPhoneCode] = useState("")
  const [loading, setLoader] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("")
  const [fromCountryData, setFromCountryData] = useState(null)
  const [showParcelSubmit, setShowParcelSubmit] = useState(false);
  const [profileUserData, setProfileUserData] = useState([])
  const [countryData, setCountryData] = useState([])
  const [profileParcelData, setProfileParcelData] = useState([])
  const [data, setData] = useState([]);
  const token = typeof window !== "undefined" && localStorage.getItem('token');

  
  useEffect(() => {
    getAllCountries().then(countries => {
      console.log("from country:::::;", countries.data)
      setCountryData(countries.data)
    })
  }, [])

  function handleFromChange(event) {
    event.preventDefault()
    setFromCountry(event.target.value)
    setPhoneCode("")
    const country = countryData.find((country) => {
      if (country.name === event.target.value) {
        return true
      }
      return false
    })
    if (country) {
      setFromCountryData(country)
    }
    getCountriesCodes(event.target.value).then(code => {
      console.log("from country code:::::;", code)
      if (code.success) {
        setPhoneCode(code.data.dial_code)
      }
    })
  }

  function handleUpdateNumber (e) {
e.preventDefault()
setLoader(true)
toast.info("processing!", {duration: 5000})
let mobileNumber = phoneCode+phoneNumber
handleNumberUpdate(token, mobileNumber).then(update => {
  console.log("update status::::::::", update)
  if (update.success === false) {
    Object.keys(update.errors).forEach(key => {
      update.errors[key].forEach(error => {
        toast.error(error, { duration: 5000 });
      });
    });
    setLoader(false)
  } else if (update.success === true ) {
    toast.success("Number updated successfully!", { duration: 5000 })
    setTimeout(()=> {window.location.reload()}, 5000)
    setLoader(false)
  } else {
    toast.error("We are having technical issues, check back in a while", { duration: 5000 })
    setLoader(false)
  }
})
  }

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
  function handleParcelDetails(id) {
    console.log("yesssssss",id)
    if (token === undefined || token === null || token === "" || !token) {
      navigate("/sign-in")

    } else {
    handleGetDetails(id).then((res) => {
      console.log("response : ",res)
      setData(res.data)
    setShowParcelDetails(true);
    setShowParcelSubmit(false);
    setShowAcceptParcel(false);
  })
}
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

  useEffect(() => {
    // Retrieve data from localStorage when the component mounts
    if (token === undefined || token === null || token === "" || !token) {
      navigate("/sign-in")

    }
  }, []);
  useEffect(() => {
    handleGetProfile(token).then(res => {
      console.log("response profile::::::::", res.data) 
      setProfileUserData(res.user)
      setProfileParcelData(res.data)
    })
  }, []);

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
                  <div>{profileUserData.name}{" "}{profileUserData.surname}</div>
                  <div>{profileUserData.phone}</div>
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
                <select name="filter" placeholder="Filter" className={` border bg-white  text-black mt-1 p-4 rounded-lg focus:outline-none w-full border-white`} type="text" required onChange={e => { setFilter(e.target.value) }} value={filter}>
                  <option value="all">All</option>
                  <option value="pending">Pending</option>
                  <option value="active">Active</option>
                  <option value="awaiting payment">Awaiting Payment</option>
                  <option value="inactive">Inactive</option>
                  <option value="closed">Closed</option>
                </select>
              </div>
            </div>
          </div>
          {filter === "all" && profileParcelData.length > 0 ? (
          <div className="py-10 grid grid-cols-1 gap-10 ">
          {profileParcelData.map(profile => (
            <ProfileCard 
            arrival={profile.arrival_addr} 
            date={profile.arrival_date}
                departure={profile.departure_addr}
                price={profile.price}
                status={profile.status}
                id={profile.id}
                packageID={profile.id}
            handleDetails={(e) => handleParcelDetails(profile.id)}  />
            ))}
          </div>
):  filter === "all" && profileParcelData.length < 0 ?(<div className="flex justify-center items-center md:text-xl"> No Parcels available for you! 😢</div>) : null}

{ filter === "pending" && profileParcelData.filter((profile) => profile.status === "pending")
        .length > 0 ? (
  <div className="py-10 grid grid-cols-1 gap-10 ">
  {profileParcelData.filter(profile => profile.status === "pending").map(profile => (
    <ProfileCard 
    arrival={profile.arrival_addr} 
    date={profile.arrival_date}
        departure={profile.departure_addr}
        price={profile.price}
        status={profile.status}
        id={profile.id}
        packageID={profile.id}
    handleDetails={(e) => handleParcelDetails(profile.id)}  />
    ))}
  </div>
) : (filter === "pending" && profileParcelData.filter((profile) => profile.status === "pending")
.length < 0 ) || (filter === "pending" && profileParcelData.filter((profile) => profile.status === "pending")
!=="") ?(<div className="flex justify-center items-center md:text-xl"> No Pending Parcels available for you! 😢</div>) : null}


{ filter === "active" && profileParcelData.filter((profile) => profile.status === "active")
        .length > 0 ? (
  <div className="py-10 grid grid-cols-1 gap-10 ">
  {profileParcelData.filter(profile => profile.status === "active").map(profile => (
    <ProfileCard 
    arrival={profile.arrival_addr} 
    date={profile.arrival_date}
        departure={profile.departure_addr}
        price={profile.price}
        status={profile.status}
        id={profile.id}
        packageID={profile.id}
    handleDetails={(e) => handleParcelDetails(profile.id)}  />
    ))}
  </div>
) : (filter === "active" && profileParcelData.filter((profile) => profile.status === "active")
.length < 0 ) || (filter === "active" && profileParcelData.filter((profile) => profile.status === "active")
!=="") ?(<div className="flex justify-center items-center md:text-xl"> No active Parcels available for you! 😢</div>) : null}


{ filter === "awaiting payment" && profileParcelData.filter((profile) => profile.status === "awaiting payment")
        .length > 0 ? (
  <div className="py-10 grid grid-cols-1 gap-10 ">
  {profileParcelData.filter(profile => profile.status === "awaiting payment").map(profile => (
    <ProfileCard 
    arrival={profile.arrival_addr} 
    date={profile.arrival_date}
        departure={profile.departure_addr}
        price={profile.price}
        status={profile.status}
        id={profile.id}
        packageID={profile.id}
    handleDetails={(e) => handleParcelDetails(profile.id)}  />
    ))}
  </div>
) : (filter === "awaiting payment" && profileParcelData.filter((profile) => profile.status === "awaiting payment")
.length < 0 ) || (filter === "awaiting payment" && profileParcelData.filter((profile) => profile.status === "awaiting payment")
!=="") ?(<div className="flex justify-center items-center md:text-xl"> No Parcels awaiting payments available for you! 😢</div>) : null}


{ filter === "inactive" && profileParcelData.filter((profile) => profile.status === "inactive")
        .length > 0 ? (
  <div className="py-10 grid grid-cols-1 gap-10 ">
  {profileParcelData.filter(profile => profile.status === "inactive").map(profile => (
    <ProfileCard 
    arrival={profile.arrival_addr} 
    date={profile.arrival_date}
        departure={profile.departure_addr}
        price={profile.price}
        status={profile.status}
        id={profile.id}
        packageID={profile.id}
    handleDetails={(e) => handleParcelDetails(profile.id)}  />
    ))}
  </div>
) : (filter === "inactive" && profileParcelData.filter((profile) => profile.status === "inactive")
.length < 0 ) || (filter === "inactive" && profileParcelData.filter((profile) => profile.status === "inactive")
!=="") ?(<div className="flex justify-center items-center md:text-xl"> No Inactive Parcels available for you! 😢</div>) : null}


{ filter === "closed" && profileParcelData.filter((profile) => profile.status === "closed")
        .length > 0 ? (
  <div className="py-10 grid grid-cols-1 gap-10 ">
  {profileParcelData.filter(profile => profile.status === "closed").map(profile => (
    <ProfileCard 
    arrival={profile.arrival_addr} 
    date={profile.arrival_date}
        departure={profile.departure_addr}
        price={profile.price}
        status={profile.status}
        id={profile.id}
        packageID={profile.id}
    handleDetails={(e) => handleParcelDetails(profile.id)}  />
    ))}
  </div>
) : (filter === "closed" && profileParcelData.filter((profile) => profile.status === "closed")
.length < 0 ) || (filter === "closed" && profileParcelData.filter((profile) => profile.status === "closed")
!=="") ?(<div className="flex justify-center items-center md:text-xl"> No Closed Parcels available for you! 😢</div>) : null}
        </div>
      </main>
      {showUpdate && (
        <Modal
          handleClose={handleClose} 
          Title={"Update Number"}
          Content={
            <div>
              <form method="POST" onSubmit={handleUpdateNumber} action="/">
                <div className="grid grid-cols-1 gap-6 md:gap-6 pt-4 px-6 text-left">
                  <div className="">
                    <label htmlFor="fromCountry" className="text-white">
                      From (<span className="">Current Country</span>)
                    </label>
                    <input
                      name="fromCountry"
                      className={` border focus:border-purple mt-1 p-4 rounded-lg focus:outline-none w-full border-light_black `}
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
                    <label htmlFor="arrivalDate" className="text-black">
                    Phone Number
                    </label>
                    <div className="flex items-center border focus:border-red mt-1 p-4 rounded-lg focus:outline-none w-full border-light_black ">
                      {phoneCode}
                    <input
                      name="arrivalDate"
                      className={` focus:outline-none w-full`}
                      type="text"
                      required
                      onChange={(e) => {
                        setPhoneNumber(e.target.value);
                      }}
                      value={phoneNumber}
                    />
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <button disabled={loading === true} type="submit" className="py-4 px-10 w-full lg:w-full rounded-lg text-black bg-green hover:bg-light_green font-bold">Submit</button>
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
                <div>Destination: <span className="font-bold">{data.arrival_addr}</span></div>
                  <div>Primary Location: <span className="font-bold">{data.departure_addr}</span></div>
                  <div>Required Delivery Date: <span className="font-bold">{data.arrival_date}</span></div>
                  <div>Package Size: <span className="font-bold">{data.weight}</span></div>
                  <div>Package Type: <span className="font-bold">{data.size}</span></div>
                  <div>Amount: <span className="font-bold">$ {data.price}</span></div>
                </div>
                <div>{data.comment} </div>
                {/* if status is offer delivery, show this button */}
                {/* <div className="w-full">
                <button
                    onClick={handleAcceptParcel}
                    type="button"
                    className="py-3 px-6 w-full rounded-lg text-black bg-green hover:bg-light_green font-bold"
                  >
                    Request Payment
                  </button>
                </div> */}
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
      <Toaster richColors />
    </Layout>
  )
}

export default ProfilePage

export const Head = () => <title>Profile</title>
