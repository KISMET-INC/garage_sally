import './App.css';
import React, { useState } from 'react';
import {Router} from '@reach/router';
import Main from './views/Main';
import Context from './context/Context.js'
import Home from './views/Home';
import Dashboard from './views/Dashboard';
import AllSales from './views/AllSales';
import LoginReg from './views/LoginReg';
import Detail from './views/Detail';

// TRICKLE DOWN STATE

function App() {
  const [updateView, setUpdateView] = useState(false)
      

  return (
    <div className="App">
      <Context.Provider value= {{updateView, setUpdateView}}>
        <Router>
          <Home path="/" />
          <Dashboard path="/dashboard" />
          <Detail path = "/sale/:sale_id" />
          <AllSales path = "/sales/"/>
          <LoginReg path ="/start" />
        </Router>
      </Context.Provider>
      </div>
  );
}

export default App;
