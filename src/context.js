import React, { createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export const mealsContext = createContext();

export default function AppContext({ children }) {
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("a");
    const [currentUser, setCurrentUser] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);
    const PER_PAGE = 10;
    const offset = currentPage * PER_PAGE;
    let mealsToShow = null;
    let pageCount = 0;

    mealsToShow = meals ? meals.slice(offset, offset + PER_PAGE) : null;
    pageCount = meals ? Math.ceil(meals.length / PER_PAGE) : 0;

    useEffect(async () => {
        fetchData();
    }, [searchTerm]);

    function fetchData() {
        console.log("fetchData called");
        console.log(searchTerm);
        let mealsData = null;
        setLoading(true);
        axios
            .get(
                `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
            )

            .then(({ data }) => {
                console.log(data);
                if (data.meals) {
                    mealsData = data.meals.map((meal) => {
                        const ingredients = extractIngredients(meal);

                        const {
                            idMeal: id,
                            strMeal: name,
                            strArea: area,
                            strInstructions: instructions,
                            strMealThumb: image,
                            strCategory: category,
                            strYoutube: youtube,
                        } = meal;
                        return {
                            id,
                            area,
                            name,
                            instructions,
                            image,
                            ingredients,
                            category,
                            youtube,
                        };
                    });
                }
                setLoading(false);
                console.log(mealsData);
                setMeals(mealsData);
            })
            .catch((error) => console.log(error));
    }

    function extractIngredients(meal) {
        const ingredients = [];
        for (let key in meal) {
            if (key.includes("strIngredient") && meal[key]) {
                ingredients.push(meal[key]);
            }
        }
        return ingredients;
    }

    return (
        <mealsContext.Provider
            value={{
                loading,
                mealsToShow,
                meals,
                setCurrentPage,
                pageCount,
                setSearchTerm,
                searchTerm,
                currentUser,
                setCurrentUser,
            }}
        >
            {children}
        </mealsContext.Provider>
    );
}
