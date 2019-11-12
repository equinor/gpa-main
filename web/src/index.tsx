import './app/utils/css/reset.css';
import './index.css';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import React from 'react';
import AzureAD, { AuthenticationState } from 'react-aad-msal';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import { authProvider } from './app/auth/authProvider';
import { StateProvider } from './app/context/Context';
import * as serviceWorker from './serviceWorker';

const client = new ApolloClient({
  request: async operation => {
    const token = await authProvider.getAccessToken();
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token.accessToken}` : '',
      },
    });
  },
  uri: '/api/graphql'
});

const render = (Component: any) => {
  return ReactDOM.render(
    <AzureAD provider={authProvider} forceLogin={true}>
      {({ accountInfo, authenticationState }: any) => {
        if (authenticationState === AuthenticationState.Authenticated) {
          return (
            <StateProvider accountInfo={accountInfo.account}>
              <ApolloProvider client={client}>
                <Router>
                  <App />
                </Router>
              </ApolloProvider>
            </StateProvider>
          )
        }
        else {
          return null;
        }
      }}
    </AzureAD>
    ,
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
