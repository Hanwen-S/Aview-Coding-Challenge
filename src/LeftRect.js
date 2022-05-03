import React from 'react';
import './Rect.css';
import img_calendar from './Saly-42.png'

function LeftRectangle() {
    return (
        <div>
            <button className='rect'>
                <div>
                    <img className='calendar' src={img_calendar} />
                </div>
                <text className='lefttitle'>
                    Fast & Easy<br/>
                </text>
                <text className='leftbody'>
                    AVIEW guarantees a 24-hour<br/>turnaround on subtitle and 48<br/>hours on dubbed content.
                </text>
            </button>
        </div>
    )
}
export default LeftRectangle
