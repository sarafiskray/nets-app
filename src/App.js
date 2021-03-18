import './App.css';
import Lookup from './Lookup/Lookup.js';
import React, { useState } from 'react';
import { LineChart, Line } from 'recharts';
import Averages from './Averages.js'

function App() {

  const [playerOne, setPlayerOne] = useState(0);
  const [playerTwo, setPlayerTwo] = useState(0);

  const [playerOneStats, setPlayerOneStats] = useState([]);
  const [playerTwoStats, setPlayerTwoStats] = useState([]);

  //filter by number of games
  const numGames = 10;

  console.log(playerOne, playerTwo);
  console.log(playerOneStats)
  console.log(playerTwoStats)

  return (
    <div className="container">
      <div className="row">
        <Lookup 
          setPlayer={setPlayerOne}
          setPlayerStats={setPlayerOneStats}
        />
        <Lookup 
          setPlayer={setPlayerTwo}
          setPlayerStats={setPlayerTwoStats}
        />
      </div>
      <div className="row">
        <Averages
          playerOneStats={playerOneStats}
          playerTwoStats={playerTwoStats}
        />
      </div>
    </div>
  );
}

export default App;
