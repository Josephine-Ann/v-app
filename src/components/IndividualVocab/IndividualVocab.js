import { InfoContext } from '../../InfoProvider'
import React, { useContext } from 'react'
// import React from 'react'
// import { usePath } from 'hookrouter';
import './IndividualVocab.css'

export const IndividualVocab = (props) => {
    const {
        toggleIt,
        state: {
            testDataFB
        },
    } = useContext(InfoContext);
    var all = props
    return (
        <div id="individual-vocab">
            <div class="flip-card">
                <div class="flip-card__inner">
                    <div class="flip-card__front">
                        <h1>{all[0].english[0].toUpperCase()}{all[0].english.slice(1, (all[0].english).length)}</h1>
                    </div>
                    <div class="flip-card__back">
                        <h1>{all[0].spanish[0].toUpperCase()}{all[0].spanish.slice(1, (all[0].spanish).length)}</h1>
                    </div>
                </div>
            </div>
            <div class="flip-card">
                <div class="flip-card__inner">
                    <div class="flip-card__front">
                        <h1>{all[1].english[0].toUpperCase()}{all[1].english.slice(1, (all[1].english).length)}</h1>
                    </div>
                    <div class="flip-card__back">
                        <h1>{all[1].spanish[0].toUpperCase()}{all[1].spanish.slice(1, (all[1].spanish).length)}</h1>
                    </div>
                </div>
            </div>
            <div class="flip-card">
                <div class="flip-card__inner">
                    <div class="flip-card__front">
                        <h1>{all[2].english[0].toUpperCase()}{all[2].english.slice(1, (all[2].english).length)}</h1>
                    </div>
                    <div class="flip-card__back">
                        <h1>{all[2].spanish[0].toUpperCase()}{all[2].spanish.slice(1, (all[2].spanish).length)}</h1>
                    </div>
                </div>
            </div>
            <div class="flip-card">
                <div class="flip-card__inner">
                    <div class="flip-card__front">
                        <h1>{all[3].english[0].toUpperCase()}{all[3].english.slice(1, (all[3].english).length)}</h1>
                    </div>
                    <div class="flip-card__back">
                        <h1>{all[3].spanish[0].toUpperCase()}{all[3].spanish.slice(1, (all[3].spanish).length)}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

