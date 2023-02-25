import axios from 'axios';
import React, {Fragment, useState} from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

const HexagonChart = (props) => {

    const {playerOneStats, playerTwoStats, numGames, setNumGames, playerOne, playerTwo} = props;

    const [playerOneAverages, setPlayerOneAverages] = useState({});
    const [playerTwoAverages, setPlayerTwoAverages] = useState({});

    const calculateAverage = (statsList, statToAverage) => {
        const total = statsList.reduce((sum, item) => sum + item[statToAverage], 0);
        const average = total / statsList.length;
        return average;
      }

    
    

    

}