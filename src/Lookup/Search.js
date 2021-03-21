import React, { Fragment } from 'react';
import './Search.css'

const Search = (props) => {

    const {fName, lName, setfName, setlName, searchfName, searchlName} = props;
    
    return (
    <Fragment>
        <div className="col s5">
        <form onSubmit={searchfName}>
            <input
                value={fName}
                onChange={event => setfName(event.target.value)}
                placeholder="First Name"
            />
            <button className="btn grey" type="submit">Go</button>
        </form>
        </div>
        <p className="col s2">OR</p>
        <div className="col s5">
        <form onSubmit={searchlName}>
            <input
                value={lName}
                onChange={event => setlName(event.target.value)}
                placeholder="Last Name"
            />
            <button className="btn grey" type="submit">Go</button>
        </form>
        </div>
    </Fragment>
    )
}

export default Search;