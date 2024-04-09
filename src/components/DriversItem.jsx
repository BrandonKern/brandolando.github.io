import { useState, useContext } from 'react';
import { GlobalContext } from '../App';
const DriversItem = (props) => {

    let {handleDriverPopup
    } = useContext(GlobalContext);

    return (
        <tr>
            <th>{props.data.position}</th>
            <td>
                <a onClick={() => handleDriverPopup(props.data.drivers.driverId)} > {props.data.drivers.forename} {props.data.drivers.surname}</a>
            </td>
            <td>{props.data.points}</td>
            <td>{props.data.wins}</td>
        </tr>
    );
}

export default DriversItem;