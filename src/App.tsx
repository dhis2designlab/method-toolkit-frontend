import "./App.css"
import Header from "./components/Header/Header"
import Home from "./components/pages/Home/Home"
import Method from "./components/Method/Method"
import Activity from "./components/Activity/Activity"
import Footer from "./components/Footer/Footer"
import About from "./components/pages/About/About"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Activities } from "./components/pages/Activities/Activities"
import { Methods } from "./components/pages/Methods/Methods"
import { QueryClient, QueryClientProvider } from "react-query"
import { Stories } from "./components/pages/Stories/Stories"
import Story from "./components/Story/Story"

const queryClient = new QueryClient()

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Router>
          <Header />
          <div className="Container">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/methods" exact component={Methods} />
              <Route path="/methods/:id" component={Method} />
              <Route path="/stories" exact component={Stories} />
              <Route path="/stories/:id" component={Story} />
              <Route path="/activities" exact component={Activities} />
              <Route path="/activities/:id" component={Activity} />
              <Route path="/about" exact component={About} />
            </Switch>
          </div>
          <Footer />
        </Router>
      </QueryClientProvider>
    </div>
  )
}

export default App
