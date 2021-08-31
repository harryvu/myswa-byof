import React from "react";
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import { loginRequest, msalConfig } from "./authConfig"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from './components/Home'
import About from './components/About'
import Users from './components/Users'
import './App.css';
import SignInButton from "./components/SignInButton";

let harryProfile = "https://byofapp.azurewebsites.net/api/profile/1"
harryProfile = "/api/profile/1"

function App() {
  return (
    <Router>
        <UnauthenticatedTemplate>
          <SignInButton />
        </UnauthenticatedTemplate>

        <Navigation />
        
        <AuthenticatedTemplate>
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
        </AuthenticatedTemplate>
        

    </Router>
  );
}

export default App;
