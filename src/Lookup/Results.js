import React from 'react';

const Results = (props) => {

    const {listPlayers} = props;

    return(
        <ul className="collection highlight">
            { listPlayers }
        </ul>
    )
}

export default Results;