import React from 'react';
import './Averages.css'

const Averages = (props) => {

    const {playerOneStats, playerTwoStats, numGames} = props;

    console.log(numGames)

    const calculateAvgs = (stats) => {
        //think about what to return if no player is selected
        //empty object or object with all stats set to zero
        let avgs = {
            assists: 0,
            blks: 0,
            min: 0,
            pts: 0,
            stls: 0,
            to: 0,
            rebounds: 0,
            fgp: 0,
            tpp: 0,
            plusMinus: 0
        }
        if (stats.length > 0) {
            let totalAssists = 0;
            let totalBlks = 0;
            let totalMin = 0;
            let totalPts = 0;
            let totalStls = 0;
            let totalTo = 0;
            let totalRebounds = 0;
            let totalFga = 0;
            let totalFgm = 0;
            let totalTpa = 0;
            let totalTpm = 0;
            let totalPlusMinus = 0
            //calculate totals
            for (let i = 25 - numGames; i < stats.length; i++) {
                totalAssists += parseInt(stats[i].assists)
                totalBlks += parseInt(stats[i].blocks)
                totalMin += parseInt(stats[i].min)
                totalPts += parseInt(stats[i].points)
                totalStls += parseInt(stats[i].steals)
                totalTo += parseInt(stats[i].turnovers)
                totalRebounds += parseInt(stats[i].totReb)
                totalFga += parseInt(stats[i].fga)
                totalFgm += parseInt(stats[i].fgm)
                totalTpa += parseInt(stats[i].tpa)
                totalTpm += parseInt(stats[i].tpm)
                totalPlusMinus += parseInt(stats[i].plusMinus)
            }
            //change to div by numGames
            avgs['assists'] = (totalAssists / numGames).toFixed(1)
            avgs['blks'] = (totalBlks / numGames).toFixed(1)
            avgs['min'] = (totalMin / numGames).toFixed(1)
            avgs['pts'] = (totalPts / numGames).toFixed(1)
            avgs['stls'] = (totalStls / numGames).toFixed(1)
            avgs['to'] = (totalTo / numGames).toFixed(1)
            avgs['rebounds'] = (totalRebounds / numGames).toFixed(1)
            avgs['fgp'] = ((totalFgm / totalFga) * 100).toFixed(1)
            avgs['tpp'] = ((totalTpm / totalTpa) * 100).toFixed(1)
            avgs['plusMinus'] = totalPlusMinus
            return avgs
        }
        else {
            return avgs
        }
    }

    let playerOneAvgs = calculateAvgs(playerOneStats)
    let playerTwoAvgs = calculateAvgs(playerTwoStats)

    return (
        <table className="centered highlight">
            <tbody>
                <tr>
                    <td className="pl1">{ playerOneAvgs["pts"] }</td>
                    <td>PPG</td>
                    <td className="pl2">{ playerTwoAvgs["pts"] }</td>
                </tr>
                <tr>
                    <td className="pl1">{ playerOneAvgs["rebounds"] }</td>
                    <td>RPG</td>
                    <td className="pl2">{ playerTwoAvgs["rebounds"] }</td>
                </tr>
                <tr>
                    <td className="pl1">{ playerOneAvgs["assists"] }</td>
                    <td>APG</td>
                    <td className="pl2">{ playerTwoAvgs["assists"] }</td>
                </tr>
                <tr>
                    <td className="pl1">{ playerOneAvgs["stls"] }</td>
                    <td>SPG</td>
                    <td className="pl2">{ playerTwoAvgs["stls"] }</td>
                </tr>
                <tr>
                    <td className="pl1">{ playerOneAvgs["blks"] }</td>
                    <td>BPG</td>
                    <td className="pl2">{ playerTwoAvgs["blks"] }</td>
                </tr>
                <tr>
                    <td className="pl1">{ playerOneAvgs["to"] }</td>
                    <td>TOPG</td>
                    <td className="pl2">{ playerTwoAvgs["to"] }</td>
                </tr>
                <tr>
                    <td className="pl1">{ playerOneAvgs["min"] }</td>
                    <td>MPG</td>
                    <td className="pl2">{ playerTwoAvgs["min"] }</td>
                </tr>
                <tr>
                    <td className="pl1">{ playerOneAvgs["fgp"] }</td>
                    <td>FG %</td>
                    <td className="pl2">{ playerTwoAvgs["fgp"] }</td>
                </tr>
                <tr>
                    <td className="pl1">{ playerOneAvgs["tpp"] }</td>
                    <td>3P %</td>
                    <td className="pl2">{ playerTwoAvgs["tpp"] }</td>
                </tr>
                <tr>
                    <td className="pl1">{ playerOneAvgs["plusMinus"] }</td>
                    <td>Total +/-</td>
                    <td className="pl2">{ playerTwoAvgs["plusMinus"] }</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Averages;