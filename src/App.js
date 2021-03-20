import './App.css';
import Lookup from './Lookup/Lookup.js';
import React, { useState } from 'react';
import Averages from './Averages.js'
import StatsChart from './StatsChart.js'

function App() {

  const [playerOne, setPlayerOne] = useState(0);
  const [playerTwo, setPlayerTwo] = useState(0);

  const [playerOneStats, setPlayerOneStats] = useState([]);
  const [playerTwoStats, setPlayerTwoStats] = useState([]);

  //filter by number of games
  const numGames = 10;

  console.log(playerOneStats)

  return (
    <div className="container">
      <div className="row mySection">
        <div className="col s12 m6 l6 p1">
          <Lookup 
            setPlayer={setPlayerOne}
            setPlayerStats={setPlayerOneStats}
          />
        </div>
        <div className="col s12 m6 l6 p2">
          <Lookup 
            setPlayer={setPlayerTwo}
            setPlayerStats={setPlayerTwoStats}
          />
        </div>
      </div>
      <div className="mySection">
          <StatsChart 
            playerOneStats={playerOneStats}
            playerTwoStats={playerTwoStats}
          />
      </div>
      <div className="row mySection">
        <div className="col s12">
          <Averages
            playerOneStats={playerOneStats}
            playerTwoStats={playerTwoStats}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
