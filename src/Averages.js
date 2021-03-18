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
            avgs['fgp'] = totalFgm / totalFga
            avgs['tpp'] = totalTpm / totalTpa
            avgs['plusMinus'] = totalPlusMinus
            return avgs
        }
        else {
            return avgs
        }
    }

    let playerOneAvgs = calculateAvgs(playerOneStats)
    let playerTwoAvgs = calculateAvgs(playerTwoStats)
    console.log(playerOneAvgs)
    console.log(playerTwoAvgs)

    return (
        <div>[Averages here]</div>
    )
}

export default Averages;