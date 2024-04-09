import ResultItem from "./ResultItem";
import ResultImages from "./ResultImages";
import { useState, useContext } from 'react';
import { GlobalContext } from "../App";

const ResultsTable = (props) => {
    let { raceResultInformation 
    } = useContext(GlobalContext);

    const checkNull = () => {
        if (raceResultInformation != null) {
            return (
                raceResultInformation.map( m =>
                    <ResultItem key={m.resultId} data={m}/>)
            )
        } else {
            return ;
        }
    }

    return (
        <div>
            <div>
                <ResultImages/>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Pos</th>
                        <th></th>
                        <th></th>
                        <th>Laps</th>
                        <th>Pts</th>
                    </tr>
                </thead>
                <tbody>
                    {checkNull()}
                </tbody>
            </table>
        </div>
    )
}

export default ResultsTable;
