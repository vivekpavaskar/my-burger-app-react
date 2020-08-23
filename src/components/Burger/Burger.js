import React from 'react';
import BurgerIngredient from './BurgerIngredent/BurgerIngredient';
import './Burger.css';
import { array } from 'prop-types';

const burger = (props) =>{
    const ingredient=Object.keys(props.ingredient).map( igkey =>{
        return [...Array(props.ingredient[igkey])].map((_,i) =>{
                return <BurgerIngredient key={igkey+i} type={igkey}></BurgerIngredient>
        })
    })


        return(
            <div className='Burger'>
                <BurgerIngredient type='bread-top'></BurgerIngredient>
                {ingredient}
                <BurgerIngredient type='bread-bottom'></BurgerIngredient>
            </div>
        )
}

export default burger