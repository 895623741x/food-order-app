import React, {Fragment} from "react";
import Mealssummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";

function Meals() {
    return (
        <Fragment>
            <Mealssummary />
            <AvailableMeals />
        </Fragment>
    );
}

export default Meals;
