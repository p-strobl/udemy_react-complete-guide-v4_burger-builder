import React, { Component } from "react";

import Aux from "../../hoc/Auxx";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

class BurgerBuilder extends Component {
  state = {
    ingedients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    }
  };

  render() {
    return (
      <Aux>
        <Burger ingedients={this.state.ingedients} />
        <BuildControls />
      </Aux>
    );
  }
}

export default BurgerBuilder;
