import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import LandingPage from "./components/LandingPage/LandingPage";
import DoPage from "./components/DoPage/DoPage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <LandingPage />
      <DoPage />
      <Footer />
    </div>
  );
}

export default App;
