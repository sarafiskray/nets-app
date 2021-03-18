import logo from './logo.svg';
import './App.css';
import Lookup from './Lookup/Lookup.js';
import React, { useState } from 'react';
import axios from 'axios';

function App() {

  const [playerOne, setPlayerOne] = useState(0);
  const [playerTwo, setPlayerTwo] = useState(0);

  const [playerOneStats, setPlayerOneStats] = useState([]);
  const [playerTwoStats, setPlayerTwoStats] = useState([]);


  const statsOptions = {
    method: 'GET',
    url: 'https://api-nba-v1.p.rapidapi.com/statistics/players/playerId/',
    headers: {
      'x-rapidapi-key': 'ac51f32be0msh667db546ecb476ep1e1b64jsna2067267cb56',
      'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com'
    }
  };

  //filter by number of games
  const numGames = 10;

  console.log(playerOne, playerTwo);
  console.log(playerOneStats)
  console.log(playerTwoStats)

  return (
    <div className="App">
      <Lookup 
        setPlayer={setPlayerOne}
        setPlayerStats={setPlayerOneStats}
      />
      <Lookup 
        setPlayer={setPlayerTwo}
        setPlayerStats={setPlayerTwoStats}
      />
    </div>
  );
}

export default App;
