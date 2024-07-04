import { useState, createContext } from "react";
import countries from "./country_data";
import StateOfCountry from "./StateOfCountry";

// globally create the context object and export it 
export const CountryContext = createContext()

const Country = ()=>{
    const [countryName,setCountryName] = useState('')

    return (
        <>
        <div>
            <label className="form-label" htmlFor="cn">Select Country</label>
            <select className="form-select" value={countryName}
             onChange={(e)=>setCountryName(e.target.value)}>
                {
                    countries.map(Country=>
                        <option key={Country.id}>{Country.name}</option>
                    )
                }

            </select>
        </div>
        <CountryContext.Provider value={countryName}>
        < StateOfCountry/>
        </CountryContext.Provider>
        </>
    )


}

export default Country;