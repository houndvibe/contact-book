import React from "react";
import { Route, Switch } from "react-router-dom";
import "./css/App.css";
import Nav from "./components/Nav";
import MainWrapper from "./wrappers/MainWrapper";
import ContactsPage from "./components/ContactsPage";
import InfoPage from "./components/InfoPage";

function App() {
  let routes = (
    <Switch>
      <Route path="/contacts" exact component={ContactsPage} />
      <Route path="/" exact component={InfoPage} />
    </Switch>
  );

  return (
    <div className="App">
      <Nav />
      <MainWrapper>{routes}</MainWrapper>
    </div>
  );
}

export default App;
