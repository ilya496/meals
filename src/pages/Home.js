import MealsContainer from "../components/MealsContainer/MealsContainer";
import Header from "../components/Header/Header";
function Home({ loading, meals }) {
    return (
        <div>
            <Header></Header>
            <MealsContainer meals={meals} />
            {loading ? <p>Loading...</p> : <></>}
        </div>
    );
}

export default Home;
