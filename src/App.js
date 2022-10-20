import "./App.css";
import { useState, useEffect, useRef } from "react";
import FuzzySearch from "fuzzy-search";
import AirportNames from "./components/airportNames";
import MyMap from "./components/MyMap";

function App() {
  const searchInputElementArryval = useRef();
  const searchInputElementDeparture = useRef();

  const [fetchData, setFetchData] = useState([]);
  const [items, setItems] = useState([]);

  async function getData() {
    var url = "https://api.flightplandatabase.com/auto/generate";

    fetch(url, {
      body: '{"fromICAO":"EHAM","toICAO":"KJFK"}',
      method: "POST",
      headers: {
        Autorization: "Basic IXeuLFoRVX0lrF2m63tIbieX0VD7WgCaza0YR7eq:",
        "Content-Type": "application/json",
      },
    });
    const response = await fetch(``);
    let actualData = await response.json();
    console.log(actualData.data);
    //    setFetchData(actualData.data);
  }

  function makeRoute() {
    getData();
  }

  function makeSearch(itemName) {
    const searcher = new FuzzySearch(fetchData, [""], {
      caseSensitive: false,
    });
    console.log(fetchData);
    setItems(searcher.search(itemName));
  }

  return (
    <div className="App">
      <h1>Flight Planner</h1>
      {/* text input */}
      <label>departure</label>
      <input
        type="search"
        ref={searchInputElementDeparture}
        //onChange={(e) => makeSearch(e.target.value)}
        placeholder="type what you want here"
      />
      <div>
        <AirportNames items={items} />
      </div>
      <label>arryval</label>
      <input
        type="search"
        ref={searchInputElementArryval}
        //onChange={(e) => makeSearch(e.target.value)}
        placeholder="type what you want here"
      />
      <div>
        <AirportNames items={items} />
      </div>
      <button onClick={makeRoute}>Create Route</button>
      <MyMap />
    </div>
  );
}

export default App;
