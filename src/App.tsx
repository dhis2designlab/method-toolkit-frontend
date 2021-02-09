import React from "react";
import "./App.css";
import DisplayPage from "./components/DisplayPage/DisplayPage";

function App() {
  return (
    <div className="App">
      <h1>DHIS2 Method Toolkit</h1>
      <DisplayPage id={"Interview"}/>
    </div>
  );
}

export default App;
