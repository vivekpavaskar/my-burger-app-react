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
            <p>Burger Price: Rs. {props.price}/-</p>
            {controls.map(ctrl => (
                <BuildControl key={ctrl.lable} lable={ctrl.lable} addIngredient={()=>props.addFilling(ctrl.type)} removeIngredient={()=>props.removeFilling(ctrl.type)} disabledInfo={props.disabledInfo[ctrl.type]}/>
            ))}
        </div>
);

export default buildControls;