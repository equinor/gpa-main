import "./app/utils/css/reset.css";

import * as serviceWorker from "./serviceWorker";

import { BrowserRouter, Route, Router, Switch } from "react-router-dom";

// import { ApolloProvider } from "react-apollo";
import { HomePage } from "./app/pages/HomePage";
import { LoginPage } from "./app/pages/LoginPage";
import React from "react";
import ReactDOM from "react-dom";
// import { apolloClient } from "./app/api/endpoint";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

ReactDOM.render(
  // <ApolloProvider client={apolloClient}>
  <BrowserRouter>
    <Router history={history}>
      <Switch>
        <Route path="/login" component={LoginPage}></Route>
        <Route path="/" component={HomePage}></Route>
        <Route path="*" component={HomePage}></Route>
      </Switch>
    </Router>
  </BrowserRouter>,
  // </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
