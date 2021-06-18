import { useContext } from "react";
import { db } from "../firebase";
import { mealsContext } from "../context";
import { useHistory, useParams } from "react-router-dom";

function Favorites() {
    const { id } = useParams(mealsContext);
    const { currentUser } = useContext(mealsContext);
    const history = useHistory();
    if (id !== currentUser.uid) {
        history.replace("/");
    }

    return (
        <div>
            <h2>Favorites</h2>
        </div>
    );
}

export default Favorites;
