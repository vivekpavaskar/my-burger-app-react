import React from 'react';
import BurgerIngredient from './BurgerIngredent/BurgerIngredient';
import './Burger.css';

const burger = (props) =>{
    let ingredient=Object.keys(props.ingredient).map( igkey =>{
        return [...Array(props.ingredient[igkey])].map((_,i) =>{
                return <BurgerIngredient key={igkey+i} type={igkey}></BurgerIngredient>
        })
    })
    .reduce((arr,el)=>{
        return arr.concat(el)
    },[]);

    if(ingredient.length===0){
        ingredient=<p>Please Start adding Ingredient!</p>
    }
        return(
            <div className='Burger'>
                <BurgerIngredient type='bread-top'></BurgerIngredient>
                {ingredient}
                <BurgerIngredient type='bread-bottom'></BurgerIngredient>
            </div>
        )
}

export default burger;