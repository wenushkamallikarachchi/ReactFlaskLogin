import React, { useRef } from "react";
import loginScreen from "./components/loginScreen"
import newAccScreen from "./components/newAccScreen"
import Landing from "./Landing";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        {/* <Switch>
          <Link to="/model"></Link>
        </Switch> */}
        <Switch>
          <Link to="/login"></Link>
        </Switch>
        <Switch>
          <Link to="/CreateNewAccount"></Link>
        </Switch>
        {/* <Route path="/model" component={Model}></Route> */}
        <Route path="/login" component={loginScreen}></Route>
        <Route path="/CreateNewAccount" component={newAccScreen}></Route>
        <Route path="/" exact component={Landing}></Route>
      </Router>
    </div>
  );
}

export default App;
