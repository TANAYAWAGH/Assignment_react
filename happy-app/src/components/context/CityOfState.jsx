import {  useState, useContext } from "react";
import citiesOfState from "./city_of_state";
import { CountryContext } from "./Country";

const CityOfState = ({stateId})=>{
    const [cityName,setCityName] = useState('')
    const countryName = useContext(CountryContext)

    const filteredCities = citiesOfState.filter(city=>city.stateId==stateId)

    return (
        <div>
            <label className="form-label" htmlFor="ct">Select City</label>
            <select className="form-select" id="ct" value={cityName}
            onChange={e=>setCityName(e.target.value)}>
                {filteredCities.map( city=>
                    <option key={city.cityId}>{city.name}</option>
                )}
            </select>
            { cityName && <h2>You selected city :{cityName} of {countryName}</h2>}
        </div>

    )

}


export default CityOfState;