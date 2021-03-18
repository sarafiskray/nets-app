import axios from 'axios';
import React from 'react';

const Player = (props) => {

    const { id, firstName, lastName, teamId , setPlayer, setPlayerStats} = props;

    const statsOptions = {
        method: 'GET',
        url: 'https://api-nba-v1.p.rapidapi.com/statistics/players/playerId/',
        headers: {
          'x-rapidapi-key': 'ac51f32be0msh667db546ecb476ep1e1b64jsna2067267cb56',
          'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com'
        }
      };

    const handleClick = (event) => {
        event.preventDefault()
        setPlayer(id)
        //also set player stats
        //where to make api call?
        statsOptions['url'] += id
        axios.request(statsOptions)
        .then ( resp => {
            console.log(resp)
            let stats = resp.data.api.statistics
            //temporary
            setPlayerStats(stats.slice(stats.length - 10, stats.length))

        })
        .catch ( err => {
            console.log(err)
        })
    }


    return (
        <li onClick={handleClick}>
            <p> {firstName} {lastName}</p>
        </li>
    )

}

export default Player;