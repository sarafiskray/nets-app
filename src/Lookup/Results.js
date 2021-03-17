import React from 'react';

const Results = (props) => {

    const {setPlayerOne, listPlayers} = props;

    console.log(listPlayers)

    return(
        <div>
            {listPlayers}
        </div>
    )
}

export default Results;