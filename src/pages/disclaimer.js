import * as React from "react"
import Layout from "../components/layout"

const AboutUsPage = () => {
  return (
    <Layout>
      <main>
        <div className="container mx-auto py-10">
          <div className="flex gap-10 justify-between">
            <div className="flex flex-col gap-6 lg:gap-10 w-full">
              <div className="bg-purple w-full min-h-[350px] rounded-lg p-10 flex flex-col justify-between  gap-10">
                <div />
                <div className="uppercase text-2xl md:text-5xl font-bold text-center self-center">Disclaimer</div>
                <div className="">Last updated: January 15, 2020</div>
              </div>
            </div>
          </div>
          <div className="py-10">
            <div className=" text-2xl text-blue font-bold py-6">Interpretation and Definitions</div>
            <div className=" text-2xl text-blue py-4 font-bold">Interpretation</div>
            <div className=" py-2 ">The words of which the initial letter is capitalized have meanings defined under the following conditions.</div>
            <div className=" py-2">The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</div>
            <div className=" text-2xl text-blue py-4 font-bold">Definitions</div>
            <div className=" py-2 ">Company (referred to as either "the Company", "We", "Us" or "Our" in this Cookies Policy) refers to Tripearn.coporation, Russia Saratov Begovaya 22.</div>
            <div className=" py-2 ">You means the individual accessing the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</div>
            <div className=" py-2 ">Website refers to https://tripearn.ru/ (Trip earn ).</div>
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
            <div className=" text-2xl text-blue py-4 font-bold">Views Expressed Disclaimer</div>
            <div className=" py-2">The Service may contain views and opinions which are those of the authors and do not necessarily reflect the official policy or position of any other author, agency, organization, employer or company, including the Company.</div>
            <div className=" py-2">Comments published by users are their sole responsibility and the users will take full responsibility, liability and blame for any libel or litigation that results from something written in or as a direct result of something written in a comment. The Company is not liable for any comment published by users and reserve the right to delete any comment for any reason whatsoever.</div>
            <div className=" text-2xl text-blue py-4 font-bold">No Responsibility Disclaimer</div>
            <div className=" py-2">The information on the Service is provided with the understanding that the Company is not herein engaged in rendering legal, accounting, tax, or other professional advice and services. As such, it should not be used as a substitute for consultation with professional accounting, tax, legal or other competent advisers.</div>
            <div className=" py-2">In no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever arising out of or in connection with your access or use or inability to access or use the Service.</div>
            <div className=" text-2xl text-blue py-4 font-bold">"Use at Your Own Risk" Disclaimer</div>
            <div className=" py-2">All information in the Service is provided "as is", with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information, and without warranty of any kind, express or implied, including, but not limited to warranties of performance, merchantability and fitness for a particular purpose.</div>
            <div className=" py-2">The Company will not be liable to You or anyone else for any decision made or action taken in reliance on the information given by the Service or for any consequential, special or similar damages, even if advised of the possibility of such damages.</div>
            <div className=" text-2xl text-blue py-4 font-bold">Contact Us</div>
            <div className=" py-2">If you have any questions about this Disclaimer, You can contact Us:</div>
            <div className=" py-2">By email: Twum109@gmail.com</div>
            <div className=" py-2">By phone number: 89179825913</div>
            <div className=" py-2">By mail: Saratov 410055.</div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default AboutUsPage

export const Head = () => <title>Disclaimer</title>
