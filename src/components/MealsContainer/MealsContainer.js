import Meal from "../Meal/Meal";
import styled from "styled-components";
import { mealsContext } from "../../context";
import { useContext } from "react";

function MealsContainer() {
    const { mealsToShow: meals } = useContext(mealsContext);
    const Container = styled.div`
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 100%;
        margin: 0 auto;
    `;
    return (
        <Container>
            {meals.map((meal, idx) => (
                <Meal meal={meal} key={idx} />
            ))}
        </Container>
    );
}

export default MealsContainer;
