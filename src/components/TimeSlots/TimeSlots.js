import './TimeSlots.css'
import { InfoContext } from '../../InfoProvider'
import React, { useContext } from 'react'
import { A } from 'hookrouter';

export const TimeSlots = (props) => {
    const {
        state: {
        },
    } = useContext(InfoContext);
    return (
        <div id="time-slot__card">
            <p>{props.title}</p>
            <A href={`vocab/${props.id}`}><button className="time-slot__button">Study</button></A>
        </div>
    );
}