import * as React from "react";
import Navigation from "./Navigation";

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col justify-between text-white min-h-screen">
            <div><Navigation />
                <div className="w-full">{children}</div>
            </div>
            <div className="py-10 text-center border-t">© All Rights reserved. This website is the property of Trip Earn , Copyrighted 2024. </div>
        </div>
    )
}

export default Layout