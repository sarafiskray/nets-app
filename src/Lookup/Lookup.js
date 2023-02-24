import React, { useState, Fragment } from 'react';
import axios from 'axios';
import Search from './Search.js'
import Results from './Results.js'
import Player from './Player.js'

const Lookup = (props) => {

    const {setPlayer, setPlayerStats, color} = props;

    const [fName, setfName] = useState('');
    const [lName, setlName] = useState('');

    const [results, setResults] = useState([]);

    const [searched, setSearched] = useState(false);

    const searchLastNameNew = event => {
        event.preventDefault();
        performSearchRequest(lName);
    }

    const performSearchRequest = (inputString) => {
        const searchOptions = {
            method: 'GET',
            url: 'https://api-nba-v1.p.rapidapi.com/players',
            headers: {
              'X-RapidAPI-Key': 'ac51f32be0msh667db546ecb476ep1e1b64jsna2067267cb56',
              'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
            },
            params: {
                search: inputString
            }
        };

        axios.request(searchOptions)
        .then((response) => {
            console.log(response);
            setResults(response.data.response);
            setSearched(true);
          })
        .catch((error) => {
            console.log("fail!")          
        });
    }

    // //API V1

    // let fNameOptions = {
    //     method: 'GET',
    //     url: 'https://api-nba-v1.p.rapidapi.com/players/firstName/',
    //     headers: {
    //       'x-rapidapi-key': 'ac51f32be0msh667db546ecb476ep1e1b64jsna2067267cb56',
    //       'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com'
    //     }
    //   };
    
    // let lNameOptions = {
    //     method: 'GET',
    //     url: 'https://api-nba-v1.p.rapidapi.com/players/lastName/',
    //     headers: {
    //       'x-rapidapi-key': 'ac51f32be0msh667db546ecb476ep1e1b64jsna2067267cb56',
    //       'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com'
    //     }
    //   };

    // //make request by first name
    // const searchfName = event => {
    //     event.preventDefault();

    //     fNameOptions['url'] += fName;
    //     axios.request(fNameOptions)
    //     .then ( resp => {
    //         setResults(resp.data.api.players)
    //         setSearched(true)
            
    //     })
    //     .catch ( err => {
    //         console.log(err)
    //     })

    // }

    // //make request by last name
    // const searchlName = event => {
    //     event.preventDefault()
        
    //     lNameOptions['url'] += lName;
    //     axios.request(lNameOptions)
    //     .then ( resp => {
    //         setResults(resp.data.api.players)
    //         setSearched(true)
    //     })
    //     .catch ( err => {
    //         console.log(err)
    //     })
    // } 

    //console.log(searched)

    //convert search results to array of Players
    let listPlayers
    if (results.length > 0) {
        listPlayers = results.map ( item => {
            return (
                <Player 
                //these have been changed in an attempt to get the v2 to work - will stop v1 from working
                    key={item.id}
                    id = {item.id}
                    firstName = {item.firstname}
                    lastName = {item.lastname}
                    //teamId = {item.teamId}
                    position = {item.leagues?.standard?.pos}
                    setPlayer = {setPlayer}
                    setPlayerStats = {setPlayerStats}
                    setResults = {setResults}
                    setSearched = {setSearched}
                />
            )
        })  
    } 
    else {
        listPlayers = []
    }

   
    return (
        <Fragment>
            <Search 
                // fName = {fName}
                lName = {lName}
                setfName = {setfName}
                setlName = {setlName}
                searchlName = {searchLastNameNew}
                // searchfName = {searchfName}
                color = {color}
            />
            <Results 
                listPlayers = {listPlayers}
                searched = {searched}
            />
        </Fragment>
    )
}

export default Lookup;
