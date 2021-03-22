import axios from 'axios';
import React from 'react';
import './Player.css'


const Player = (props) => {

    const { id, firstName, lastName, teamId , setPlayer, setPlayerStats, setResults} = props;


    const statsOptions = {
        method: 'GET',
        url: 'https://api-nba-v1.p.rapidapi.com/statistics/players/playerId/',
        headers: {
          'x-rapidapi-key': 'ac51f32be0msh667db546ecb476ep1e1b64jsna2067267cb56',
          'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com'
        }
      };

    const makeStatsRequest = () => {
        statsOptions['url'] += id
        const promise = axios.request(statsOptions)
        const stats = promise.then( resp => resp.data.api.statistics)
        .catch( err => {console.log(err)})
        return stats;
    }

    const handleClick = (event) => {
        event.preventDefault()
        setPlayer(id)
        makeStatsRequest().then( (stats) => {
            let recentStats = []
            let lastGame = stats.length - 1
            while (recentStats.length < 10) {
                let minPlayed = parseInt(stats[lastGame].min)
                let game = parseInt(stats[lastGame].gameId)
                //8784 is all-star game
                if (minPlayed > 0 && game != 8784) {
                    recentStats.unshift(stats[lastGame]);
                }
                lastGame -=1
            }
            setPlayerStats(recentStats)
        })
        setResults([])
    }


    return (
        <li className="collection-item" onClick={handleClick}>
            <p> {firstName} {lastName} </p>
        </li>
    )

}

export default Player;