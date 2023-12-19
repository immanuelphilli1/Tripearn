import * as React from "react"
import Layout from "../components/layout"

const AboutUsPage = () => {
  return (
    <Layout>
      <main>
        <div className="container mx-auto py-10">
          <div className="flex gap-10 justify-between">
            <div className="flex flex-col gap-6 lg:gap-10 w-full">
              <div className="bg-blue w-full min-h-[350px] rounded-lg p-10 flex flex-col justify-center gap-10">
                <div className="uppercase text-2xl md:text-5xl font-bold text-center">About us</div>
              </div>
            </div>
          </div>
          <div className="py-10">
            <div className=" text-2xl py-6">Trip earn is the largest parcel delivery service that brings together travelers and people who need to deliver any package.</div>
            <div className=" text-2xl text-blue py-4 font-bold">How it all began</div>
            <div className=" py-2 ">In August 2018, while studying at Saratov State Technical University, I faced a problem that was the birth of this wonderful idea. As an international student in Russia, you are required to renew your visa annually, but this particular year I had to renew my visa and my passport because my passport was only valid for seven months. I presented my passport to the Ghanaian Embassy in Moscow. I only had 3 months for my visa to expire. After waiting for about 2 months and 20 days, my passport was finally ready at the embassy in Moscow. The problem was that I needed a courier service to deliver my passport to Saratov. I also didn't have a lot of money, and if I used the regular post office delivery, it would take about two weeks. Luckily, my friend was going to travel from Moscow to Saratov by bus that same day, and I told him to pick up my passport for me at the embassy. And in less than 24 hours, I had my passport.</div>
            <div className=" py-2">So I asked myself what if there was a system that could help others in this situation. Together with my co-founders, we were able to bring this idea to life.</div>
            <div className="bg-light_grey p-10 w-full min-h-[200px] rounded-lg my-10 "></div>
            <div className=" text-2xl text-blue py-4 font-bold">Currently</div>
            <div className=" py-2 ">Trip earn is the largest delivery service for all types of parcels, helping to find a traveler who, traveling by bus, train or plane, having free space in his luggage, can deliver your any parcel to the desired destination along his travel route. At the same time, the traveler receives some reward for the delivery, and your parcel successfully arrives at its destination, on time and in complete safety.</div>
            <div className=" text-2xl text-blue py-4 font-bold">What makes us unique</div>
            <div className=" py-2 ">There is no doubt that there are many delivery services out there, so what is the unique difference between Trip earn and the rest?</div>
            <div className=" text-2xl text-blue py-4 font-bold">Speed</div>
            <div className=" py-2">We use the fastest shipping system compared to the rest. That's because we've cut down on all the unnecessary bureaucracy that hinders the smooth delivery of services.</div>
            <div className="bg-light_grey p-10 w-full min-h-[200px] rounded-lg my-10 "></div>
            <div className=" text-2xl text-blue py-4 font-bold">Friendly & Reliable</div>
            <div className=" py-2 ">We are well aware that it takes trust to ensure that only good travelers have your parcels, which is why we have created a secure delivery service with trust that brings together only verified travelers. In addition, there is sufficient information to track the location of your packages.</div>
            <div className=" text-2xl text-blue py-4 font-bold">Diversity Between Technology and Man</div>
            <div className=" py-2">Technology is rapidly moving us towards a robotic society and we have to stick to our human values, hence we have created this service to involve more human contacts. The service allows you to expand your social circle and make friends with those who are engaged in drop shipping. This will go a long way in fostering a sense of altruism and true humanity in society. It will also add new acquaintances for you to build on in the future.</div>
            <div className=" text-2xl text-blue py-4 font-bold">Extra Earnings</div>
            <div className=" py-2">By using Trip earn on your journey to help people deliver any packages to their desired destination on their travel itinerary, it is possible to get extra money to cover some of the costs on your trip.</div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default AboutUsPage

export const Head = () => <title>About Us</title>
