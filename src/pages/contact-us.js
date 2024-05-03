import * as React from "react"
import Layout from "../components/layout"
import { useState } from "react"

const ContactUsPage = () => {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [message, setMessage] = useState("")

  return (
    <Layout active={"contact"}>
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
              <div className="md:font-bold md:px-10 py-6">
                <div>
                  <div className=" text-2xl text-blue py-4 font-bold">Get In touch</div>
                  <div className=" ">Contact us in any way convenient for you</div>
                  <div className="  font-bold text-green">+447361587707</div>
                </div>
                <div>
                  <div className=" text-2xl text-blue py-4 font-bold">Address</div>
                  <div className=" ">2nd Floor College House, 17 King Edwards Road, Ruislip, London.</div>
                </div>
                <div>
                  <div className=" text-xl text-green py-4 font-bold">Time of operation</div>
                  <div className=" ">Mon - Fri: 8:00 – 17:00</div>
                  <div className="">Sat - Sun: day off</div>
                </div>
                <div>
                  <div className=" text-2xl text-blue py-4 font-bold">Emails</div>
                  <div className="  text-xl text-green ">For general enquiries and technical support</div>
                  <div className="">Parcelracompany@gmail.com </div>
                </div>
              </div>
              <div className="border-t py-6 md:border-l md:border-t-0">
                <form className="md:px-10">
                  <div className="pb-2">
                    <label htmlFor="fullName" className="">Full Name</label>
                    <input name="fullName" className={` border border-white focus:border-red mt-1 p-4 rounded-lg focus:outline-none w-full bg-transparent`} type="text" required onChange={e => { setFullName(e.target.value) }} value={fullName} />
                  </div>
                  <div className="py-2">
                    <label htmlFor="email" className="">Email</label>
                    <input name="email" className={` border border-white focus:border-red mt-1 p-4 rounded-lg focus:outline-none w-full bg-transparent`} type="email" required onChange={e => { setEmail(e.target.value) }} value={email} />
                  </div>
                  <div className="py-2">
                    <label htmlFor="phoneNumber" className="">Phone Number</label>
                    <input name="phoneNumber" className={` border border-white focus:border-red mt-1 p-4 rounded-lg focus:outline-none w-full bg-transparent`} type="text" required onChange={e => { setPhoneNumber(e.target.value) }} value={phoneNumber} />
                  </div>
                  <div className="py-2">
                    <label htmlFor="message" className="">Message</label>
                    <textarea rows={4} cols={51} name="message" className={` border border-white focus:border-red mt-1 p-4 rounded-lg focus:outline-none w-full bg-transparent`} type="text" required onChange={e => { setMessage(e.target.value) }} value={message} />
                  </div>
                  <div className="flex items-center justify-end pt-10">
                    <button type="button" className="py-4 px-10 w-full lg:w-1/2 rounded-lg text-black bg-green hover:bg-light_green font-bold">Submit</button>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
        <div className="bg-transparent w-full my-10 ">
          <img alt="call" src="https://images.unsplash.com/photo-1613993995046-07bce4b0bfed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
      </main>
    </Layout>
  )
}

export default ContactUsPage

export const Head = () => <title>Contact Us</title>
