import React from 'react';
import './BuildControl.css';

const buildControl = (props) => (
    <div className='BuildControl'>
        <div className='Label'>{props.lable}</div>
        <button className='Less' onClick={props.removeIngredient}>Less</button>
        <button className='More' onClick={props.addIngredient}>More</button>
    </div>
)

export default buildControl;