import { useState, useContext } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import { FaYoutube } from "react-icons/fa";
import { db } from "../../firebase";
import { mealsContext } from "../../context";

function Meal({ meal }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { currentUser } = useContext(mealsContext);

    const addToFavourites = (e) => {
        if (currentUser) {
            db.collection("users")
                .doc(currentUser.uid)
                .collection("favorites")
                .doc(meal.id)
                .set({
                    meal,
                })
                .then(() => alert("added to collection"));
        }
    };
    return (
        <>
            <Card
                style={{
                    width: "18rem",
                    minWidth: "350px",
                    margin: "10px auto",
                }}
            >
                <Card.Img variant="top" src={meal.image} />
                <Card.Body>
                    <Card.Title>{meal.name}</Card.Title>
                    <p class="badge"> {meal.category}</p> <br />
                    <Button variant="primary" onClick={handleShow}>
                        See More Details
                    </Button>
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Instructions</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {meal.instructions.split(".").map((sentence, idx) => (
                        <p key={idx}>{sentence}</p>
                    ))}
                    <a
                        href={meal.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaYoutube /> Also you can see video about this meal!
                    </a>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    {currentUser && (
                        <Button variant="primary" onClick={addToFavourites}>
                            Add to Favorites
                        </Button>
                    )}
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Meal;
