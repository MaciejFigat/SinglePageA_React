import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles/App.css";
import { Home, About, Contact, Login, Technology } from "./pages";
import { Nav, Footer } from "./layout";
import { ThemeProvider } from "styled-components";

import SvgThemeButton from "./components/SvgThemeButton";

import { GlobalStyle, lightTheme, darkTheme } from "./styles/GlobalStyles";

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");
  const handleClickCounter = () => {
    if (currentTheme === "light") {
      setCurrentTheme("dark");
    } else {
      setCurrentTheme("light");
    }
  };

  return (
    <ThemeProvider theme={currentTheme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />

      <div className="app_container">
        <Router>
          <Nav />
          <button
            onClick={handleClickCounter}
            style={{
              position: "fixed",
              top: "10",
              right: "0",
              width: "50px",
              height: "50px",
              background: "transparent",
              outline: "none",
              border: "none",
            }}
          >
            <SvgThemeButton currentTheme={currentTheme} />
          </button>
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>

            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/technology">
              <Technology />
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
    </ThemeProvider>
  );
}

export default App;
