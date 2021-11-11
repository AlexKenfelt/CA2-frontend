import React, { useEffect, useState } from "react";
import facade from "../facades/apiFacade";
import LoggedIn from "../Loggedin";
import LogIn from "./Login";
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

export default function Home() {

    const [loggedIn, setLoggedIn] = useState(false)
 
    const logout = () => { facade.logout()
      setLoggedIn(false) } 
    const login = (user, pass) => {facade.login(user,pass)
      .then(res =>setLoggedIn(true));} 

    return (
        <div>
            <h2>This is a temporary home page, login to see additional features.</h2>
        {!loggedIn ? (<LogIn login={login} />) :
          (<div>
            <LoggedIn facade={facade} />
            <button onClick={logout}>Logout</button>
          </div>)}
      </div>
    );
  }