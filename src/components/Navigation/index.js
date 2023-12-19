import * as React from "react";

const Navigation =()=>{
    return(
        <div className="container mx-auto">
        <div className="flex justify-between items-center gap-2 py-10 uppercase">
            
            <a href="/">
            <img src="/img/tripearn.png" alt="logo" className="w-[50px] height-[50px]" /></a>
            <div className="hidden lg:flex gap-10">
                <a href="/" className="hover:text-blue">Home</a>
                <a href="/about-us" className="hover:text-blue">about us</a>
                <a href="/contact-us" className="hover:text-blue">contact us</a>
                <a href="/disclaimer" className="hover:text-blue">disclaimer</a>
            </div>
            <div className="bg-white px-4 py-2 font-medium items-center flex gap-4 rounded-lg">
                <a href="/" className="text-light_black hover:text-blue">Sign In</a>
                <a href="/" className="bg-light_black hover:text-blue hover:bg-white py-1 px-4 rounded-lg">Sign Up</a>
            </div>
        </div>
        </div>
    )
}

export default Navigation