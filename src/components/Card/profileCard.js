import * as React from "react";

const ProfileCard = ({handleDetails, arrival, departure, price, packageID, date, id}) => {
    return (
        <div className=" bg-light_black border border-white p-4 md:p-10 rounded-lg w-full">
            <div className="flex flex-col md:flex-row justify-between gap-10">
                <div className="md:order-last flex flex-col justify-between">
                    <div className="bg-purple p-10 w-full md:w-[11rem] rounded-lg ">
                        <img src="/img/tripearn.png" alt="parcelImage" />
                    </div>
                    <button onClick={handleDetails} type="button" className="hidden md:block py-3 px-6 w-full rounded-lg text-black bg-green hover:bg-light_green font-bold">View Details</button>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1 lg:text-lg"><span>Destination:</span><span className="font-bold">{arrival}</span></div>
                    <div className="flex items-center gap-1 lg:text-lg"><span>Primary Location:</span><span className="font-bold">{departure}</span></div>
                    <div className="flex items-center gap-1 lg:text-lg"><span>Required Delivery Date:</span><span className="font-bold">{date}</span></div>
                    <div className="flex items-center gap-1 lg:text-lg"><span>Package ID:</span><span className="font-bold">{packageID}</span></div>
                    <div className="flex items-center gap-1 lg:text-lg"><span>Amount:</span><span className="font-bold">$ {price}</span></div>
                    <div className="flex items-center gap-1 lg:text-lg"><span>Status:</span><span className="font-bold text-green uppercase">Active<span className="hidden">{id}</span></span></div>
                    <div className="flex items-center gap-1 lg:text-lg pb-4"><span>Parcel Data:</span><span className="font-bold">Send Parcel</span></div>
                    <button onClick={handleDetails} type="button" className="md:hidden py-3 px-6 w-full rounded-lg text-black bg-green hover:bg-light_green font-bold">View Details</button>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard