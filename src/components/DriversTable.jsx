import DriversItem from "./DriversItem";
import { useState, useContext } from 'react';
import { GlobalContext } from "../App";

const DriversTable = (props) => {
    let { raceDriverInformation
    } = useContext(GlobalContext);

    const checkNull = () => {
        if (raceDriverInformation != null) {
            return (
                raceDriverInformation.map( m =>
                    <DriversItem key={m.position} data={m}/>)
            )
        } else {
            return ;
        }
    }

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Pos</th>
                        <th></th>
                        <th>Pts</th>
                        <th>Wins</th>
                    </tr>
                </thead>
                <tbody>
                    {checkNull()}
                </tbody>
            </table>
        </div>
    )
}

export default DriversTable;