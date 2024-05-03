import * as React from "react";

const ProfileCard = ({cardStyle="bg-light_black", handleDetails, handleActiveStatus, arrival, departure, price, packageID, date, id, status}) => {
    return (
        <div className={` border ${cardStyle} border-white p-4 md:p-10 rounded-lg w-full`}>
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
                    <div className="flex items-center gap-1 lg:text-lg"><span>Package ID:</span><span className="font-bold">PD1020000{packageID}</span></div>
                    <div className="flex items-center gap-1 lg:text-lg"><span>Amount:</span><span className="font-bold">$ {price}</span></div>
                    <button onClick={status === "active" || status === "transit" ? handleActiveStatus : null} className={`flex ${status==="active" || status==="transit" ?"":"cursor-default"} items-center gap-1 lg:text-lg`}><span>Status:</span><span className={`font-bold ${status === "active" ? "text-green bg-white border border-light_black px-4 py-1 rounded-lg hover:bg-opacity-80" : status === "transit" ? "text-white bg-light_black border border-light_black px-4 py-1 rounded-lg hover:bg-opacity-80"  : status === "pending" ? " text-orange" :status === "inactive" ? " text-red" :status === "awaiting payment" ? " text-blue" : "text-purple" }  uppercase`}>{status}<span className="hidden">{id}</span></span></button>
                    <div className="flex items-center gap-1 lg:text-lg pb-4"><span>Parcel Data:</span><span className="font-bold"> Parcel</span></div>
                    <button onClick={handleDetails} type="button" className="md:hidden py-3 px-6 w-full rounded-lg text-black bg-green hover:bg-light_green font-bold">View Details</button>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard