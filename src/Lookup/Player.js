import axios from 'axios';
import React from 'react';
import './Player.css'


const Player = (props) => {

    const { id, firstName, lastName, position , setPlayer, setPlayerStats, setResults, setSearched} = props;


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

    const makeStatsRequestNew = (id, season) => {
        const options = {
            method: 'GET',
            url: 'https://api-nba-v1.p.rapidapi.com/players/statistics',
            params: {id: id, season: season},
            headers: {
              'X-RapidAPI-Key': 'ac51f32be0msh667db546ecb476ep1e1b64jsna2067267cb56',
              'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
            }
          };

        const promise = axios.request(options)
        const stats = promise.then( resp => resp.data.response)
        return stats;
    }

    //on player select, set player and get recent stats
    //filtering out games in which they did not play
    const handleClick = (event) => {
        event.preventDefault()
        setPlayer(firstName + " " + lastName)
        makeStatsRequestNew(id, 2022).then( (stats) => {
            console.log(stats)
            let recentStats = []
            let lastGame = stats.length - 1
            let enoughGames = true
            while (recentStats.length < 25) {
                if (stats.length == 0) {
                    enoughGames = false
                    setPlayerStats([])
                    setPlayer(firstName + " " + lastName + " (not qualified, min 25 games)")
                    break
                }
                let minPlayed = parseInt(stats[lastGame].min)
                let game = parseInt(stats[lastGame].gameId)
                //8784 is all-star game
                if (minPlayed > 0 && game != 8784) {
                    recentStats.unshift(stats[lastGame]);
                }
                lastGame -=1
                //if less than 25 career games played
                if (lastGame < 0) {
                    enoughGames = false
                    setPlayerStats([])
                    setPlayer(firstName + " " + lastName + " (not qualified, min 25 games)")
                    break
                }
            }
            if (enoughGames) {
                setPlayerStats(recentStats)
            }
            
        })
        //clear results
        setResults([])
        setSearched(false)
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
            <span className="secondary-content"> { position ?? "n/a" } </span> 
            </p>
        </li>
    )

}

export default Player;