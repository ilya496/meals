import Header from "../components/Header/Header";
import MealsContainer from "../components/MealsContainer/MealsContainer";
import { useContext } from "react";
import { mealsContext } from "../context";

function Home() {
    const { loading, meals } = useContext(mealsContext);
    return (
        <div>
            <Header />
            {loading ? (
                <p>Loading...</p>
            ) : !meals ? (
                <h2>No results</h2>
            ) : (
                <MealsContainer />
            )}
        </div>
    );
}

export default Home;
