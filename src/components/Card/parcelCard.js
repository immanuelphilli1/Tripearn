import { navigate } from "gatsby";
import * as React from "react";

const ParcelCard = ({handleDetails=()=>navigate('/parcel-content'), price ="60", arrival="United Kingdom, London", departure="Accra, Ghana", id}) => {
    return (
        <div className=" bg-light_black border border-green p-4 rounded-lg w-full">
            <div className="flex flex-col md:flex-row gap-10">
                <div className="bg-purple p-10 w-[9rem] md:w-[11rem] rounded-lg">
                    <img src="/img/tripearn.png" alt="parcelImage" />
                </div>
                <div className="flex flex-col gap-1">
                    <div className="font-bold text-2xl">{arrival}</div>
                    <div>{departure}</div>
                    <div className="font-bold pb-4">$ {price}<span className="hidden">{id}</span></div>
                    <button onClick={handleDetails} type="button" className="py-3 px-6 w-full rounded-lg text-black bg-green hover:bg-light_green font-bold">View Details</button>
                </div>
            </div>
        </div>
    )
}

export default ParcelCard