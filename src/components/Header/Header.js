import './Header.css'
import { InfoContext } from '../../InfoProvider'
import React, { useContext } from 'react'
// import React from 'react'
import { A } from 'hookrouter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeatherAlt, faPlusCircle } from '@fortawesome/free-solid-svg-icons';


export function Header() {
    const {
        state: {
            testDataFB
        }
    } = useContext(InfoContext);
    return (
        <div id="header">
            <div id="header__left">
                <h1 id="header__title">Up-To-Date?</h1>
                <FontAwesomeIcon id="header__icon" icon={faFeatherAlt} />
            </div>
            <A href='addPage' id="header__link"><FontAwesomeIcon id="header__icon" icon={faPlusCircle} /></A>
        </div>
    );
}

