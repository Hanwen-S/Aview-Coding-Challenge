import React from 'react';
import './Rect.css';
import img_shakehands from './Saly-31.png'

function RightRectangle() {
    return (
        <div>
            <button className='rect'>
                <div>
                    <img className='shakehands' src={img_shakehands} />
                </div>
                <text className='righttitle'>
                    Flexible <br/>
                </text>
                <text className='rightbody'>
                    We offer a personalized payment<br/>plan and tailor our process to<br/> your needs.
                </text>
            </button>
        </div>
    )
}
export default RightRectangle
