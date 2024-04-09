import RaceItem from "./RaceItem";
import { useState, useContext } from 'react';
import { GlobalContext } from "../App";

const RaceTable = (props) => {

    let { currentSeasonData
        } = useContext(GlobalContext);

    const provideYear = () => {
        if (currentSeasonData != 0) {
            return currentSeasonData[0].year;
        } else {
            return 0;
        }
    }

    return (
        <div>
            <h1><strong>{provideYear()} Races</strong></h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Rnd</th>
                        <th>Name</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {currentSeasonData.map( m =>
                        <RaceItem key={m.round} data={m}/>)}
                </tbody>
            </table>
        </div>
    )
}

export default RaceTable;
