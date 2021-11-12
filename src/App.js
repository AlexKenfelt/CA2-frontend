import React, { useState,useEffect } from "react"
import facade from "./facades/apiFacade";
import LoggedIn from "./Loggedin";
import LogIn from "./components/Login";
import Home from './components/home';
import Header from './components/header';
import User from "./components/user";
import Admin from "./components/admin";
<<<<<<< HEAD


=======
>>>>>>> 26492a26e4bb6c0ddb69f7a3c55bb96d500f00a4
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
<<<<<<< HEAD
    <Route path="/user">
        <User/>
    </Route>
    <Route path="/admin">
        <Admin/>
=======
    <Route exact path="/user">
      <User/>
    </Route>
    <Route exact path="/admin">
      <Admin/>
>>>>>>> 26492a26e4bb6c0ddb69f7a3c55bb96d500f00a4
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