import { useState, useContext } from 'react';
import { GlobalContext } from '../App';


const ConstructorsItem = (props) => {
    let { handleConstructorPopup
    } = useContext(GlobalContext);

    return (
        <tr>
            {/* {console.log(props.data)} */}
            <th>{props.data.position}</th>
            <td>
                <a onClick={() => handleConstructorPopup(props.data.constructors.constructorId)} > {props.data.constructors.name} </a>
            </td>
            <td>{props.data.points}</td>
            <td>{props.data.wins}</td>
        </tr>
    );
}

export default ConstructorsItem;