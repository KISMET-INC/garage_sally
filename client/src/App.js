import './App.css';
import React, { useState } from 'react';
import {Router} from '@reach/router';
import Main from './views/Main';
import Context from './context/Context.js'

// TRICKLE DOWN STATE

function App() {
  const [updateView, setUpdateView] = useState(false)
      

  return (
    <div className="App">
      <p> I am the APP</p>
      <Context.Provider value= {{updateView, setUpdateView}}>
        <Router>
          <Main path="/" />
        </Router>
      </Context.Provider>
      </div>
  );
}

export default App;
