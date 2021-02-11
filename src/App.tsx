import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import LandingPage from "./components/LandingPage/LandingPage";
import DoPage from "./components/DoPage/DoPage";
import DisplayPage from "./components/DisplayPage/DisplayPage";
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
          <Route path="/techniques/:id" component={DisplayPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
