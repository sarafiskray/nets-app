import React, { Fragment } from 'react';

const Search = (props) => {

    const {fName, lName, setfName, setlName, searchfName, searchlName} = props;
    
    return (
    <Fragment>
        <form onSubmit={searchfName}>
            <input
                value={fName}
                onChange={event => setfName(event.target.value)}
                placeholder="First Name"
            />
            <button className="btn grey" type="submit">Search by first name</button>
        </form>
        <p className="center-align">OR</p>
        <form onSubmit={searchlName}>
            <input
                value={lName}
                onChange={event => setlName(event.target.value)}
                placeholder="Last Name"
            />
            <button className="btn grey" type="submit">Search by last name</button>
        </form>
    </Fragment>
    )
}

export default Search;