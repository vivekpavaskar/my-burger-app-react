import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import './BuildControls.css';

const controls = [
    {lable: 'Salad', type:'salad'},
    {lable: 'Bacon', type:'bacon'},
    {lable: 'Cheese', type:'cheese'},
    {lable: 'Meat', type:'meat'}
];

const buildControls = (props) =>(

        <div className='BuildControls'>
            {controls.map(ctrl => (
                <BuildControl key={ctrl.lable} lable={ctrl.lable}/>
            ))}
        </div>
);

export default buildControls;