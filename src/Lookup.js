import React, { useState, Fragment } from 'react';

const Lookup = () => {

    const [fName, setfName] = useState('');
    const [lName, setlName] = useState('');

    const fNameURL = 'https://api-nba-v1.p.rapidapi.com/players/firstName/'
    const lNameURL = 'https://api-nba-v1.p.rapidapi.com/players/lastName/'

    const searchfName = event => {
        event.preventDefault()
        console.log(fName)
    }

    const searchlName = event => {
        event.preventDefault()
        console.log(lName)
    }

    return (
        <Fragment>
            <form onSubmit={searchfName}>
                <input
                    value={fName}
                    onChange={event => setfName(event.target.value)}
                    placeholder="First Name"
                />
                <button type="submit">Search by first name</button>
            </form>
            <form onSubmit={searchlName}>
                <input
                    value={lName}
                    onChange={event => setlName(event.target.value)}
                    placeholder="Last Name"
                />
                <button type="submit">Search by last name</button>
            </form>
        </Fragment>
    )
}

export default Lookup;
