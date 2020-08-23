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
        const price=this.state.total_price+INGREDIENT_PRICE[type];
        console.log(this.state.total_price)
        this.setState({ingredient: fillings,total_price: price});
    }

    removeIngredientHandeler = (type) =>{
        const fillings = {...this.state.ingredient};
        fillings[type]=this.state.ingredient[type]-1;
        const price=this.state.total_price-INGREDIENT_PRICE[type];
        console.log(this.state.total_price)
        if(fillings[type]>=0){
            this.setState({ingredient: fillings,total_price: price});
        }
    }

    render(){
        const disabledInfo = {...this.state.ingredient};
        for (const key in disabledInfo) {
            disabledInfo[key]=disabledInfo[key]<=0;
        }
        return(
            <React.Fragment>
                <Burger ingredient={this.state.ingredient}></Burger>
                <BuildControls addFilling={this.addIngredientHandeler} removeFilling={this.removeIngredientHandeler}
                disabledInfo={disabledInfo} price={this.state.total_price}></BuildControls>
            </React.Fragment>
        );
    }
}

export default BurgerBuilder;