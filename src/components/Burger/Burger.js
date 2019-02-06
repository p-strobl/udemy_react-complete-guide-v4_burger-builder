import React from "react";

import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredients";

const burger = props => {
  let transformedIngedients = Object.keys(props.ingedients)
    .map(ingredKey => {
      return [...Array(props.ingedients[ingredKey])].map((_, index) => {
        return <BurgerIngredient key={ingredKey + index} type={ingredKey} />;
      });
    })
    .reduce((arr, curr) => {
      return arr.concat(curr);
    }, []);

  if (transformedIngedients.length === 0) {
    transformedIngedients = <p>Please start adding ingredients!</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngedients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
