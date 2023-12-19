import * as React from "react";
import { useState } from "react";

const Search = ({ border }) => {

    const [from, setFrom] = useState("")
    const [to, setTo] = useState("")

    return (
        <form className="md:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10">
                <div>
                    {/* <label htmlFor="l" className="text-black">lol</label> */}
                    <input name="from" placeholder="From" className={` border focus:border-red mt-1 p-4 rounded-lg focus:outline-none w-full ${border}`} type="text" required onChange={e => { setFrom(e.target.value) }} value={from} />
                </div>
                <div>
                    {/* <label htmlFor="l" className="text-black">lol</label> */}
                    <input name="to" placeholder="To" className={` border focus:border-red mt-1 p-4 rounded-lg focus:outline-none w-full ${border}`} type="text" required onChange={e => { setTo(e.target.value) }} value={to} />
                </div>
                <div className="flex items-center justify-center">
                    <button type="button" className="py-4 px-10 w-full lg:w-1/2 rounded-lg text-black bg-green hover:bg-light_green font-bold">Search</button>
                </div>
            </div>
        </form>
    )
}

export default Search