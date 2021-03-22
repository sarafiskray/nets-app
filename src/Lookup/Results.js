import React from 'react';

const Results = (props) => {

    const {listPlayers} = props;

    return(
        <ul className="collection">
            { listPlayers }
        </ul>
    )
}

export default Results;