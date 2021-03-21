import React, {Fragment, useState} from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import './StatsChart.css'

const StatsChart = (props) => {

    const {playerOneStats, playerTwoStats } = props;

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
                <YAxis type="number" domain={[0, 80]}/>
                <Tooltip cursor={false} />
            </LineChart>
        </Fragment>
    )
}

export default StatsChart;