import React, { useContext, useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { mealsContext } from "../../context";
import searchStyles from "./Search.module.css";
function Search() {
    const [searchValue, setSearchValue] = useState("");
    const { setSearchTerm } = useContext(mealsContext);
    function handleSearch() {
        setSearchTerm(searchValue);
    }
    return (
        <div className={searchStyles.inputGroup}>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Search a meal"
                    aria-label="search meal"
                    aria-describedby="basic-addon2"
                    onChange={(e) => setSearchValue(e.target.value)}
                    value={searchValue}
                />
                <InputGroup.Append>
                    <Button variant="danger" onClick={handleSearch}>
                        Search Meal
                    </Button>
                </InputGroup.Append>
            </InputGroup>
        </div>
    );
}

export default Search;
