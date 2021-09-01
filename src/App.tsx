import "./App.css"
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import DoPage from "./components/DoPage/DoPage"
import Technique from "./components/Technique/Technique"
import Activity from "./components/Activity/Activity"
import Example from "./components/Example/Example"
import Footer from "./components/Footer/Footer"
import About from "./components/About/About"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/do" component={DoPage} />
          <Route path="/techniques/:id" component={Technique} />
          <Route path="/examples/:id" component={Example} />
          <Route path="/activities/:id" component={Activity} />
          <Route path="/about" exact component={About} />
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App
