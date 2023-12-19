import * as React from "react"
import Layout from "../components/layout"
import { useState } from "react"
import ProfileCard from "../components/Card/profileCard"

const ProfilePage = () => {
  const [filter, setFilter] = useState("")
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
                    <button type="button" className="py-3 px-6 w-full rounded-lg text-black bg-green hover:bg-light_green font-bold">Update Number</button>
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
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default ProfilePage

export const Head = () => <title>Profile</title>
