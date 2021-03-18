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
        statsOptions['url'] += id
        axios.request(statsOptions)
        .then ( resp => {
            let stats = resp.data.api.statistics
            let recentStats = []
            let lastGameIndex = stats.length - 1
            while (recentStats.length < 10) {
                //still need to check if player played in game + all star
                recentStats.unshift(stats[lastGameIndex])
                lastGameIndex -=1
            }
            setPlayerStats(recentStats)
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