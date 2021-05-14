function Meal({ meal }) {
    return (
        <div className="singleMeal">
            <div className="mealImg">
                <img src={meal.image}></img>
            </div>
            <div className="mealContext">
                <h2>{meal.name}</h2>
                <p>{meal.instructions}</p>
            </div>
        </div>
    );
}

export default Meal;
