import React from 'react';

const Player = (props) => {

    const { id, firstName, lastName, teamId } = props;

    return (
        <div>
            <p> {firstName} {lastName}</p>
        </div>
    )

}

export default Player;