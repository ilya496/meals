import { Jumbotron, Button, InputGroup, FormControl } from "react-bootstrap";
import Search from "../Search/Search";
import headerStyles from "./Header.module.css";
import {MealsContext} from '../../Context'
import { useContext } from "react";

function Header() {
  const {setSearchTerm} = useContext(MealsContext)

  return (
    <Jumbotron className={headerStyles.jumbotron}>
      <h1>Welcome!</h1>
      <p>Here you can search for your favorite meals</p>

    <Search setSearchTerm={setSearchTerm} />
    </Jumbotron>
  );
}

export default Header;
