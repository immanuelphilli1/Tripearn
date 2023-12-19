import * as React from "react"
import Layout from "../components/layout"
import { useState } from "react"

const ContactUsPage = () => {
  const[fullName, setFullName] = useState("")
  const[email, setEmail] = useState("")
  const[phoneNumber, setPhoneNumber] = useState("")
  const[message, setMessage] = useState("")

  return (
    <Layout>
      <main>
        <div className="container mx-auto py-10">
          <div className="flex gap-10 justify-between">
            <div className="flex flex-col gap-6 lg:gap-10 w-full">
              <div className="bg-green w-full min-h-[350px] rounded-lg p-10 flex flex-col justify-center gap-10">
                <div className="uppercase text-2xl md:text-5xl font-bold text-center">Contact us</div>
              </div>
            </div>
          </div>
          <div className="py-10">
            <div className=" grid grid-cols-1 md:grid-cols-2 pt-10">
              <div className="md:font-bold md:px-10">
              <div>
            <div className=" text-2xl text-blue py-4 font-bold">Get In touch</div>
            <div className=" ">Contact us in any way convenient for you</div>
            <div className="  font-bold text-green">+7 (917) 982-59-13</div>
            </div>
            <div>
            <div className=" text-2xl text-blue py-4 font-bold">Address</div>
            <div className=" ">410054, Saratov, Politekhnicheskaya str., 77</div>
            </div>
            <div>
            <div className=" text-2xl text-green py-4 font-bold">Time of operation</div>
            <div className=" ">Mon - Fri: 8:00 – 17:00</div>
            <div className="">Sat - Sun: day off</div>
            </div>
            <div>
            <div className=" text-2xl text-blue py-4 font-bold">Emails</div>
            <div className="  text-2xl text-green ">For general enquiries</div>
            <div className="">tripearn@gmail.com</div>
            </div>
            <div>
            <div className=" text-2xl text-green pt-4 font-bold">For technical support</div>
            <div className=" ">tripearn@gmail.com</div>
            </div>
            <div>
            <div className=" text-2xl text-green pt-4 font-bold">Questions about advertising and joint projects</div>
            <div className=" ">tripearn@gmail.com</div>
            </div>
            </div>
            <div className="border-l">
            <form className="px-10">
          <div className="pb-2">
                    <label htmlFor="fullName" className="">Full Name</label>
                    <input name="fullName"  className={` border border-white focus:border-red mt-1 p-4 rounded-lg focus:outline-none w-full bg-transparent`} type="text" required onChange={e => { setFullName (e.target.value) }} value={fullName}  />
                </div>
                <div className="py-2">
                    <label htmlFor="email" className="">Email</label>
                    <input name="email"  className={` border border-white focus:border-red mt-1 p-4 rounded-lg focus:outline-none w-full bg-transparent`} type="email" required onChange={e => { setEmail (e.target.value) }} value={email}  />
                </div>
                <div className="py-2">
                    <label htmlFor="phoneNumber" className="">Phone Number</label>
                    <input name="phoneNumber"  className={` border border-white focus:border-red mt-1 p-4 rounded-lg focus:outline-none w-full bg-transparent`} type="text" required onChange={e => { setPhoneNumber (e.target.value) }} value={phoneNumber}  />
                </div>
                <div className="py-2">
                    <label htmlFor="message" className="">Message</label>
                    <textarea rows={4} cols={51} name="message"  className={` border border-white focus:border-red mt-1 p-4 rounded-lg focus:outline-none w-full bg-transparent`} type="text" required onChange={e => { setMessage (e.target.value) }} value={message}  />
                </div>
                <div className="flex items-center justify-end pt-10">
                <button type="button" className="py-4 px-10 w-full lg:w-1/2 rounded-lg text-black bg-green hover:bg-light_green font-bold">Submit</button> 
                </div>
          </form>
            </div>
            </div>
            
            </div>
        </div>
        <div className="bg-light_grey p-10 w-full min-h-[600px] my-10 ">
          
        </div>
      </main>
    </Layout>
  )
}

export default ContactUsPage

export const Head = () => <title>Contact Us</title>
