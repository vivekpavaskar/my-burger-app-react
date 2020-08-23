import React,{ Component } from 'react';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component{
    state={
        ingredient:{
            salad:0,
            bacon:0,
            cheese:0,
            meat :0
        }
    }

    render(){
        return(
            <React.Fragment>
                <Burger ingredient={this.state.ingredient}></Burger>
                <div>Burger Controls</div>
            </React.Fragment>
        );
    }
}

export default BurgerBuilder;