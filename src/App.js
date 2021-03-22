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
  const [numGames, setNumGames] = useState(10);


  console.log(playerOneStats)
  console.log(playerTwoStats)


  return (
    <div className="grey lighten-4">
      <div className="top">
        <div className="container">
          <div className="row mySection">
            <div className="col s12 m6 l6 p1">
              <div className="card hoverable corners">
                <Lookup 
                  setPlayer={setPlayerOne}
                  setPlayerStats={setPlayerOneStats}
                />
              </div>
            </div>
          <div className="col s12 m6 l6 p2">
            <div className="card hoverable corners">
                <Lookup 
                  setPlayer={setPlayerTwo}
                  setPlayerStats={setPlayerTwoStats}
                  numGames={numGames}
                />
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container ">
        <div className="card hoverable corners">
          <StatsChart 
            playerOneStats={playerOneStats}
            playerTwoStats={playerTwoStats}
            numGames = {numGames}
            setNumGames = {setNumGames}
          />
        </div>
      </div>
      <div className="container mySection">
        <div className="card hoverable corners">
          <Averages
            playerOneStats={playerOneStats}
            playerTwoStats={playerTwoStats}
            numGames = {numGames}
          />
        </div>
      </div> 
    </div>
  );
}

export default App;
