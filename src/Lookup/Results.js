import React , { Fragment } from 'react';
import './Results.css'

const Results = (props) => {

    const {listPlayers, searched} = props;

    return (
        <Fragment>
            <p className="center-align">Enter at least first three characters of last name</p>
            <ul className="collection">
                { listPlayers }
                { searched && listPlayers.length == 0 ? (
                    <li className="collection-item noResults">
                        <p>No results found</p>
                    </li> ) : null
                }
            </ul>
        </Fragment>
    )
}

export default Results;