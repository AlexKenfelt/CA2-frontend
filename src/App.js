import React, { useState,useEffect } from "react"
import facade from "./apiFacade";
import LoggedIn from "./Loggedin";
import LogIn from "./Login";
import Home from './home';
import Header from './header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch, 
  NavLink,
  Prompt
} from "react-router-dom";
 

function App() {
  return (
    <div>
  <Header />
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
  </Switch>
    </div>
  );
 
}
export default App;

/* <div>
      {!loggedIn ? (<LogIn login={login} />) :
        (<div>
          <LoggedIn facade={facade} />
          <button onClick={logout}>Logout</button>
        </div>)}
    </div>
*/