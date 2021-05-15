import Meal from "../Meal/Meal";
import styled from "styled-components";
function MealsContainer({ meals }) {
    const Container = styled.div`
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 90%;
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
