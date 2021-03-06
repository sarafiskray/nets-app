import React from 'react';
import './Search.css'

const Search = (props) => {

    const {fName, lName, setfName, setlName, searchfName, searchlName, color} = props;
    
    return (
    <div className="searches">
        <div className="col s5">
        <form onSubmit={searchfName}>
            <input
                value={fName}
                onChange={event => setfName(event.target.value)}
                placeholder="First Name"
            />
            <button className={ color == "purple" ? "btn z-depth-0 waves-effect waves-purple" : "btn z-depth-0 waves-effect waves-green" } type="submit">Go</button>
        </form>
        </div>
        <p className="col s2 center-align">OR</p>
        <div className="col s5">
        <form onSubmit={searchlName}>
            <input
                value={lName}
                onChange={event => setlName(event.target.value)}
                placeholder="Last Name"
            />
            <button className={ color == "purple" ? "btn z-depth-0 waves-effect waves-purple" : "btn z-depth-0 waves-effect waves-green" } type="submit">Go</button>
        </form>
        </div>
    </div>
    )
}

export default Search;