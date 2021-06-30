import Meal from "../Meal/Meal";
import styled from "styled-components";
import {MealsContext} from '../../Context'
import CustomAlert from "../Alert/CustomAlert";
import { useContext } from "react";
function MealsContainer() {
  const {mealsToShow:meals, showAlert} = useContext(MealsContext)
  const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 90%;
    margin: 0 auto;
  `;
  return (
    <Container>
      { showAlert.state && showAlert.type === 'add' && <CustomAlert msg={showAlert.msg} variant={showAlert.variant}/> }

      {meals.map((meal, idx) => (
        <Meal meal={meal} key={idx} />
      ))}
    </Container>
  );
}

export default MealsContainer;
