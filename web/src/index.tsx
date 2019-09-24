import "./app/utils/css/reset.css";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

import {BrowserRouter as Router} from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import {App} from "./App";
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';

const client = new ApolloClient({
  uri: '/api/graphql'
});

// ReactDOM.render(
//   <ApolloProvider client={client}>
//     <Router>
//       <App/>
//     </Router>
//   </ApolloProvider>,
//   document.getElementById("root")
// );

const render = (Component:any) => {
  return ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <App/>
    </Router>
  </ApolloProvider>,
    document.getElementById('root')
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    render(NextApp);
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
