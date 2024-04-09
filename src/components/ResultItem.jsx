import { useState, useContext } from 'react';
import { GlobalContext } from '../App';

const ResultItem = (props) => {
    let { handleDriverPopup, handleConstructorPopup
    } = useContext(GlobalContext);

    

    return (
        <tr>
            <th>{props.data.grid}</th>
            <td>
                <a onClick={() => handleDriverPopup(props.data.drivers.driverId)} > {props.data.drivers.forename} {props.data.drivers.surname}</a>
            </td>
            <td>
                <a onClick={() => handleConstructorPopup(props.data.constructors.constructorId)} > {props.data.constructors.name} </a>
            </td>
            <td>{props.data.laps}</td>
            <td>{props.data.points}</td>
        </tr>
    );
}

export default ResultItem;