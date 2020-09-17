import React from "react";
import "./App.module.css";

//importing components
import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";

import { fetchData } from "./api/index";

class App extends React.Component {
  state = {
    data: {}
  };

  async componentDidMount() {
    const data = await fetchData();
  }

  render() {
    return (
      <div className="container">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <Cards />
        <Chart />
        <CountryPicker />
      </div>
    );
  }
}
export default App;
