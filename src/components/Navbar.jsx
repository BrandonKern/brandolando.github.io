// source:   https://bulma.io/documentation/components/navbar/
// Brandon Kern, Landon Odishaw-Dyck
import { useState, useContext } from 'react';
import { GlobalContext } from '../App';

/*
Functionality of This Components:

Anything that is strictly to do with the navbar.  
Some functionality of the navbar is put into 'app.jsx' 
because it must interact with popups/modals, which are 
triggered throughout the program, not just from the navbar.

*/

const Navbar = (props) => {
    
    // grab globalContext data
    // grab globalContext data
    let {supabase, 
      currentSeasonData, setCurrentSeasonData, 
      faveCircuits, setFaveCircuits, faveConstructors, setFaveConstructors, faveDrivers, setFaveDrivers,
      selectedDriver, setSelectedDriver, selectedConstructor, setSelectedConstructor, selectedCircuit, setSelectedCircuit,
      handleAboutClick, handleFaveClick, handleDriverPopup
      } = useContext(GlobalContext);
    
    async function selectSeasonCallAPI(year) {
        const { data, error } = await supabase
        .from('races')
        .select(`*, circuits(circuitId, name)`)
        .eq('year', year)
        .order('round', { ascending: true } );
        if (error) {
            console.error('Error fetching seasons:', error);
              return;
            }
        if (data.length === 0 ) {
            console.log("Did not find the requested data")
        } else {
            setCurrentSeasonData(data);
        }
    }

    let [currentSelection, setCurrentSelection] = useState('Select a Season');
    const handleDropdownClick = (year) => {
        setCurrentSelection(year);
        selectSeasonCallAPI(year);
    };
    
    // const [aboutModalVisible, setAboutModalVisible] = useState(false);
    // const handleAboutClick = () => {
    //     setAboutModalVisible(!aboutModalVisible);
    // }

    // const [faveModalVisible, setFaveModalVisible] = useState(false);
    // const handleFaveClick = () => {
    //     setFaveModalVisible(!faveModalVisible);
    // }




    // Generate years from 2000 to 2023 to populate dropdown
    const years = Array.from({length: 2024 - 2000}, (v, k) => k + 2000);

    //Populate lists of faves
    // {faveDrivers.map((driver) => (
    //     <li key={year} className="" onClick={() => handleDriverPopup(year.toString())}> {driver} </li>
    // ))}

    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <p className="navbar-item">
           Season
          </p>
      
          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                {currentSelection}
              </a>

              <div className="navbar-dropdown" style={{ maxHeight: '200px', overflowY: 'scroll'}}>
              {years.map((year) => (
                  <a key={year} className="navbar-item" onClick={() => handleDropdownClick(year.toString())}> {year} </a>
              ))}
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-light" onClick={() => handleFaveClick()}>
                  <strong>Favorites</strong>
                </a>
                <a className="button is-light" onClick={() => handleAboutClick()}>
                <strong>About</strong>
                </a>
              </div>
            </div>
          </div>
        </div>

      </nav>
      
      )

    }
    


export default Navbar;