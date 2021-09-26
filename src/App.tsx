import "./App.css"
import Header from "./components/Header/Header"
import Home from "./components/pages/Home/Home"
import DoPage from "./components/pages/DoPage/DoPage"
import Technique from "./components/Technique/Technique"
import Activity from "./components/Activity/Activity"
import Example from "./components/Example/Example"
import Footer from "./components/Footer/Footer"
import About from "./components/pages/About/About"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Activities } from "./components/pages/Activities/Activities"
import { Methods } from "./components/pages/Methods/Methods"
import { QueryClient, QueryClientProvider } from "react-query"

const queryClient = new QueryClient()

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/do" component={DoPage} />
            <Route path="/methods" component={Methods} />
            <Route path="/methods/:id" component={Technique} />
            <Route path="/examples/:id" component={Example} />
            <Route path="/activities" exact component={Activities} />
            <Route path="/activities/:id" component={Activity} />
            <Route path="/about" exact component={About} />
          </Switch>
          <Footer />
        </Router>
      </QueryClientProvider>
    </div>
  )
}

export default App
