import React, { useState, Fragment } from 'react';
import axios from 'axios';
import Search from './Search.js'

const Lookup = () => {

    const [fName, setfName] = useState('');
    const [lName, setlName] = useState('');


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

    let searchResults = []

    const searchfName = event => {
        event.preventDefault();

        fNameOptions['url'] += fName;
        axios.request(fNameOptions)
        .then ( resp => {
            searchResults = resp.data.api.players
            console.log(searchResults)
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
            searchResults = resp.data.api.players
            console.log(searchResults)
        })
        .catch ( err => {
            console.log(err)
        })
    } 

   
    return (
        <Search 
            fName = {fName}
            lName = {lName}
            setfName = {setfName}
            setlName = {setlName}
            searchlName = {searchlName}
            searchfName = {searchfName}
        />
    )
}

export default Lookup;
