import * as React from "react"
import Layout from "../components/layout"

const AboutUsPage = () => {
  return (
    <Layout active={"about"}>
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
            <div className=" text-2xl py-6">Parcelra is the largest parcel delivery service that brings together travelers and people who need to deliver any package.</div>
            <div className=" text-2xl text-blue py-4 font-bold">How it all began</div>
            <div className=" py-2 ">While studying at Saratov State Technical University in August 2018, I encountered a challenge that sparked a wonderful idea. As an international student in Russia, renewing my visa and passport annually was mandatory. Facing a tight deadline with only three months left on my visa, I needed my passport renewed. The Ghanaian Embassy in Moscow took over two months to process it. To overcome the delivery hurdle, I asked a friend traveling to Saratov to pick up my passport, avoiding the lengthy post office delivery. This experience inspired us to create a system to assist others in similar situations, and with my co-founders, we brought this idea to life.</div>
            <div className=" py-2">So I asked myself what if there was a system that could help others in this situation. Together with my co-founders, we were able to bring this idea to life.</div>
            <div className="bg-white w-full min-h-[50px] flex items-center justify-center rounded-lg my-10 ">
            <img alt="bg" src="/img/about-1.jpg" className="" />
            </div>
            <div className=" text-2xl text-blue py-4 font-bold">Currently</div>
            <div className=" py-2 ">Presently, Parcelra stands as the leading parcel delivery service, connecting you with travelers who, whether by bus, train, or plane, have extra space in their luggage. They can seamlessly deliver your parcel along their travel route to the desired destination. This benefits both you and the traveler, as they earn a reward for the delivery, ensuring your parcel arrives safely and on time.</div>
            <div className=" text-2xl text-blue py-4 font-bold">What makes us unique</div>
            <div className=" py-2 ">There is no doubt that there are many delivery services out there, so what is the unique difference between Parcelra and the rest?</div>
            <div className=" text-2xl text-blue py-4 font-bold">Rapid Delivery</div>
            <div className=" py-2">Get your documents, gifts, or important parcels delivered in less than 24 hours. With people traveling around the clock, we ensure swift delivery regardless of the time of day.</div>
            <div className="bg-white w-full min-h-[50px] flex items-center justify-center rounded-lg my-10 ">
            <img alt="bg" src="/img/about-2.jpg" className="" />
            </div>
            <div className=" text-2xl text-blue py-4 font-bold">Reliable & Approachable</div>
            <div className=" py-2 ">Understanding the importance of trust in parcel delivery, we've crafted a secure service connecting you with only verified and reliable travelers. Our system provides ample information for tracking your packages, ensuring a reliable and approachable delivery experience.</div>
            <div className=" text-2xl text-blue py-4 font-bold">Diversity Between Technology and Man</div>
            <div className=" py-2">Technology is rapidly moving us towards a robotic society and we have to stick to our human values, hence we have created this service to involve more human contacts. The service allows you to expand your social circle and make friends with those who are engaged in drop shipping. This will go a long way in fostering a sense of altruism and true humanity in society. It will also add new acquaintances for you to build on in the future.</div>
            <div className=" text-2xl text-blue py-4 font-bold">Earn Extra on the Go</div>
            <div className=" py-2">Lend a hand with Parcelra on your journey, delivering packages to destinations along your travel route. It's an opportunity to earn extra money and offset some of your travel costs.</div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default AboutUsPage

export const Head = () => <title>About Us</title>
