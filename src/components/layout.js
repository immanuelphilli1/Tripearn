import * as React from "react";
import Navigation from "./Navigation";
import { Helmet } from "react-helmet";
import { FacebookLogo, InstagramLogo, MetaLogo } from "@phosphor-icons/react";

const Layout = ({ children, active }) => {
    return (
        <div className="flex flex-col justify-between text-white min-h-screen">
            <Helmet>
                <link rel="icon" href="/img/favicon.ico" />
            </Helmet>
            <div className=""><Navigation active={active} />
                <div className="w-full pt-28">{children}</div>
            </div>
            <div className="py-10 flex flex-col lg:flex-row items-center gap-4 lg:justify-evenly border-t">
                <div className="flex gap-4">
                    <div className="text-xl">Follow Us</div>
                    <a  href="https://www.facebook.com/Parcelra?mibextid=LQQJ4d" target="_blank" className="fill-white hover:fill-[#3b5998]"><FacebookLogo size={32} weight="fill" color="" /></a>
            <a  href="https://www.facebook.com/Parcelra?mibextid=LQQJ4d" target="_blank" className="fill-white hover:fill-blue"><MetaLogo size={32} weight="fill" color="" /></a>
        <a href="https://www.instagram.com/parcelra?igsh=MTdiMWV0bjlxaHozZw==" target="_blank" className="fill-white hover:fill-[#E1306C]"><InstagramLogo size={32} weight="fill" color="" /></a>
        </div>
                <div className="text-center">© All Rights reserved. This website is the property of Parcelra , Copyrighted 2024.</div> </div>
        </div>
    )
}

export default Layout