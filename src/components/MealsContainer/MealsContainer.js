import Meal from "../Meal/Meal";
function MealsContainer({ meals }) {
    return (
        <div>
            {meals.map((meal, idx) => (
                <Meal meal={meal} key={idx} />
            ))}
        </div>
    );
}

export default MealsContainer;
