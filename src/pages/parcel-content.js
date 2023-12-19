import * as React from "react"
import Layout from "../components/layout"
import ParcelCard from "../components/Card/parcelCard"
import Search from "../components/Search"
import { useState } from "react"

const ParcelPage = () => {
  const [filter, setFilter] = useState("")
  return (
    <Layout>
      <main>
        <div className="container mx-auto py-10">
          <div className="flex gap-10 justify-between">
            <div className="flex flex-col gap-6 lg:gap-10 w-full">
              <div className="bg-blue w-full min-h-[350px] rounded-lg py-10 px-6">
                <div className="uppercase text-2xl md:text-5xl font-bold text-center py-10">See Trip earn parcels in your area</div>
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
            <ParcelCard />
            <ParcelCard />
            <ParcelCard />
            <ParcelCard />
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default ParcelPage

export const Head = () => <title>Parcels</title>
