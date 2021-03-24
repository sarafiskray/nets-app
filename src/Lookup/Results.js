import React , { Fragment } from 'react';
import './Results.css'

const Results = (props) => {

    const {listPlayers} = props;

    return (
        <Fragment>
            <p className="center-align">Enter full first or last name</p>
            <ul className="collection">
                { listPlayers }
            </ul>
        </Fragment>
    )
}

export default Results;