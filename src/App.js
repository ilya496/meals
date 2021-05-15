import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "./components/Navigation/Navigation";
import About from "./pages/About";
import Home from "./pages/Home";
import Team from "./pages/Team";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    function extractIngredients(meal) {
        const ingredients = [];
        for (let i in meal) {
            if (i.includes("Ingredient") && meal[i]) {
                ingredients.push(meal[i]);
            }
        }
        return ingredients;
    }

    function fetchData() {
        setLoading(true);
        axios
            .get("https://www.themealdb.com/api/json/v1/1/search.php?s=a")
            .then(({ data }) => {
                const mealsData = data.meals.map((meal) => {
                    const ingredients = extractIngredients(meal);

                    const {
                        idMeal: id,
                        strMeal: name,
                        strArea: area,
                        strInstructions: instructions,
                        strMealThumb: image,
                        strCategory: cat,
                    } = meal;
                    return {
                        id,
                        name,
                        cat,
                        area,
                        instructions,
                        image,
                        ingredients,
                    };
                });
                setMeals(mealsData);
                setLoading(false);
            })
            .catch((error) => console.log(error));
    }
    return (
        <Router>
            <div className="App">
                <Navigation />
                <Switch>
                    <Route path="/" exact>
                        <Home loading={loading} meals={meals} />
                    </Route>
                    <Route path="/about" exact>
                        <About />
                    </Route>
                    <Route path="/team" exact>
                        <Team />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
