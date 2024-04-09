import { useState, useContext } from 'react';
import { GlobalContext } from '../App';

const QualifyingItem = (props) => {
    let {handleDriverPopup, handleConstructorPopup
    } = useContext(GlobalContext);

    return (
        <tr>
            <th>{props.data.position}</th>
            <td>
                <a onClick={() => handleDriverPopup(props.data.drivers.driverId)} > {props.data.drivers.forename} {props.data.drivers.surname}</a>
            </td>
            <td>
                <a onClick={() => handleConstructorPopup(props.data.constructors.constructorId)} > {props.data.constructors.name} </a>
            </td>
            <td>{props.data.q1}</td>
            <td>{props.data.q2}</td>
            <td>{props.data.q3}</td>
        </tr>
    );
}

export default QualifyingItem;