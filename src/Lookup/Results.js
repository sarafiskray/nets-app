import React from 'react';

const Results = (props) => {

    const {listPlayers} = props;

    return(
        <ul>
            { listPlayers }
        </ul>
    )
}

export default Results;