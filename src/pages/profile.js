import * as React from "react"
import Layout from "../components/layout"
import { useState } from "react"
import ProfileCard from "../components/Card/profileCard"
import Modal from "../components/Modal"
import { useEffect } from "react"
import { navigate } from "gatsby"
import { getAllCountries, getCountriesCodes, handleGetDetails, handleGetProfile, handleNumberUpdate, handleGetDelivery, handleReceiptConfirmSender, handleReceiptConfirmTraveler } from "../services/services"
import { Toaster, toast } from "sonner"
import Loader from "../components/Modal/loader"
import StarRating from "../components/starRating"

const ProfilePage = () => {
  const [filter, setFilter] = useState("all")
  const [showUpdate, setShowUpdate] = useState(false);
  const [showAcceptParcel, setShowAcceptParcel] = useState(false);
  const [showParcelDetails, setShowParcelDetails] = useState(false);
  const [showActiveStats, setShowActiveStats] = useState(false);
  const [fromCountry, setFromCountry] = useState("")
  const [phoneCode, setPhoneCode] = useState("")
  const [activeTab, setActiveTab] = useState("parcels")
  const [loading, setLoader] = useState(false);
  const [showSuccessfulDelivery, setShowSuccessfulDelivery] = useState(false)
  const [showSuccessfulTransitDelivery, setShowSuccessfulTransitDelivery] = useState(false)
  const [showFailedDelivery, setShowFailedDelivery] = useState(false)
  const [fullLoader, setFullLoader] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("")
  const [fromCountryData, setFromCountryData] = useState(null)
  const [showParcelSubmit, setShowParcelSubmit] = useState(false);
  const [profileUserData, setProfileUserData] = useState([])
  const [countryData, setCountryData] = useState([])
  const [profileParcelData, setProfileParcelData] = useState([])
  const [deliveryData, setDeliveryData] = useState([])
  const [data, setData] = useState([]);
  const token = typeof window !== "undefined" && localStorage.getItem('token');

  
  useEffect(() => {
    getAllCountries().then(countries => {
      // console.log("from country:::::;", countries.data)
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
      // console.log("from country code:::::;", code)
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
  // console.log("update status::::::::", update)
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

  function handleActiveTabParcels() {
    setActiveTab("parcels");
  }
  function handleActiveTabDeliveries() {
    setActiveTab("deliveries");
  }

  function handleSubmit() {
    setShowParcelSubmit(true);
    setShowAcceptParcel(false);
    setShowParcelDetails(false);
    setShowActiveStats(false);
  }
  function handleAcceptParcel() {
    setShowAcceptParcel(true);
    setShowParcelSubmit(false);
    setShowParcelDetails(false);
    setShowActiveStats(false);
  }
  function handleParcelDetails(id) {
    // console.log("yesssssss",id)
    if (token === undefined || token === null || token === "" || !token) {
      navigate("/sign-in")

    } else {
    handleGetDetails(id).then((res) => {
      // console.log("response : ",res)
      setData(res.data)
    setShowParcelDetails(true);
    setShowParcelSubmit(false);
    setShowAcceptParcel(false);
    setShowActiveStats(false);
  })
}
  }

  function handleActiveStatus(id) {
    // console.log("yesssssss",id)
    if (token === undefined || token === null || token === "" || !token) {
      navigate("/sign-in")

    } else {
    handleGetDetails(id).then((res) => {
      // console.log("response : ",res)
      setData(res.data)
      setShowActiveStats(true);
    setShowParcelDetails(false);
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
    setShowActiveStats(false)
    setShowFailedDelivery(false);
    setShowSuccessfulDelivery(false);
    setShowSuccessfulTransitDelivery(false);
  }
  function handleSuccessfulDelivery(e) {
    if(data.status === "active") {
      handleReceiptConfirmSender(token, data.id).then(update => {
        console.log("update status receipt yes::::::::", update)
        if (update.success === false) {
          Object.keys(update.errors).forEach(key => {
            update.errors[key].forEach(error => {
              toast.error(error, { duration: 5000 });
            });
          });
          setLoader(false)
        } else if (update.success === true ) {
          setShowSuccessfulDelivery(true);
    setShowSuccessfulTransitDelivery(false)
          setLoader(false)
        } else {
          toast.error("We are having technical issues, check back in a while", { duration: 5000 })
          setLoader(false)
        }
      })
    
    } else {
      handleReceiptConfirmTraveler(token, data.id).then(update => {
        console.log("update status receipt yes::::::::", update)
        if (update.success === false) {
          Object.keys(update.errors).forEach(key => {
            update.errors[key].forEach(error => {
              toast.error(error, { duration: 5000 });
            });
          });
          setLoader(false)
        } else if (update.success === true ) {
          setShowSuccessfulTransitDelivery(true);
      setShowSuccessfulDelivery(false);
          setLoader(false)
        } else {
          toast.error("We are having technical issues, check back in a while", { duration: 5000 })
          setLoader(false)
        }
      })
      
    }
    setShowFailedDelivery(false);
    setShowUpdate(false);
    setShowParcelSubmit(false);
    setShowAcceptParcel(false);
    setShowParcelDetails(false);
    setShowActiveStats(false)
  }
  function handleFailedDelivery() {
    setShowFailedDelivery(true);
    setShowSuccessfulDelivery(false);
    setShowUpdate(false);
    setShowParcelSubmit(false);
    setShowAcceptParcel(false);
    setShowParcelDetails(false);
    setShowActiveStats(false)
  }

  useEffect(() => {
    // Retrieve data from localStorage when the component mounts
    if (token === undefined || token === null || token === "" || !token) {
      navigate("/sign-in")

    }
  }, []);
  useEffect(() => {
    handleGetProfile(token).then(res => {
      // console.log("response profile::::::::", res.data) 
      setProfileUserData(res.user)
      setProfileParcelData(res.data)
    })
  }, []);
  useEffect(() => {
    handleGetDelivery(token).then(res => {
      if (res.success) {
        setFullLoader(false)
      }
      console.log("response delivery::::::::", res.data.data) 
      setDeliveryData(res.data.data)
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
          <div className="uppercase pt-10 text-2xl md:text-4xl font-bold text-center">parcel activity</div>
          {!fullLoader && <div>
          <div className="pb-10">
            
            <div className="py-10 flex items-center justify-center gap-5">
              <button onClick={handleActiveTabParcels} className={`border-2 rounded-full px-6 py-1 text-lg  ${activeTab === "parcels" ? "bg-blue":"hover:bg-white hover:text-black bg-transparent"} `}>Parcels</button>
              <button onClick={handleActiveTabDeliveries} className={`border-2 rounded-full px-6 py-1 text-lg  ${activeTab === "deliveries" ? "bg-blue":"hover:bg-white hover:text-black bg-transparent"} `}>Deliveries</button>
            </div>
            <div className="flex gap-4 pt-10 items-center justify-end">
              <div className="">Filter</div>
              <div className="w-full md:w-1/3">
                <select name="filter" placeholder="Filter" className={` border bg-white  text-black mt-1 p-4 rounded-lg focus:outline-none w-full border-white`} type="text" required onChange={e => { setFilter(e.target.value) }} value={filter}>
                  <option value="all">All</option>
                  <option value="pending">Pending</option>
                  <option value={activeTab === "parcels" ? "active" : "transit"}>{activeTab === "parcels" ? "Active" : "Transit"}</option>
                  <option value="inactive">Inactive</option>
                  <option value="closed">Closed</option>
                </select>
              </div>
            </div>
          </div>
          {activeTab === "parcels" && 
          <div>
          {filter === "all" && profileParcelData.length > 0 ? (
          <div className="py-10 grid grid-cols-1 gap-10 ">
          {profileParcelData.map((profile, key) => (
            <ProfileCard 
            key={key}
            arrival={profile.arrival_addr} 
            date={profile.arrival_date}
                departure={profile.departure_addr}
                price={profile.price}
                status={profile.status}
                id={profile.id}
                packageID={profile.id}
                handleActiveStatus={(e) => handleActiveStatus(profile.id)}
            handleDetails={(e) => handleParcelDetails(profile.id)}  />
            ))}
          </div>
):  (filter === "all" && profileParcelData.length < 0 ) || filter === "all" && profileParcelData.length !=="" ?(<div className="flex justify-center items-center md:text-xl"> No Parcels available for you! 😢</div>) : null}

{ filter === "pending" && profileParcelData.filter((profile) => profile.status === "pending")
        .length > 0 ? (
  <div className="py-10 grid grid-cols-1 gap-10 ">
  {profileParcelData.filter(profile => profile.status === "pending").map((profile, key) => (
    <ProfileCard 
    key={key}
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
  {profileParcelData.filter(profile => profile.status === "active").map((profile, key) => (
    <ProfileCard 
    key={key}
    arrival={profile.arrival_addr} 
    date={profile.arrival_date}
        departure={profile.departure_addr}
        price={profile.price}
        status={profile.status}
        id={profile.id}
        packageID={profile.id}
        handleActiveStatus={(e) => handleActiveStatus(profile.id)}
    handleDetails={(e) => handleParcelDetails(profile.id)}  />
    ))}
  </div>
) : (filter === "active" && profileParcelData.filter((profile) => profile.status === "active")
.length < 0 ) || (filter === "active" && profileParcelData.filter((profile) => profile.status === "active")
!=="") ?(<div className="flex justify-center items-center md:text-xl"> No active Parcels available for you! 😢</div>) : null}


{/* { filter === "awaiting payment" && profileParcelData.filter((profile) => profile.status === "awaiting payment")
        .length > 0 ? (
  <div className="py-10 grid grid-cols-1 gap-10 ">
  {profileParcelData.filter(profile => profile.status === "awaiting payment").map((profile, key) => (
    <ProfileCard 
    key={key}
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
!=="") ?(<div className="flex justify-center items-center md:text-xl"> No Parcels awaiting payments available for you! 😢</div>) : null} */}


{ filter === "inactive" && profileParcelData.filter((profile) => profile.status === "inactive")
        .length > 0 ? (
  <div className="py-10 grid grid-cols-1 gap-10 ">
  {profileParcelData.filter(profile => profile.status === "inactive").map((profile, key) => (
    <ProfileCard 
    key={key}
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
  {profileParcelData.filter(profile => profile.status === "closed").map((profile, key) => (
    <ProfileCard 
    key={key}
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
}
{activeTab === "deliveries" && 
          <div>
          {filter === "all" && deliveryData.length > 0 ? (
          <div className="py-10 grid grid-cols-1 gap-10 ">
          {deliveryData.map((profile, key) => (
            <ProfileCard 
            cardStyle="bg-white text-light_black"
            key={key}
            arrival={profile.parcel.arrival_addr} 
            date={profile.arrival_date}
                departure={profile.parcel.departure_addr}
                price={profile.parcel.price}
                status={profile.status}
                id={profile.id}
                packageID={profile.parcel.id}
                handleActiveStatus={(e) => handleActiveStatus(profile.id)}
            handleDetails={(e) => handleParcelDetails(profile.parcel.id)}  />
            ))}
          </div>
):  (filter === "all" && deliveryData.length < 0 ) || filter === "all" && deliveryData.length !=="" ?(<div className="flex justify-center items-center md:text-xl"> No Parcel Delivery available for you! 😢</div>) : null}

{ filter === "pending" && deliveryData.filter((profile) => profile.status === "pending")
        .length > 0 ? (
  <div className="py-10 grid grid-cols-1 gap-10 ">
  {deliveryData.filter(profile => profile.status === "pending").map((profile, key) => (
    <ProfileCard 
    cardStyle="bg-white text-light_black"
    key={key}
    arrival={profile.parcel.arrival_addr} 
    date={profile.arrival_date}
        departure={profile.parcel.departure_addr}
        price={profile.parcel.price}
        status={profile.status}
        id={profile.id}
        packageID={profile.parcel.id}
    handleDetails={(e) => handleParcelDetails(profile.parcel.id)}  />
    ))}
  </div>
) : (filter === "pending" && deliveryData.filter((profile) => profile.status === "pending")
.length < 0 ) || (filter === "pending" && deliveryData.filter((profile) => profile.status === "pending")
!=="") ?(<div className="flex justify-center items-center md:text-xl"> No Pending Parcel Delivery available for you! 😢</div>) : null}

{ filter === "transit" && deliveryData.filter((profile) => profile.status === "transit")
        .length > 0 ? (
  <div className="py-10 grid grid-cols-1 gap-10 ">
  {deliveryData.filter(profile => profile.status === "transit").map((profile, key) => (
    <ProfileCard 
    cardStyle="bg-white text-light_black"
    key={key}
    arrival={profile.parcel.arrival_addr} 
    date={profile.arrival_date}
        departure={profile.parcel.departure_addr}
        price={profile.parcel.price}
        status={profile.status}
        id={profile.id}
        packageID={profile.parcel.id}
        handleActiveStatus={(e) => handleActiveStatus(profile.id)}
    handleDetails={(e) => handleParcelDetails(profile.parcel.id)}  />
    ))}
  </div>
) : (filter === "transit" && deliveryData.filter((profile) => profile.status === "transit")
.length < 0 ) || (filter === "transit" && deliveryData.filter((profile) => profile.status === "transit")
!=="") ?(<div className="flex justify-center items-center md:text-xl"> No Parcel in transit for you! 😢</div>) : null}

{ filter === "active" && deliveryData.filter((profile) => profile.status === "active")
        .length > 0 ? (
  <div className="py-10 grid grid-cols-1 gap-10 ">
  {deliveryData.filter(profile => profile.status === "active").map((profile, key) => (
    <ProfileCard 
    cardStyle="bg-white text-light_black"
    key={key}
    arrival={profile.parcel.arrival_addr} 
    date={profile.arrival_date}
        departure={profile.parcel.departure_addr}
        price={profile.parcel.price}
        status={profile.status}
        id={profile.id}
        packageID={profile.parcel.id}
        handleActiveStatus={(e) => handleActiveStatus(profile.id)}
    handleDetails={(e) => handleParcelDetails(profile.parcel.id)}  />
    ))}
  </div>
) : (filter === "active" && deliveryData.filter((profile) => profile.status === "active")
.length < 0 ) || (filter === "active" && deliveryData.filter((profile) => profile.status === "active")
!=="") ?(<div className="flex justify-center items-center md:text-xl"> No active Parcel Delivery available for you! 😢</div>) : null}


{ filter === "inactive" && deliveryData.filter((profile) => profile.status === "inactive")
        .length > 0 ? (
  <div className="py-10 grid grid-cols-1 gap-10 ">
  {deliveryData.filter(profile => profile.status === "inactive").map((profile, key) => (
    <ProfileCard 
    cardStyle="bg-white text-light_black"
    key={key}
    arrival={profile.parcel.arrival_addr} 
    date={profile.arrival_date}
        departure={profile.parcel.departure_addr}
        price={profile.parcel.price}
        status={profile.status}
        id={profile.id}
        packageID={profile.parcel.id}
    handleDetails={(e) => handleParcelDetails(profile.parcel.id)}  />
    ))}
  </div>
) : (filter === "inactive" && deliveryData.filter((profile) => profile.status === "inactive")
.length < 0 ) || (filter === "inactive" && deliveryData.filter((profile) => profile.status === "inactive")
!=="") ?(<div className="flex justify-center items-center md:text-xl"> No Inactive Parcel Delivery available for you! 😢</div>) : null}


{ filter === "closed" && deliveryData.filter((profile) => profile.status === "closed")
        .length > 0 ? (
  <div className="py-10 grid grid-cols-1 gap-10 ">
  {deliveryData.filter(profile => profile.status === "closed").map((profile, key) => (
    <ProfileCard 
    cardStyle="bg-white text-light_black"
    key={key}
    arrival={profile.parcel.arrival_addr} 
    date={profile.arrival_date}
        departure={profile.parcel.departure_addr}
        price={profile.parcel.price}
        status={profile.status}
        id={profile.id}
        packageID={profile.parcel.id}
    handleDetails={(e) => handleParcelDetails(profile.parcel.id)}  />
    ))}
  </div>
) : (filter === "closed" && deliveryData.filter((profile) => profile.status === "closed")
.length < 0 ) || (filter === "closed" && deliveryData.filter((profile) => profile.status === "closed")
!=="") ?(<div className="flex justify-center items-center md:text-xl"> No Closed Parcel Delivery available for you! 😢</div>) : null}
        </div>
}</div>}
        </div>
        <div className="flex justify-center items-center pt-10">
        {fullLoader && <Loader clasStyle="w-20 h-20 text-blue" />}
        {loading && <Loader clasStyle="w-10 h-10" />}
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
                    <label htmlFor="fromCountry" className="text-black">
                      Current Country
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
                      {countryData.map((country, key) => {

                        return <option key={key}>{country.name}</option>
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
                  <div>Package Size: <span className="font-bold">{data.weight}KG</span></div>
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
      {showActiveStats && (
        <Modal 
          Title={"Parcel Confirmation"}
          handleClose={handleClose}
          bigModal={true}
          Content={
            <div className="pt-6">
              <div className="text-lg">Kindly confirm if the parcel PD1020000{data.id}  has been delivered?</div>
              <div className="flex gap-4 pt-6 justify-center items-center">
                <div><button onClick={(e) => handleSuccessfulDelivery(data.status, data.id)} type="button" className=" py-3 px-6 w-full rounded-lg text-black bg-green hover:bg-light_green font-bold">Yes, parcel delivered</button></div>
                <div><button onClick={handleFailedDelivery} type="button" className=" py-3 px-6 w-full rounded-lg text-white bg-red hover:bg-opacity-70 font-bold">No, parcel not delivered</button></div>
              </div>
            </div>
          }
        />
      )}
      {showSuccessfulDelivery && (
        <Modal
          Title={"Thank You"}
          handleClose={handleClose}
          bigModal={true}
          Content={
            <div className="pt-6">
              Thank you for using <span className="text-blue">parcelra.com</span>. Please rate your experience with us.
              <div><StarRating /></div>
            </div>
          }
        />
      )}
      {showFailedDelivery && (
        <Modal
          Title={"Thank You"}
          handleClose={handleClose}
          bigModal={true}
          Content={
            <div className="pt-6">
              Thank you for using <span className="text-blue">parcelra.com</span>. Please we will reach out to know the current status of the parcel. Thank you for the feedback!
            </div>
          }
        />
      )}
      {showSuccessfulTransitDelivery && (
        <Modal
          Title={"Thank You"}
          handleClose={handleClose}
          bigModal={true}
          Content={
            <div className="pt-6">
              Thank you for delivering parcel PD1020000{data.id}. We are awaiting confirmation, which typically takes less than 24 hours. Once confirmed, we will send you an email to proceed with payment.
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
