import axios from 'axios';
import React, {Fragment, useState} from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend } from 'recharts';

const HexagonChart = (props) => {

    const {playerOneStats, playerTwoStats, numGames, setNumGames, playerOne, playerTwo} = props;

    // const [playerOneAverages, setPlayerOneAverages] = useState({pts: 0.0, def: 0.0, reb: 0.0, ast: 0.0, min: 0.0, to: 0.0});
    // const [playerTwoAverages, setPlayerTwoAverages] = useState({pts: 0.0, def: 0.0, reb: 0.0, ast: 0.0, min: 0.0, to: 0.0});

    const calculateAverage = (statsList, statToAverage, numGames) => {
        statsList = statsList.slice(-numGames);
        console.log(statsList)
        const total = statsList.reduce((sum, item) => sum + parseInt(item[statToAverage]), 0);
        const average = total / statsList.length;
        return average;
      }

    let playerOneAverages = {pts: 0.0, def: 0.0, reb: 0.0, ast: 0.0, min: 0.0, to: 0.0};
    let playerTwoAverages = {pts: 0.0, def: 0.0, reb: 0.0, ast: 0.0, min: 0.0, to: 0.0};   
    
    if (playerOneStats.length > 0) {
      playerOneAverages = 
        {
          pts: calculateAverage(playerOneStats, "points", numGames),
          def: calculateAverage(playerOneStats, "steals", numGames) + calculateAverage(playerOneStats, "blocks", numGames),
          reb: calculateAverage(playerOneStats, "totReb", numGames),
          ast: calculateAverage(playerOneStats, "assists", numGames), 
          min: calculateAverage(playerOneStats, "min", numGames),
          to: calculateAverage(playerOneStats, "turnovers", numGames)
        }
    }

    if (playerTwoStats.length > 0) {
      playerTwoAverages = 
        {
          pts: calculateAverage(playerTwoStats, "points", numGames),
          def: calculateAverage(playerTwoStats, "steals", numGames) + calculateAverage(playerTwoStats, "blocks", numGames),
          reb: calculateAverage(playerTwoStats, "totReb", numGames),
          ast: calculateAverage(playerTwoStats, "assists", numGames), 
          min: calculateAverage(playerTwoStats, "min", numGames),
          to: calculateAverage(playerTwoStats, "turnovers", numGames)
        }
    }

    console.log(playerOneAverages);

    let data = [
      {
        "stat": "Points",
        "p1": playerOneAverages.pts,
        "p2": playerTwoAverages.pts
      },
      {
        "stat": "Assists",
        "p1": playerOneAverages.ast * 2,
        "p2": playerTwoAverages.ast * 2
      },
      {
        "stat": "Rebounds",
        "p1": playerOneAverages.reb * 2,
        "p2": playerTwoAverages.reb * 2
      },
      {
        "stat": "Turnovers",
        "p1": playerOneAverages.to * 2,
        "p2": playerTwoAverages.to * 2
      },
      {
        "stat": "Minutes",
        "p1": playerOneAverages.min,
        "p2": playerTwoAverages.min
      },
      {
        "stat": "Steals + Blocks",
        "p1": playerOneAverages.def * 2,
        "p2": playerTwoAverages.def * 2
      }
    ]

      return (
        <ResponsiveContainer width="100%" height={400}>
          <RadarChart outerRadius={90} width={730} height={250} data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="stat" />
            <PolarRadiusAxis tick={false} angle={30} domain={[0, 'dataMax']} />
            <Radar name={playerOne ?? ""} dataKey="p1" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            <Radar name={playerTwo ?? ""} dataKey="p2" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
            <Legend />
          </RadarChart>
        </ResponsiveContainer>
      )    
}

export default HexagonChart;