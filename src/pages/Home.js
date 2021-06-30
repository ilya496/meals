import Header from "../components/Header/Header";
import MealsContainer from "../components/MealsContainer/MealsContainer";
import {useContext} from 'react'
import {MealsContext} from '../Context'

function Home() {

  const {loading, meals} = useContext(MealsContext);
  return (
    <div>
      <Header/>
      {loading ? <p>Loading...</p> : ( !meals? <h2>No results</h2> : <MealsContainer  />)}
    </div>
  );
}

export default Home;
