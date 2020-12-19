import React from "react";
import "./App.css";
import {
  NavLink,
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="main-container">
          <header className="header">
            <ul className="links">
              <NavLink
                exact
                activeStyle={{ borderBottom: "1px solid #fff" }}
                to="/"
                className="link"
              >
                Home
              </NavLink>
              <NavLink
                activeStyle={{ borderBottom: "1px solid #fff" }}
                to="/about"
                className="link"
              >
                About
              </NavLink>
              <NavLink
                activeStyle={{ borderBottom: "1px solid #fff" }}
                to="/projects"
                className="link"
              >
                Projects
              </NavLink>
            </ul>
          </header>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
