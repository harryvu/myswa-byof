import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //NavLink
} from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import Users from './components/Users'

import './App.css';

let harryProfile = "https://getsecretsfunc.azurewebsites.net/api/profile/1"
harryProfile = "/api/profile/1"

function App() {
  return (
    <Router>
        {/* <nav>
          <ul>
            <li>
              <NavLink to="/" exact>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/users">Users</NavLink>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users url={harryProfile} />
          </Route>
        </Switch>

    </Router>
  );
}

export default App;
