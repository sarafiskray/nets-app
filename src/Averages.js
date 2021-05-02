import React, { Fragment } from 'react';
import './Averages.css'
import { Tabs, Tab } from "react-materialize"

const Averages = (props) => {

    const {playerOneStats, playerTwoStats, numGames} = props;

    console.log(numGames)

    const calculateAvgs = (stats) => {
        //avgs object with stats set to 0
        let avgs = {
            assists: 0,
            blks: 0,
            min: 0,
            pts: 0,
            stls: 0,
            to: 0,
            rebounds: 0,
            totFgm: 0,
            totFga: 0,
            fgp: 0,
            totTpm: 0,
            totTpa: 0,
            tpp: 0,
            plusMinus: 0,
            assists36: 0,
            blks36: 0,
            pts36: 0,
            stls36: 0,
            to36: 0,
            rebounds36: 0,
            fgm36: 0,
            fga36: 0,
            tpm36: 0,
            tpa36: 0
        }
        // if stats, sum totals and calculate averages
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
            //average
            avgs['assists'] = (totalAssists / numGames).toFixed(1)
            avgs['blks'] = (totalBlks / numGames).toFixed(1)
            avgs['min'] = (totalMin / numGames).toFixed(0)
            avgs['pts'] = (totalPts / numGames).toFixed(1)
            avgs['stls'] = (totalStls / numGames).toFixed(1)
            avgs['to'] = (totalTo / numGames).toFixed(1)
            avgs['rebounds'] = (totalRebounds / numGames).toFixed(1)
            avgs['totFgm'] = totalFgm
            avgs['totFga'] = totalFga
            avgs['fgp'] = ((totalFgm / totalFga) * 100).toFixed(1)
            avgs['totTpm'] = totalTpm
            avgs['totTpa'] = totalTpa
            // should still return 0 if no 3s attempted
            avgs['tpp'] = totalTpa > 0 ? ((totalTpm / totalTpa) * 100).toFixed(1) : (0).toFixed(1)
            avgs['plusMinus'] = totalPlusMinus

            //calculate per 36 stats

            avgs['assists36'] = ((totalAssists / totalMin) * 36).toFixed(1);
            avgs['blks36'] = ((totalBlks / totalMin) * 36).toFixed(1)
            avgs['pts36'] = ((totalPts / totalMin) * 36).toFixed(1)
            avgs['stls36'] = ((totalStls / totalMin) * 36).toFixed(1)
            avgs['to36'] = ((totalTo / totalMin) * 36).toFixed(1)
            avgs['rebounds36'] = ((totalRebounds / totalMin) * 36).toFixed(1)
            avgs['fgm36'] = ((totalFgm / totalMin) * 36).toFixed(1)
            avgs['fga36'] = ((totalFga / totalMin) * 36).toFixed(1)
            avgs['tpm36'] = ((totalTpm / totalMin) * 36).toFixed(1)
            avgs['tpa36'] = ((totalTpa / totalMin) * 36).toFixed(1)



            return avgs
        }
        else {
            return avgs
        }
    }

    let playerOneAvgs = calculateAvgs(playerOneStats)
    let playerTwoAvgs = calculateAvgs(playerTwoStats)

     //per36 = totalStat / totalMinutes   * 36


     //M.AutoInit();

    return (

            <Tabs className="center-align">
                <Tab
                    options={{
                    duration: 300,
                    onShow: null,
                    responsiveThreshold: Infinity,
                    swipeable: false
                    }}
                    title="Per Game"
                >
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
                </Tab>
                <Tab
                    options={{
                    duration: 300,
                    onShow: null,
                    responsiveThreshold: Infinity,
                    swipeable: false
                    }}
                    title="Per 36"
                >
                    <table className="centered highlight">
                        <tbody>
                            <tr>
                                <td className="pl1">{ playerOneAvgs["pts36"] }</td>
                                <td>PPG</td>
                                <td className="pl2">{ playerTwoAvgs["pts36"] }</td>
                            </tr>
                            <tr>
                                <td className="pl1">{ playerOneAvgs["rebounds36"] }</td>
                                <td>RPG</td>
                                <td className="pl2">{ playerTwoAvgs["rebounds36"] }</td>
                            </tr>
                            <tr>
                                <td className="pl1">{ playerOneAvgs["assists36"] }</td>
                                <td>APG</td>
                                <td className="pl2">{ playerTwoAvgs["assists36"] }</td>
                            </tr>
                            <tr>
                                <td className="pl1">{ playerOneAvgs["stls36"] }</td>
                                <td>SPG</td>
                                <td className="pl2">{ playerTwoAvgs["stls36"] }</td>
                            </tr>
                            <tr>
                                <td className="pl1">{ playerOneAvgs["blks36"] }</td>
                                <td>BPG</td>
                                <td className="pl2">{ playerTwoAvgs["blks36"] }</td>
                            </tr>
                            <tr>
                                <td className="pl1">{ playerOneAvgs["to36"] }</td>
                                <td>TOPG</td>
                                <td className="pl2">{ playerTwoAvgs["to36"] }</td>
                            </tr>
                            <tr>
                                <td className="pl1">{ playerOneAvgs["fgm36"] }</td>
                                <td>FGM</td>
                                <td className="pl2">{ playerTwoAvgs["fgm36"] }</td>
                            </tr>
                            <tr>
                                <td className="pl1">{ playerOneAvgs["fga36"] }</td>
                                <td>FGA</td>
                                <td className="pl2">{ playerTwoAvgs["fga36"] }</td>
                            </tr>
                            <tr>
                                <td className="pl1">{ playerOneAvgs["tpm36"] }</td>
                                <td>3PM</td>
                                <td className="pl2">{ playerTwoAvgs["tpm36"] }</td>
                            </tr>
                            <tr>
                                <td className="pl1">{ playerOneAvgs["tpa36"] }</td>
                                <td>3PA</td>
                                <td className="pl2">{ playerTwoAvgs["tpa36"] }</td>
                            </tr>
                        </tbody>
                    </table>
                </Tab>
            </Tabs>
        

    )
}

export default Averages;