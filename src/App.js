import logo from './logo.svg';
import './App.css';
import Lookup from './Lookup/Lookup.js';
import React, { useState } from 'react';

function App() {

  const [playerOne, setPlayerOne] = useState(0);
  const [playerTwo, setPlayerTwo] = useState(0);

  
  

  return (
    <div className="App">
      <Lookup 
        setPlayerOne={setPlayerOne}
        //handleClick={handleClick}
      />
    </div>
  );
}

export default App;
