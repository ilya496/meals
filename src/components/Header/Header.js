import { Jumbotron, Button, InputGroup, FormControl } from "react-bootstrap";
import headerStyles from "./Header.module.css";
function Header() {
    return (
        <Jumbotron className={headerStyles.jumbotron}>
            <h1>Welcome!</h1>
            <p>Here you can search for your favorite meals</p>
            <div className={headerStyles.inputGroup}>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Search a meal"
                        aria-label="Recipe"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <Button variant="primary">Search a meal</Button>
                    </InputGroup.Append>
                </InputGroup>
            </div>
        </Jumbotron>
    );
}

export default Header;
