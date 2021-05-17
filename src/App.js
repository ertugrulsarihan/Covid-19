import React, { useEffect, useState } from "react";
import { CovidContext } from "./Context/Context";
import Countries from "./Components/Countries";
import "./App.css";
import { Data } from "./Context/data";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./Components/Main";

function App() {
  const [data, setData] = useState(Data);

  useEffect(() => {
    const getData = async () => {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      const response = await fetch(
        "https://api.covid19api.com/summary",
        requestOptions
      )
        .then((response) => response.json())
        .catch((error) => console.log("error", error));
      console.log(response);
      setData(Data);
    };
    getData();
  }, []);

  return (
    <CovidContext.Provider value={{ sayhi: "hello", data: data }}>
      <BrowserRouter>
        <div className="container">
          <Route path="/" exact component={Main} />
          <Route path="/countries" exact component={Countries} />
          
        </div>
      </BrowserRouter>
    </CovidContext.Provider>
  );
}

export default App;
