import axios from 'axios';
import React from 'react';
import './Player.css'


const Player = (props) => {

    const { id, firstName, lastName, teamId , setPlayer, setPlayerStats, setResults} = props;


    //use to show team in search results
    const teams = {
        1: "ATL",
        2: "BOS",
        4: "BKN",
        5: "CHA",
        6: "CHI",
        7: "CLE",
        8: "DAL",
        9: "DEN",
        10: "DET",
        11: "GSW",
        14: "HOU",
        15: "IND",
        16: "LAC",
        17: "LAL",
        19: "MEM",
        20: "MIA",
        21: "MIL",
        22: "MIN",
        23: "NOP",
        24: "NYK",
        25: "OKC",
        26: "ORL",
        27: "PHI",
        28: "PHX",
        29: "POR",
        30: "SAC",
        31: "SAS",
        38: "TOR",
        40: "UTA",
        41: "WAS"
    }


    const statsOptions = {
        method: 'GET',
        url: 'https://api-nba-v1.p.rapidapi.com/statistics/players/playerId/',
        headers: {
          'x-rapidapi-key': 'ac51f32be0msh667db546ecb476ep1e1b64jsna2067267cb56',
          'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com'
        }
      };

    //make stats request, return promise
    const makeStatsRequest = () => {
        statsOptions['url'] += id
        const promise = axios.request(statsOptions)
        const stats = promise.then( resp => resp.data.api.statistics)
        .catch( err => {console.log(err)})
        return stats;
    }

    //on player select, set player and get recent stats
    //filtering out games in which they did not play
    const handleClick = (event) => {
        event.preventDefault()
        setPlayer(firstName + " " + lastName)
        makeStatsRequest().then( (stats) => {
            let recentStats = []
            let lastGame = stats.length - 1
            while (recentStats.length < 25) {
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
        //clear results
        setResults([])
    }

    //get team short name, to display in search results
    const teamShortName = (team) => {
        if (team in teams) {
            return teams[team];
        }
        else {
            return "n/a";
        }
    }


    return (
        <li className="collection-item" onClick={handleClick}>
            <p> {firstName} {lastName} 
            {/* uncomment this to show team name in search results
            some players are in the database who are no longer in the NBA */}
            <span className="secondary-content"> { teamShortName(teamId) } </span> 
            </p>
        </li>
    )

}

export default Player;