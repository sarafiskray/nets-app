import React, { useState, Fragment } from 'react';
import axios from 'axios';

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

export default Search;