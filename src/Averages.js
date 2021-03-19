import React from 'react';

const Averages = (props) => {

    const {playerOneStats, playerTwoStats} = props;

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
            for (let i = 0; i < stats.length; i++) {
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
            avgs['assists'] = totalAssists / 10
            avgs['blks'] = totalBlks / 10
            avgs['min'] = totalMin / 10
            avgs['pts'] = totalPts / 10
            avgs['stls'] = totalStls / 10
            avgs['to'] = totalTo / 10
            avgs['rebounds'] = totalRebounds / 10
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
        <table className="centered">
            <tbody>
                <tr>
                    <td>{ playerOneAvgs["pts"] }</td>
                    <td>PPG</td>
                    <td>{ playerTwoAvgs["pts"] }</td>
                </tr>
                <tr>
                    <td>{ playerOneAvgs["rebounds"] }</td>
                    <td>RPG</td>
                    <td>{ playerTwoAvgs["rebounds"] }</td>
                </tr>
                <tr>
                    <td>{ playerOneAvgs["assists"] }</td>
                    <td>APG</td>
                    <td>{ playerTwoAvgs["assists"] }</td>
                </tr>
                <tr>
                    <td>{ playerOneAvgs["stls"] }</td>
                    <td>SPG</td>
                    <td>{ playerTwoAvgs["stls"] }</td>
                </tr>
                <tr>
                    <td>{ playerOneAvgs["blks"] }</td>
                    <td>BPG</td>
                    <td>{ playerTwoAvgs["blks"] }</td>
                </tr>
                <tr>
                    <td>{ playerOneAvgs["to"] }</td>
                    <td>TOPG</td>
                    <td>{ playerTwoAvgs["to"] }</td>
                </tr>
                <tr>
                    <td>{ playerOneAvgs["min"] }</td>
                    <td>MPG</td>
                    <td>{ playerTwoAvgs["min"] }</td>
                </tr>
                <tr>
                    <td>{ playerOneAvgs["fgp"] }</td>
                    <td>FG %</td>
                    <td>{ playerTwoAvgs["fgp"] }</td>
                </tr>
                <tr>
                    <td>{ playerOneAvgs["tpp"] }</td>
                    <td>3P %</td>
                    <td>{ playerTwoAvgs["tpp"] }</td>
                </tr>
                <tr>
                    <td>{ playerOneAvgs["plusMinus"] }</td>
                    <td>Total +/-</td>
                    <td>{ playerTwoAvgs["plusMinus"] }</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Averages;