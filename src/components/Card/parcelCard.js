import { navigate } from "gatsby";
import * as React from "react";

const ParcelCard = ({handleDetails=()=>navigate('/parcel-content'), price ="60", arrival="United Kingdom, London", departure="Accra, Ghana", id}) => {
    return (
        <div className=" bg-light_black border border-green p-4 rounded-lg w-full">
            <div className="flex h-full flex-col md:flex-row gap-10 items-start md:items-center justify-center">
                <div className="flex items-center justify-center">
                <div className="flex items-center justify-center bg-purple p-10 w-[9rem] md:w-[11rem] rounded-lg">
                    <img src="/img/tripearn.png" alt="parcelImage" />
                </div>
                </div>
                <div className="flex flex-col gap-1 w-full">
                    <div className="font-bold text-2xl"><span className="text-blue text">To:</span> {arrival}</div>
                    <div><span className="text-blue">From:</span> {departure}</div>
                    <div className="font-bold pb-4">$ {price}<span className="hidden">{id}</span></div>
                    <button onClick={handleDetails} type="button" className="py-3 px-6 w-full rounded-lg text-black bg-green hover:bg-light_green font-bold">View Details</button>
                </div>
            </div>
        </div>
    )
}

export default ParcelCard