import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BlogDetails from "./BlogDetails";
import Error404 from "./Error404";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/create">
              <Create />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/blog/:id">
              <BlogDetails />
            </Route>
            <Route>
              <Error404 />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
