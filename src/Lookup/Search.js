import React from 'react';
import './Search.css'

const Search = (props) => {

    const {lName, setlName, searchlName, color} = props;
    
    //the new search component will just have one search (by last name)
    //also, for the button, we can plug the color into the className, no need for the conditional
    return (
    <div className="searches">

        <div className="col s12">
        <form onSubmit={searchlName}>
            <input
                value={lName}
                onChange={event => setlName(event.target.value)}
                placeholder="Last Name"
            />
            <button className={ color == "purple" ? "btn z-depth-0 waves-effect waves-" + color : "btn z-depth-0 waves-effect waves-green" } type="submit">Search</button>
        </form>
        </div>
    </div>
    )
}

export default Search;