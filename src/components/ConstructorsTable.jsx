import ConstructorsItem from "./ConstructorsItem";
import { useState, useContext } from 'react';
import { GlobalContext } from "../App";

const ConstructorsTable = (props) => {
    let { raceConstructorInformation
    } = useContext(GlobalContext);

    const checkNull = () => {
        if (raceConstructorInformation != null) {
            return (
                raceConstructorInformation.map( m =>
                    <ConstructorsItem key={m.position} data={m}/>)
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

export default ConstructorsTable;