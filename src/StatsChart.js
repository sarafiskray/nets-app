import React, {Fragment, useState} from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import './StatsChart.css'

const StatsChart = (props) => {

    const {playerOneStats, playerTwoStats, numGames, setNumGames } = props;

    const [active, setActive] = useState("points");
  

    //make empty array
    let combinedStats = []
    for (let i = 0; i < 10; i++) {
            combinedStats.push({})
    }
    //populate w stats
    //wont render the line if no stats
    if (playerOneStats.length > 0) {
        for (let i = 0; i < 10; i++) {
            combinedStats[i].p1Pts = playerOneStats[i].points;
            combinedStats[i].p1Asts = playerOneStats[i].assists;
            combinedStats[i].p1Reb = playerOneStats[i].totReb;
            //can always add more
        }
    }
    if (playerTwoStats.length > 0) {
        for (let i = 0; i < 10; i++) {
            combinedStats[i].p2Pts = playerTwoStats[i].points;
            combinedStats[i].p2Asts = playerTwoStats[i].assists;
            combinedStats[i].p2Reb = playerTwoStats[i].totReb;
            //can always add more
        }
    }

    //console.log(combinedStats)

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

    const choose10Games = (e) => {
        e.preventDefault()
        setNumGames(10);
    }

    const choose25Games = (e) => {
        e.preventDefault()
        setNumGames(25);
    }

    //edit y -axis 
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
    }


    
    //use playerOneStats.length > 0 : jsx

    return (
        <Fragment>
            <div className="statChips center-align">
                <div className={ active == "points" ? "chip statSelected" : "chip"} onClick={choosePoints}>
                    Points
                </div>
                <div className={ active == "rebounds" ? "chip statSelected" : "chip"} onClick={chooseRebounds}>
                    Rebounds
                </div>
                <div className={ active == "assists" ? "chip statSelected" : "chip"} onClick={chooseAssists}>
                    Assists
                </div>
                {/* <div className = { numGames == 10 ? "chip statSelected" : "chip"} onClick={choose10Games}>
                    Last 10 Games
                </div>
                <div className = { numGames == 25 ? "chip statSelected" : "chip"} onClick={choose25Games}>
                    Last 25 Games
                </div> */}
            </div>
            <LineChart width={800} height = {400} data={combinedStats}>
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
                <XAxis tick = {false} />
                <YAxis type="number" domain={[0, checkActiveStat]}/>
                <Tooltip cursor={false} />
            </LineChart>
        </Fragment>
    )
}

export default StatsChart;