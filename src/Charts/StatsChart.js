import axios from 'axios';
import React, {Fragment, useState} from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import './StatsChart.css'

const StatsChart = (props) => {

    const {playerOneStats, playerTwoStats, numGames, setNumGames, playerOne, playerTwo} = props;

    const [active, setActive] = useState("points");

     //headers for request by game, currently this request isnt being made
     const gameOptions = {
        method: 'GET',
        url: 'https://api-nba-v1.p.rapidapi.com/games/gameId/',
        headers: {
          'x-rapidapi-key': 'ac51f32be0msh667db546ecb476ep1e1b64jsna2067267cb56',
          'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com'
        }
      };

     //made this function to display game date and teams played on hover of chart
     const getGameData = (game) => {
        gameOptions['url'] += game;
        axios.request(gameOptions)
        .then( (resp) => {
            let gameData = resp.data.api.games[0]
            let gameDate = gameData.startTimeUTC.slice(0, 10) 
            let homeTeam = gameData.hTeam.shortName
            let awayTeam = gameData.vTeam.shortName
            let gameDetails = awayTeam + " vs. " + homeTeam + ", " + gameDate
            console.log(gameDetails)
            return gameDetails
        }) 
    }
  

    
    //make array to hold stats for chart
    let combinedStats = []
    
    switch(numGames) {
        case 5:
            for (let i = 0; i < 5; i++) {
                    combinedStats.push({})
            }
            break
        case 10:
            for (let i = 0; i < 10; i++) {
                    combinedStats.push({})
            }
            break
        case 25:
            for (let i = 0; i < 25; i++) {
                combinedStats.push({})
            }
            break
        //no default 
    }
    //populate w stats
    //wont render the line if no stats
    if (playerOneStats.length > 0) {
        let x = 0;
        for (let i = 25 - numGames; i < 25; i++) {
            combinedStats[x].p1Pts = playerOneStats[i].points;
            combinedStats[x].p1Asts = playerOneStats[i].assists;
            combinedStats[x].p1Reb = playerOneStats[i].totReb;
            //combinedStats[x].p1Game = getGameData(playerOneStats[i].gameId);
            combinedStats[x].p1Tpm = playerOneStats[i].tpm;
            x += 1;
            //any other stats that you want a visualization of
            //can be added here
        }
    }
    if (playerTwoStats.length > 0) {
        let x = 0;
        for (let i = 25 - numGames; i < 25; i++) {
            combinedStats[x].p2Pts = playerTwoStats[i].points;
            combinedStats[x].p2Asts = playerTwoStats[i].assists;
            combinedStats[x].p2Reb = playerTwoStats[i].totReb;
            //combinedStats[x].p2Game = getGameData(playerTwoStats[i].gameId);
            combinedStats[x].p2Tpm = playerTwoStats[i].tpm;
            x += 1;
            //any other stats that you want a visualization of
            //can be added here
        }
    }

    console.log(combinedStats)

    const choosePoints = (e) => {
        e.preventDefault()
        setActive("points")
    }

    const chooseRebounds = (e) => {
        e.preventDefault()
        setActive("rebounds")
    }

    const chooseAssists = (e) => {
        e.preventDefault()
        setActive("assists")
    }

    const chooseTpm = (e) => {
        e.preventDefault()
        setActive("3PM")
    }

    const choose5Games = (e) => {
        e.preventDefault()
        setNumGames(5);
    }

    const choose10Games = (e) => {
        e.preventDefault()
        setNumGames(10);
    }

    const choose25Games = (e) => {
        e.preventDefault()
        setNumGames(25);
    }

    //edit y -axis scale based on chosen stat
    const checkActiveStat = () => {
        if (active == "points") {
            return 70;
        }
        if (active == "rebounds") {
            return 40;
        }
        if (active == "assists") {
            return 30;
        }
        if (active == "3PM") {
            return 15;
        }
    }

   

    //make chips their own component

    return (
        <Fragment>
            <div className="statChips center-align">
                <div className={ active == "points" ? "chip statSelected" : "chip notSelected"} onClick={choosePoints}>
                    Points
                </div>
                <div className={ active == "rebounds" ? "chip statSelected" : "chip notSelected"} onClick={chooseRebounds}>
                    Rebounds
                </div>
                <div className={ active == "assists" ? "chip statSelected" : "chip notSelected"} onClick={chooseAssists}>
                    Assists
                </div>
                <div className={ active == "3PM" ? "chip statSelected" : "chip notSelected"} onClick={chooseTpm}>
                    3P Made
                </div>
                <div className = { numGames == 5 ? "chip statSelected" : "chip notSelected"} onClick={choose5Games}>
                    Last 5 Games
                </div>
                <div className = { numGames == 10 ? "chip statSelected" : "chip notSelected"} onClick={choose10Games}>
                    Last 10 Games
                </div>
                <div className = { numGames == 25 ? "chip statSelected" : "chip notSelected"} onClick={choose25Games}>
                    Last 25 Games
                </div>
            </div>
            <ResponsiveContainer width="100%" height={400}>
                <LineChart data={combinedStats} margin={{ top: 5, right: 50, bottom: 20, left: 0 }}>
                    { playerOneStats.length > 0 && active == "points" ? (
                    <Line type="monotone" dataKey="p1Pts" stroke="purple"/>
                    ) : null }
                    { playerTwoStats.length > 0 && active == "points" ? (
                    <Line type="monotone" dataKey="p2Pts" stroke="green" />
                    ) : null }
                    { playerOneStats.length > 0 && active == "rebounds" ? (
                    <Line type="monotone" dataKey="p1Reb" stroke="purple"/>
                    ) : null }
                    { playerTwoStats.length > 0 && active == "rebounds" ? (
                    <Line type="monotone" dataKey="p2Reb" stroke="green" />
                    ) : null }
                    { playerOneStats.length > 0 && active == "assists" ? (
                    <Line type="monotone" dataKey="p1Asts" stroke="purple"/>
                    ) : null }
                    { playerTwoStats.length > 0 && active == "assists" ? (
                    <Line type="monotone" dataKey="p2Asts" stroke="green" />
                    ) : null }
                    { playerOneStats.length > 0 && active == "3PM" ? (
                    <Line type="monotone" dataKey="p1Tpm" stroke="purple"/>
                    ) : null }
                    { playerTwoStats.length > 0 && active == "3PM" ? (
                    <Line type="monotone" dataKey="p2Tpm" stroke="green" />
                    ) : null }
                    <XAxis tick = {false} />
                    <YAxis type="number" domain={[0, checkActiveStat]}/>
                    <Tooltip 
                        cursor={false} 
                        labelFormatter = { (label) => ""}
                        formatter= { (name, value) => [name, active] }
                        //content = { <CustomTooltip />}
                        
                    />
                    <Legend 
                        align="center"
                        //added this bc legend appeared slightly off center
                        wrapperStyle={{left: 30}}
                        verticalAlign="bottom" 
                        iconType="line"
                        payload={
                            [
                            { id: 'p1', value: playerOne, type: "line", color: 'purple' },
                            { id: 'p2', value: playerTwo, type: 'line', color: 'green'}
                            ]
                        }
                    />
                </LineChart>
            </ResponsiveContainer>
        </Fragment>
    )
}

export default StatsChart;