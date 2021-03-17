import React from 'react';

const Player = (props) => {

    const { id, firstName, lastName, teamId , setPlayerOne} = props;

    const handleClick = (event) => {
        event.preventDefault()
        
        setPlayerOne(id)
    }


    return (
        <li onClick={handleClick}>
            <p> {firstName} {lastName}</p>
        </li>
    )

}

export default Player;