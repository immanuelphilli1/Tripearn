import * as React from "react";
import Navigation from "./Navigation";

const Layout = ({ children, active }) => {
    return (
        <div className="flex flex-col justify-between text-white min-h-screen">
            <div className=""><Navigation active={active} />
                <div className="w-full pt-28">{children}</div>
            </div>
            <div className="py-10 text-center border-t">© All Rights reserved. This website is the property of Trip Earn , Copyrighted 2024. </div>
        </div>
    )
}

export default Layout