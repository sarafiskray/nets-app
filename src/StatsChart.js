import React from 'react';
import { LineChart, Line, XAxis, YAxis } from 'recharts';

const StatsChart = (props) => {

    const {playerOneStats, playerTwoStats } = props;

  

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

    
    //use playerOneStats.length > 0 : jsx

    return (
        <LineChart width={800} height = {400} data={combinedStats}>
            { playerOneStats.length > 0 ? (
            <Line type="monotone" dataKey="p1Pts" stroke="grey" />
            ) : null }
            <XAxis />
            <YAxis type="number" domain={[0, 80]}/>
        </LineChart>
    )
}

export default StatsChart;