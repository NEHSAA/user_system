import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import AppBar from './AppBar';
import NavList from './NavList';
import AppContent from './AppContent';
import NEHSApp from './reducers'

const store = createStore(
  NEHSApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div style={{ display: 'flex', flexDirection: 'row', position: 'absolute', top: 0, right: 0, bottom: 0, left: 0 }}>
          <NavList />
          <div style={{ flex: 1 }}>
            <AppBar />
            <AppContent />
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
