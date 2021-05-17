import React from "react";

import { GiDeathSkull } from "react-icons/gi";
import { CgPill } from "react-icons/cg";
import { FiPlus } from "react-icons/fi";

export default function Cardİnfo(props) {
  return (
    <div className="card-panel blue-grey darken-3 z-index-5">
      <h5 className="white-text">{props.code}</h5>
      <div className="line z-depth-5">.</div>
      <h5 className="white-text">{props.title}</h5>
      <div className="line z-depth-5">.</div>
      <p className="white-text">
        <GiDeathSkull /> Total Deaths {props.totalDeath}
      </p>
      <p className="white-text">
        <CgPill /> Total Recovered {props.recovered}
      </p>
      <p className="white-text">
        <FiPlus /> Total Confirmed {props.confirmed}
      </p>
    </div>
  );
}
