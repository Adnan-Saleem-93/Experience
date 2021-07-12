import React, {useState, useEffect} from "react";
import {experienceURL} from "./utils/constants";
import "./App.css";
import ExperienceSection from "./components/experience-section";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      onFetchData();
    }, 1000);
  }, []);

  const onFetchData = async () => {
    let response = await fetch(experienceURL);
    let result = await response.json();
    setData(result);
  };

  return (
    <div className="App">
      {data.length ? <h1>Experience</h1> : <h1>Loading...</h1>}
      <ExperienceSection data={data} />
    </div>
  );
}

export default App;
