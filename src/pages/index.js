import * as React from "react"
import Layout from "../components/layout"
import ParcelCard from "../components/Card/parcelCard"
import Search from "../components/Search"
import { navigate } from "gatsby"

const IndexPage = () => {
  return (
    <Layout>
      <main>
        <div className="container mx-auto py-10">
          <div className="flex gap-10 justify-between">
            <div className="flex flex-col gap-6 lg:gap-10 w-full">
              <div className="bg-blue w-full h-[200px] md:h-[450px] rounded-lg"></div>
              <div>
                <div className="uppercase font-bold text-5xl md:text-[92px] lg:pt-4">Trip earn</div>
                <div className="pt-4 md:text-xl">The largest parcel delivery service that unites travelers
                  and people who need to deliver any parcel</div>
                <div className="flex flex-col md:flex-row gap-4 md:gap-10 pt-10">
                  <button type="button" className="py-3 px-6 w-full rounded-lg text-black bg-green hover:bg-light_green uppercase font-bold">send parcel</button>
                  <button onClick={e => navigate('/parcel-content')} type="button" className="py-3 px-6 w-full rounded-lg text-black bg-green hover:bg-light_green uppercase font-bold">offer delivery</button>
                </div>
              </div>
            </div>
            <div className="w-full hidden rounded-lg bg-purple lg:block">
              <div className="h-full ">
                <div className="flex flex-col h-full justify-between gap-10">
                  <div className="pt-10 flex items-center justify-center"><img src="/img/tripearn.png" className=" w-[40rem] px-10" alt="logo-big" /></div>
                  <div className="uppercase text-black text-3xl font-bold px-10 pb-6 text-center">DELIVER YOUR PARCEL TO YOUR
                    DESTINATION IN A FEW STEPS</div></div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-y-1/2">
                <div className="flex justify-center items-center"><img src="/img/plane.png" alt="plane" className="w-[800px]" /></div></div>
            </div>
          </div>
        </div>
        <div className="bg-white py-10 my-10">
          <div className="container mx-auto">
            <div>
              <div className="uppercase text-2xl md:text-5xl text-black font-bold text-center">Need to deliver a parcel?</div>
              <div className="text-black text-lg md:text-2xl text-center pt-2">These are featured routes our travelers easily accept on Trip Earn</div>
            </div>
            <div className="py-10 flex flex-col lg:flex-row gap-10 ">
              <ParcelCard />
              <ParcelCard />
            </div>
          </div>
        </div>
        <div className="container mx-auto py-10">
          <div className="uppercase text-2xl md:text-5xl font-bold text-center pb-10">See Trip earn parcels in your area</div>
          <div className="lg:bg-white rounded-full lg:p-10"><Search border={'border-light_black'} /></div>
        </div>
        <div className="bg-white py-10 mt-10">
          <div className="container mx-auto">
            <div>
              <div className="uppercase text-2xl md:text-5xl text-black font-bold text-center pb-10">Some items you can send with trip earn</div>
            </div>
            <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 justify-items-center text-black gap-10">
              <div className="flex flex-col gap-2 justify-center items-center lg:col-span-2">
                <div><img src="/svg/archive-file-icon.svg" className="w-28 h-28" alt="document" /></div>
                <div className="font-bold text-2xl uppercase">Documents</div>
                <div className="uppercase">invitations, passports, contracts</div>
              </div>
              <div className="flex flex-col gap-2 justify-center items-center lg:col-span-2">
                <div><img src="/svg/handle-with-care-symbol-icon.svg" className="w-28 h-28" alt="document" /></div>
                <div className="font-bold text-2xl uppercase">Fragile</div>
                <div className="uppercase">glass, handmade, violin</div>
              </div>
              <div className="flex flex-col gap-2 justify-center items-center lg:col-span-2">
                <div><img src="/svg/siren-icon.svg" className="w-28 h-28" alt="document" /></div>
                <div className="font-bold text-2xl uppercase">very urgent</div>
                <div className="uppercase">a gift for a friend</div>
              </div>
              <div className="flex flex-col gap-2 justify-center items-center lg:col-span-3">
                <div><img src="/svg/paw-icon.svg" className="w-28 h-28" alt="document" /></div>
                <div className="font-bold text-2xl uppercase">Animals</div>
                <div className="uppercase">cats, dogs, parrots, gold fish</div>
              </div>
              <div className="flex flex-col gap-2 justify-center items-center lg:col-span-3">
                <div><img src="/svg/food-and-drink-icon.svg" className="w-28 h-28" alt="document" /></div>
                <div className="font-bold text-2xl uppercase">food and snacks</div>
                <div className="uppercase">saffron, tumeric, sweets, alcohol</div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-purple py-10">
          <div className="container mx-auto pb-10">
            <div>
              <div className="uppercase text-2xl md:text-5xl text-black font-bold text-center pb-10">advantages using trip earn</div>
            </div>
            <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center text-black gap-10">
              <div className="flex flex-col gap-2 justify-center items-center">
                <div><img src="/svg/pending-clock-icon.svg" className="w-28 h-28" alt="document" /></div>
                <div className="font-bold text-2xl uppercase pt-10">Speed</div>
                <div className="uppercase text-center">The parcel will be delivered faster than other delivery services, without intrusive paper bureaucracy</div>
              </div>
              <div className="flex flex-col gap-2 justify-center items-center">
                <div><img src="/svg/shield-checkmark-black-icon.svg" className="w-28 h-28" alt="document" /></div>
                <div className="font-bold text-2xl uppercase pt-10">Reliablity</div>
                <div className="uppercase text-center">The service brings together only verified travelers who will definitely deliver your package</div>
              </div>
              <div className="flex flex-col gap-2 justify-center items-center">
                <div><img src="/svg/saving-icon.svg" className="w-28 h-28" alt="document" /></div>
                <div className="font-bold text-2xl uppercase pt-10">benefits</div>
                <div className="uppercase text-center">Pay the traveler less for delivery than other delivery services
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
