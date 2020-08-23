import React,{ Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICE = {salad: 10, bacon: 20, cheese: 30, meat:40};

class BurgerBuilder extends Component{
    state={
        ingredient:{
            salad:0,
            bacon:0,
            cheese:0,
            meat :0
        },
        total_price: 20
    }

    addIngredientHandeler = (type) =>{
        const fillings = {...this.state.ingredient};
        fillings[type]=this.state.ingredient[type]+1;
        const price=this.state.price+INGREDIENT_PRICE[type];
        this.setState({ingredient: fillings,total_price: price});
    }

    removeIngredientHandeler = (type) =>{
        const fillings = {...this.state.ingredient};
        fillings[type]=this.state.ingredient[type]-1;
        const price=this.state.price-INGREDIENT_PRICE[type];
        if(fillings[type]>=0){
            this.setState({ingredient: fillings,total_price: price});
        }
    }

    render(){
        return(
            <React.Fragment>
                <Burger ingredient={this.state.ingredient}></Burger>
                <BuildControls addFilling={this.addIngredientHandeler} removeFilling={this.removeIngredientHandeler}></BuildControls>
            </React.Fragment>
        );
    }
}

export default BurgerBuilder;