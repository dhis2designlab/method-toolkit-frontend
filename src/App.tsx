import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import LandingPage from "./components/LandingPage/LandingPage";
import DoPage from "./components/DoPage/DoPage";
import Technique from "./components/Technique/Technique";
import Activity from "./components/Activity/Activity";
import Example from "./components/Example/Example";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/do" component={DoPage} />
          <Route path="/techniques/:id" component={Technique} />
          <Route path="/examples/:id" component={Example} />
          <Route path="/activities/:id" component={Activity} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
