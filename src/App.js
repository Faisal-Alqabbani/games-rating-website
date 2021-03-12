// https://my-game-b67ec.web.app
import React from "react";
// Components
import Home from "./pages/Home";
import Nav from "./components/Nav";
// Global Style
import GlobalStyles from "./components/GlobalStyles";
//  Route
import { Route } from "react-router-dom";
function App() {
  return (
    <div>
      <GlobalStyles />
      <Nav />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
