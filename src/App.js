import React from 'react';
import AppBar from './AppBar';
import NavList from './NavList';
import AppRouter from './AppRouter';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', position: 'absolute', top: 0, right: 0, bottom: 0, left: 0  }}>
      <NavList />
      <div style={{ flex: 1 }}>
        <AppBar />
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
