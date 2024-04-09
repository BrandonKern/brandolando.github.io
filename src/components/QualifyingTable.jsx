import QualifyingItem from "./QualifyingItem";
import { useState, useContext } from 'react';
import { GlobalContext } from "../App";

const QualifyingTable = (props) => {
    let { raceQualifyingInformation
    } = useContext(GlobalContext);

    const checkNull = () => {
        if (raceQualifyingInformation != null) {
            return (
                raceQualifyingInformation.map( m =>
                    <QualifyingItem key={m.position} data={m}/>)
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
                        <th></th>
                        <th>Q1</th>
                        <th>Q2</th>
                        <th>Q3</th>
                    </tr>
                </thead>
                <tbody>
                    {checkNull()}
                </tbody>
            </table>
        </div>
    )
}

export default QualifyingTable;