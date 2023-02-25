import './App.css';
import Lookup from './Lookup/Lookup.js';
import React, { useState } from 'react';
import Averages from './Charts/Averages.js'
import StatsChart from './Charts/StatsChart.js'
import HexagonChart from './Charts/HexagonChart.js'

function App() {

  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");

  const [playerOneStats, setPlayerOneStats] = useState([]);
  const [playerTwoStats, setPlayerTwoStats] = useState([]);

  //filter by number of games
  const [numGames, setNumGames] = useState(5);

  const color1 = "purple";
  const color2 = "green"

  console.log(playerOneStats)
  console.log(playerTwo)

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
                  color={color1}
                />
              </div>
            </div>
          <div className="col s12 m6 l6 p2">
            <div className="card hoverable corners">
                <Lookup 
                  setPlayer={setPlayerTwo}
                  setPlayerStats={setPlayerTwoStats}
                  color={color2}
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
            //for legend
            playerOne={playerOne}
            playerTwo={playerTwo}
          />
        </div>
      </div>
      <div className="container ">
        <div className="card hoverable corners">
          {/* <HexagonChart 
            playerOneStats={playerOneStats}
            playerTwoStats={playerTwoStats}
            numGames = {numGames}
            setNumGames = {setNumGames}
            //for legend
            playerOne={playerOne}
            playerTwo={playerTwo}
          /> */}
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
