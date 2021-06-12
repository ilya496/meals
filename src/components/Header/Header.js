import { useContext } from "react";
import { Jumbotron } from "react-bootstrap";
import Search from "../Search/Search";
import headerStyles from "./Header.module.css";
import { mealsContext } from "../../context";

function Header() {
    const { setSearchTerm } = useContext(mealsContext);
    return (
        <Jumbotron className={headerStyles.jumbotron}>
            <h1>Welcome!</h1>
            <p>Here you can search for your favorite meals</p>

            <Search />
        </Jumbotron>
    );
}

export default Header;
