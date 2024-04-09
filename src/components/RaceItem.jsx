import { useState, useContext } from 'react';
import { GlobalContext } from "../App";


const RaceItem = (props) => {

    let {supabase, setInformationSide, setInformationCircuit,
        setraceDriverInformation, setRaceConstructorInformation, 
        setraceQualifyingInformation, setraceResultInformation
        } = useContext(GlobalContext);

    async function selectDriverStandingForRaceCallAPI(raceId) {
        setraceDriverInformation([]);
        const {data, error} = await supabase
        .from('driver_standing')
        .select(`
        driverStandingsId,
        drivers (driverId, driverRef, code, forename, surname),
        races!inner(name, round, year, date),
        points, position, positionText, wins
        `)
        .eq('races.raceId', raceId)
        .order('position', { ascending: true });
        if (error) {
            console.error('Error fetching drivers:', error);
                return;
            }
        if (data.length === 0 ) {
            console.log("Did not find the requested data")
        } else {
            // console.log(data);
            setraceDriverInformation(data);
        }
    }
    
    async function selectConstructorStandingForRaceCallAPI(raceId) {
        setRaceConstructorInformation([]);
        const {data, error} = await supabase
        .from('constructor_standing')
        .select(`
        constructorStandingsId,
        races!inner(name, round, year, date),
        constructors(constructorId, name, constructorRef, nationality),
        points, position, positionText, wins
        `)
        .eq('races.raceId', raceId)
        .order('position', { ascending: true });
        if (error) {
            console.error('Error fetching constructors:', error);
                return;
            }
        if (data.length === 0 ) {
            console.log("Did not find the requested data")
        } else {
            // console.log(data);
            setRaceConstructorInformation(data);
        }
    }

    async function selectQualifyingForRaceCallAPI(raceId) {
        setraceQualifyingInformation([]);
        const {data, error} = await supabase
        .from('qualifying')
        .select(`
        qualifyId, number,
        drivers (driverId, driverRef, code, forename, surname),
        races (name, round, year, date),
        constructors (constructorId, name, constructorRef, nationality),
        position, q1, q2, q3
        `)
        .eq('raceId', raceId)
        .order('position', { ascending: true });
        if (error) {
            console.error('Error fetching constructors:', error);
                return;
            }
        if (data.length === 0 ) {
            console.log("Did not find the requested data")
        } else {
            // console.log(data);
            setraceQualifyingInformation(data);
        }
    }
    
    async function selectResultsForRaceCallAPI(raceId) {
        setraceResultInformation([]);
        const {data, error} = await supabase
        .from('results')
        .select(`
        resultId, number, grid, position, positionText, positionOrder, points, laps, time, milliseconds, fastestLap, rank, fastestLapTime, fastestLapSpeed,
        statusId, 
        drivers(driverId, driverRef, code, forename, surname),
        races(raceId, name, round, year, date),
        constructors(constructorId, name, constructorRef, nationality)
        `)
        .eq('raceId', raceId)
        .order('grid', { ascending: true });
        if (error) {
            console.error('Error fetching constructors:', error);
                return;
            }
        if (data.length === 0 ) {
            console.log("Did not find the requested data")
        } else {
            // console.log(data);
            setraceResultInformation(data);
        }
    }

    const handleClickResults = () => {
        setInformationSide(2);
        setInformationCircuit(props.data);
        selectConstructorStandingForRaceCallAPI(props.data.raceId);
        selectDriverStandingForRaceCallAPI(props.data.raceId);
        selectQualifyingForRaceCallAPI(props.data.raceId);
        selectResultsForRaceCallAPI(props.data.raceId);
    }

    const handleClickStandings = () => {
        setInformationSide(1);
        setInformationCircuit(props.data);
        selectConstructorStandingForRaceCallAPI(props.data.raceId);
        selectDriverStandingForRaceCallAPI(props.data.raceId);
        selectQualifyingForRaceCallAPI(props.data.raceId);
        selectResultsForRaceCallAPI(props.data.raceId);
    }

    return (
        <tr>
            <th>{props.data.round}</th>
            <td>{props.data.name}</td>
            <td><button onClick={handleClickResults} className="button is-link is-small">Results</button></td>
            <td><button onClick={handleClickStandings} className="button is-link is-small">Standings</button></td>
        </tr>
    );
}

export default RaceItem;