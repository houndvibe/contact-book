import React from "react";
import { Route, Switch } from "react-router-dom";
import "./css/App.css";
import Nav from "./components/Nav";
import Container from "./components/Container";
import ContactsPage from "./components/ContactsPage";
import InfoPage from "./components/InfoPage";


function App() {
  let routes = (
    <Switch>
      <Route path="/" exact component={InfoPage} />
      <Route path="/contacts" component={ContactsPage} />
    </Switch>
  );

  return (
    <div className="App">
      <Nav />
      <Container>{routes}</Container>
    </div>
  );
}

export default App;
