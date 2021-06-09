import './AddPage.css'
// import { InfoContext } from '../../InfoProvider'
// import React, { useContext } from 'react'
import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFeatherAlt, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { A } from 'hookrouter';

export function AddPage() {
    // const {
    //     state: {
    //         testDataFB
    //     }
    // } = useContext(InfoContext);
    return (
        <div title="addPage" id="addPage">
            <div id="addPage__form">
                <div id="addPage__titles">
                    <p>English</p>
                    <p className="addPage__title">Spanish</p>
                </div>
                <div className="addPage__field">
                    <input className="addPage__input" />
                    <input className="addPage__input" />
                </div>
                <div className="addPage__field">
                    <input className="addPage__input" />
                    <input className="addPage__input" />
                </div>
                <div className="addPage__field">
                    <input className="addPage__input" />
                    <input className="addPage__input" />
                </div>
                <div className="addPage__field">
                    <input className="addPage__input" />
                    <input className="addPage__input" />
                </div>
                <div id="addPage__button-area">
                    <A href='/'><button id="addPage__button">Done!</button></A>
                </div>
            </div>
        </div>
    );
}

