import * as React from "react";
import Navigation from "./Navigation";
import { Helmet } from "react-helmet";

const Layout = ({ children, active }) => {
    return (
        <div className="flex flex-col justify-between text-white min-h-screen">
            <Helmet>
                <link rel="icon" href="/img/favicon.ico" />
            </Helmet>
            <div className=""><Navigation active={active} />
                <div className="w-full pt-28">{children}</div>
            </div>
            <div className="py-10 text-center border-t">© All Rights reserved. This website is the property of Parcelra , Copyrighted 2024. </div>
        </div>
    )
}

export default Layout