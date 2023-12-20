import * as React from "react";

const ParcelCard = ({handleDetails}) => {
    return (
        <div className=" bg-light_black border border-white p-4 rounded-lg w-full">
            <div className="flex flex-col md:flex-row gap-10">
                <div className="bg-white p-10 w-[9rem] md:w-[11rem] rounded-lg">
                    <img src="/svg/siren-icon.svg" alt="parcelImage" />
                </div>
                <div className="flex flex-col gap-1">
                    <div className="font-bold text-2xl">Accra - Ghana</div>
                    <div>Dubai - United Arab Emirates</div>
                    <div className="font-bold pb-4">$ 300</div>
                    <button onClick={handleDetails} type="button" className="py-3 px-6 w-full rounded-lg text-black bg-green hover:bg-light_green font-bold">View Details</button>
                </div>
            </div>
        </div>
    )
}

export default ParcelCard