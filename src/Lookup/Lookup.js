import React, { useState, Fragment } from 'react';
import axios from 'axios';
import Search from './Search.js'
import Results from './Results.js'
import Player from './Player.js'

const Lookup = (props) => {

    const {setPlayer, setPlayerStats} = props;

    const [fName, setfName] = useState('');
    const [lName, setlName] = useState('');

    const [results, setResults] = useState([]);

    let fNameOptions = {
        method: 'GET',
        url: 'https://api-nba-v1.p.rapidapi.com/players/firstName/',
        headers: {
          'x-rapidapi-key': 'ac51f32be0msh667db546ecb476ep1e1b64jsna2067267cb56',
          'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com'
        }
      };
    
    let lNameOptions = {
        method: 'GET',
        url: 'https://api-nba-v1.p.rapidapi.com/players/lastName/',
        headers: {
          'x-rapidapi-key': 'ac51f32be0msh667db546ecb476ep1e1b64jsna2067267cb56',
          'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com'
        }
      };

    const searchfName = event => {
        event.preventDefault();

        fNameOptions['url'] += fName;
        axios.request(fNameOptions)
        .then ( resp => {
            setResults(resp.data.api.players)
            
        })
        .catch ( err => {
            console.log(err)
        })

    }

    const searchlName = event => {
        event.preventDefault()
        
        lNameOptions['url'] += lName;
        axios.request(lNameOptions)
        .then ( resp => {
            setResults(resp.data.api.players)
        })
        .catch ( err => {
            console.log(err)
        })
    } 

    let listPlayers
    if (results.length > 0) {
        listPlayers = results.map ( item => {
            return (
                <Player 
                    key={item.playerId}
                    id = {item.playerId}
                    firstName = {item.firstName}
                    lastName = {item.lastName}
                    teamId = {item.teamId}
                    setPlayer = {setPlayer}
                    setPlayerStats = {setPlayerStats}
                />
            )
        })  
    } 
    else {
        listPlayers = []
    }
    //console.log(listPlayers)
   
    return (
        <Fragment>
            <Search 
                fName = {fName}
                lName = {lName}
                setfName = {setfName}
                setlName = {setlName}
                searchlName = {searchlName}
                searchfName = {searchfName}
            />
            <Results 
                listPlayers = {listPlayers}
            />
        </Fragment>
    )
}

export default Lookup;
