import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles/App.css";
import { Home, About, Contact, Login } from "./pages";
import { Nav, Footer } from "./layout";

function App() {
  return (
    <div className="app_container">
      <Router>
        <Nav />

        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>

        <Route exact path="/">
          <Home />
        </Route>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
