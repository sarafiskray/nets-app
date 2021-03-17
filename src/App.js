import logo from './logo.svg';
import './App.css';
import Lookup from './Lookup/Lookup.js';
import React, { useState } from 'react';
import axios from 'axios';

function App() {

  const [playerOne, setPlayerOne] = useState(0);
  const [playerTwo, setPlayerTwo] = useState(0);

  const statsOptions = {
    method: 'GET',
    url: 'https://api-nba-v1.p.rapidapi.com/statistics/players/playerId/',
    headers: {
      'x-rapidapi-key': 'ac51f32be0msh667db546ecb476ep1e1b64jsna2067267cb56',
      'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com'
    }
  };

  let numGames = 10;

  const getPlayerOneStats = async () => {
    let resp
    if (playerOne > 0) {
      statsOptions['url'] += playerOne
      let resp = await axios.request(statsOptions)
      return await resp.data.api.statistics;
      
    }
    else {
      return []
    }
  }

  getPlayerOneStats().then( stats => {
    if (stats.length > 0) {
      let playerOneStats = []
      let lastGameIndex = stats.length - 1
      while (playerOneStats.length < numGames) {
        let lastGame = stats[lastGameIndex]
        //works, except when try to get min played above 0
        //if (lastGame["min"] > 0) {
        playerOneStats.push(lastGame)
        //}
        lastGameIndex -= 1;
      }
      console.log(playerOneStats) 
    }
  })
  .catch( err => {
    console.log(err)
  })
     
  
  console.log(playerOne)

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
