//require dependencies and components
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
//declaring the funcitonal component called App and rendering the different components
//We are using the Route method to be able to go to different web pages
function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/saved" component={Saved} />
          {/*catch all renders NoMatch */}
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}
//exporting App
export default App;
