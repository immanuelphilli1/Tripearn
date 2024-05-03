import * as React from "react"
import Layout from "../components/layout"

const AboutUsPage = () => {
  return (
    <Layout active={"disclaimer"}>
      <main>
        <div className="container mx-auto py-10">
          <div className="flex gap-10 justify-between">
            <div className="flex flex-col gap-6 lg:gap-10 w-full">
              <div className="bg-purple w-full min-h-[350px] rounded-lg p-10 flex flex-col justify-between  gap-10">
                <div />
                <div className="uppercase text-2xl md:text-5xl font-bold text-center self-center">Disclaimer</div>
                <div className="">Last updated: January 15, 2024</div>
              </div>
            </div>
          </div>
          <div className="py-10">
            <div className=" text-2xl text-blue font-bold py-6">Interpretation and Definitions</div>
            <div className=" text-2xl text-blue py-4 font-bold">Interpretation</div>
            <div className=" py-2 ">The words of which the initial letter is capitalized have meanings defined under the following conditions.</div>
            <div className=" py-2">The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</div>
            <div className=" text-2xl text-blue py-4 font-bold">Definitions</div>
            <div className=" py-2 ">Company (referred to as either "the Company", "We", "Us" or "Our" in this Cookies Policy) refers to Parcelra.com.</div>
            <div className=" py-2 ">You means the individual accessing the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</div>
            <div className=" py-2 ">Website refers to https://parcelra.ru/ (Parcelra ).</div>
            <div className=" py-2 ">Service refers to the Website.</div>
            <div className=" text-2xl text-blue py-4 font-bold">Disclaimer</div>
            <div className=" py-2 ">The information contained on the Service is for general information purposes only.</div>
            <div className=" py-2 ">The Company assumes no responsibility for errors or omissions in the contents of the Service.</div>
            <div className=" py-2 ">In no event shall the Company be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other tort, arising out of or in connection with the use of the Service or the contents of the Service. The Company reserves the right to make additions, deletions, or modifications to the contents on the Service at any time without prior notice. This Disclaimer has been created with the help of Disclaimer Generator</div>
            <div className=" py-2 ">The Company does not warrant that the Service is free of viruses or other harmful components.</div>
            <div className=" text-2xl text-blue py-4 font-bold">Errors and Omissions Disclaimer</div>
            <div className=" py-2">The information given by the Service is for general guidance on matters of interest only. Even if the Company takes every precaution to insure that the content of the Service is both current and accurate, errors can occur. Plus, given the changing nature of laws, rules and regulations, there may be delays, omissions or inaccuracies in the information contained on the Service.</div>
            <div className=" py-2">The Company is not responsible for any errors or omissions, or for the results obtained from the use of this information.</div>
            <div className=" text-2xl text-blue py-4 font-bold">Fair Use Disclaimer</div>
            <div className=" py-2">The Company may use copyrighted material which has not always been specifically authorized by the copyright owner. The Company is making such material available for criticism, comment, news reporting, teaching, scholarship, or research.</div>
            <div className=" py-2">The Company believes this constitutes a "fair use" of any such copyrighted material as provided for in section 107 of the United States Copyright law.</div>
            <div className=" py-2">If You wish to use copyrighted material from the Service for your own purposes that go beyond fair use, You must obtain permission from the copyright owner.</div>

            <div className=" text-2xl text-blue py-4 font-bold">Introduction</div>
            <div className=" py-2">Welcome to Parcelra.com, the platform connecting international travelers with individuals seeking to send items to the traveler's destination. By using our services, you acknowledge and agree to the terms outlined in this disclaimer. Please read this disclaimer carefully before using our platform.
            </div>
            <div className=" text-2xl text-blue py-4 font-bold">Risks and Responsibilities
            </div>
            <div className=" text-xl text-blue py-1 font-bold">1. Risks of Lost item</div>
            <div className=" py-2"> Parcelra.com facilitates the connection between travelers and senders, but we do not take responsibility for any lost, damaged, or misplaced items during the delivery process. Users are advised to exercise caution and consider the inherent risks associated with entrusting their items to strangers.
            </div>
            <div className=" text-xl text-blue py-1 font-bold">2. Verification Responsibility</div>
            <div className=" py-2"> Travelers are responsible for thoroughly inspecting the packages they are carrying to ensure they are not transporting illegal or prohibited items. Parcelra.com does not assume any liability for the contents of the packages and urges travelers to exercise due diligence.
            </div>
            <div className=" text-xl text-blue py-1 font-bold">3. Sender's Responsibility</div>
            <div className=" py-2">Senders are solely responsible for verifying the identity and reliability of the traveler they choose for the delivery. It is strongly recommended that senders check the traveler's tickets, passports, and take appropriate precautionary measures, such as capturing photographs of the items being handed over.
            </div>
            <div className=" text-xl text-blue py-1 font-bold">4. Data Security</div>
            <div className=" py-2"> Parcelra.com places the utmost importance on safeguarding the privacy and security of user data. We employ stringent measures to protect personal information, and users can trust that their data is safe with us. However, users must understand that while we take reasonable measures to secure their data, there are inherent risks associated with online platforms.

            </div>
            <div className=" text-2xl text-blue py-4 font-bold">Assumption of Risk</div>
            <div className=" py-2"> Users of Parcelra.com acknowledge that the transportation of items through strangers involves inherent risks. By utilizing our platform, users assume all risks associated with the delivery process and agree that Parcelra.com is not liable for any direct, indirect, incidental, consequential, or exemplary damages resulting from the use of our services.

            </div>
            <div className=" text-2xl text-blue py-4 font-bold">Terms of Service Updates</div>
            <div className=" py-2"> Parcelra.com reserves the right to update this disclaimer and our Terms of Service at any time. Users are encouraged to review these documents periodically for changes.

            </div>

            <div className=" text-2xl text-blue py-4 font-bold">Contact Information</div>
            <div className=" py-2">If you have any questions or concerns regarding this disclaimer, please contact us at</div>
            <div className=" py-2">By email: Parcelracompany@gmail.com</div>
            <div className=" py-2">By phone number: +447361587707</div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default AboutUsPage

export const Head = () => <title>Disclaimer</title>
