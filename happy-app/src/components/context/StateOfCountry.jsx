import { useState, useContext } from "react";
import CityOfState from "./CityOfState";
import stateofCountry from "./state_of_country_data";
import Country, { CountryContext } from "./Country";
import countries from "./country_data";

const StateOfCountry = () => {
    const countryName = useContext(CountryContext)
const [stateId, setStateId] = useState("1");

const selectedCountry = countries.find(country=>country.name==countryName)

  const filteredStates = selectedCountry && stateofCountry.filter(state=>state.countryId == selectedCountry.id)

  return (
    <>
      <div>
        <label className="form-label" htmlFor="st">
          Select State
        </label>
        <select
          className="form-select"
          id="st"
          value={stateId}
          onChange={(e) => setStateId(e.target.value)}
        >
          {selectedCountry && filteredStates.map((state) => (
            <option key={state.stateId} value={state.stateId}>
              {state.name}
            </option>
          ))}
        </select>
      </div>

      <CityOfState stateId={stateId} />
    </>
  );
};
export default StateOfCountry;
