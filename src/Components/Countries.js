import React, { useContext, useState } from "react";
import { CovidContext } from "../Context/Context";
import { AiFillHome } from "react-icons/ai";

import Cardİnfo from "./Card";

export default function Countries() {
  const context = useContext(CovidContext);
  const [searchValue, setSearchValue] = useState("");

  const { data } = context;
  console.log(data.Countries);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="container ">
      <a className="card_a waves-effect waves-light btn-small " href="/">
        <AiFillHome />
        HOME
      </a>
      <nav>
        <div className="nav-wrapper">
          <form>
            <div className="input-field">
              <input
                id="search"
                type="search"
                placeholder="Search Country"
                onChange={handleChange}
                required
              />
              <label className="label-icon" htmlFor="search">
                <i className="material-icons">search</i>
              </label>
              <i className="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
      <div className="row info_div">
        {data.Countries.filter((country) => {
          return country.Country.toLowerCase().includes(
            searchValue.toLowerCase()
          );
        }).map((card) => (
          <div key={card.ID} className="col s12 m6 ">
            <Cardİnfo
              title={card.Country}
              totalDeath={card.TotalDeaths}
              recovered={card.TotalRecovered}
              code={card.CountryCode}
              confirmed={card.TotalConfirmed}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
