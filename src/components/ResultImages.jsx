import { useState, useContext } from 'react';
import { GlobalContext } from "../App";

const ResultImages = (props) => {
    let {supabase, 
        currentSeasonData, setCurrentSeasonData, 
        faveCircuits, setFaveCircuits, faveConstructors, setFaveConstructors, faveDrivers, setFaveDrivers,
        selectedDriver, setSelectedDriver, selectedConstructor, setSelectedConstructor, selectedCircuit, setSelectedCircuit,
        handleAboutClick, handleFaveClick, handleDriverPopup
    } = useContext(GlobalContext);

    let { raceResultInformation 
    } = useContext(GlobalContext);

    const checkNull = () => {
        if (raceResultInformation.length > 3) {
            return (
                <div className="columns">
                    <div className="column">
                        <img src="https://placehold.co/100x100"/>
                        <p><strong>First</strong></p>
                        <p><a onClick={() => handleDriverPopup(raceResultInformation[0].drivers.driverId)} > {raceResultInformation[0].drivers.forename} {raceResultInformation[0].drivers.surname}</a></p>
                    </div>
                    <div className="column">
                        <img src="https://placehold.co/100x100"/>
                        <p><strong>Second</strong></p>
                        <p><a onClick={() => handleDriverPopup(raceResultInformation[1].drivers.driverId)} > {raceResultInformation[1].drivers.forename} {raceResultInformation[1].drivers.surname}</a></p>
                    </div>
                    <div className="column">
                        <img src="https://placehold.co/100x100"/>
                        <p><strong>Third</strong></p>
                        <p><a onClick={() => handleDriverPopup(raceResultInformation[2].drivers.driverId)} > {raceResultInformation[2].drivers.forename} {raceResultInformation[2].drivers.surname}</a></p>
                    </div>  
                </div>
            )
        } else {
            return ;
        }
    }
    return checkNull();
}

export default ResultImages;