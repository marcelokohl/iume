import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';

import './config/ReactotronConfig';

import { Provider } from 'react-redux';
import { CookieAlert } from './components';

import { Router } from 'react-router-dom';
import Routes from './routes';

import history from './services/history';

import './App.scss';
import config from './config';

import { store, persistor }   from './store';

function App() {
  config.set('profile', 'admin')
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
          {localStorage.getItem('cookies_enabled') === null &&
            <CookieAlert />
          }
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
