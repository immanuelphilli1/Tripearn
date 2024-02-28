import { navigate } from "gatsby";
import * as React from "react";
import { useState } from "react";
import Loader from "../Modal/loader";

const Search = ({ border, loading, handleFromChange, handleSearch, handleToChange, fromCity, fromCountry, countryData, setFromCity, setToCity, cityData, toCountry, toCity, toCityData}) => {

    

    return (
        <form method="POST" onSubmit={handleSearch} action="/">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-6 pt-4 px-6 text-left text-black">
                  <div className="">
                    <label htmlFor="fromCountry" className="text-white">
                      From (<span className="">Current Country</span>)
                    </label>
                    <input
                      name="fromCountry"
                      className={` ${border} border focus:border-purple mt-1 p-4 rounded-lg focus:outline-none w-full border-light_black `}
                      type="text"
                      list="fromCountryList"
                      required
                      onChange={handleFromChange}
                      value={fromCountry}
                    />
                    <datalist id="fromCountryList">
                      {countryData.map((country, key) => {

                        return <option key={key}>{country.name}</option>
                      })}
                    </datalist>
                  </div>
                  <div>
                    <label htmlFor="fromCity" className="text-white">
                      From (<span className="">Current City</span>)
                    </label>
                    <input
                      name="fromCity"
                      className={`${border} border focus:border-purple mt-1 p-4 rounded-lg focus:outline-none w-full border-light_black `}
                      type="text"
                      list="fromCityList"
                      required
                      onChange={(e) => {
                        setFromCity(e.target.value);
                      }}
                      value={fromCity}
                    />
                    <datalist id="fromCityList">
                      {cityData.map((city, key) => {

                        return <option key={key}>{city}</option>
                      })}
                    </datalist>
                  </div>
                  <div className="">
                    <label htmlFor="toCountry" className="text-white">
                      To (<span className="">Destination Country</span>)
                    </label>
                    <input
                      name="toCountry"
                      className={`${border} border focus:border-purple mt-1 p-4 rounded-lg focus:outline-none w-full border-light_black `}
                      type="text"
                      list="toCountryList"
                      required
                      onChange={handleToChange}
                      value={toCountry}
                    />
                    <datalist id="toCountryList">
                      {countryData.map((country, key) => {

                        return <option key={key}>{country.name}</option>
                      })}
                    </datalist>
                  </div>
                  <div>
                    <label htmlFor="toCity" className="text-white">
                      To (<span className="">Destination City</span>)
                    </label>
                    <input
                      name="toCity"
                      className={`${border} border text-black focus:border-purple mt-1 p-4 rounded-lg focus:outline-none w-full border-light_black `}
                      type="text"
                      required
                      list="toCityList"
                      onChange={(e) => {
                        setToCity(e.target.value);
                      }}
                      value={toCity}
                    />
                    <datalist id="toCityList">
                      {toCityData.map((city, key) => {

                        return <option key={key}>{city}</option>
                      })}
                    </datalist>
                  </div>
                  <div className="md:col-span-2 pt-4 flex items-center justify-center">
                      <button disabled={loading === true} type="submit"  className="py-4 px-10 w-full lg:w-full rounded-lg text-black bg-green hover:bg-light_green font-bold">{loading && (<Loader />)}Submit</button>
                    </div>
            </div>
        </form>
    )
}

export default Search