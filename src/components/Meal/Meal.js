import { useState, useContext } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import { FaYoutube } from "react-icons/fa";
import { MealsContext } from "../../Context";
import { db } from "../../firebase";
import PropTypes from "prop-types";

function Meal({ meal, isFavorite }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { currentUser, setShowAlert } = useContext(MealsContext);

    function removeFromFavorites() {
        if (currentUser) {
            db.collection("users")
                .doc(currentUser.uid)
                .collection("favorites")
                .doc(meal.id)
                .delete()
                .then(() =>
                    setShowAlert((prev) => ({
                        ...prev,
                        state: true,
                        msg: `${meal.name} removed successfully`,
                        variant: "danger",
                        type: "remove",
                    }))
                )
                .catch((e) => console.log(e));
        }
    }

    function addToFavorites() {
        if (currentUser) {
            db.collection("users")
                .doc(currentUser.uid)
                .collection("favorites")
                .doc(meal.id)
                .set({
                    meal,
                })
                .then(() =>
                    setShowAlert((prev) => ({
                        ...prev,
                        state: true,
                        msg: `${meal.name} added successfully`,
                        variant: "success",
                        type: "add",
                    }))
                )
                .catch((e) => console.log(e));
        }
    }
    return (
        <>
            <Card
                style={{
                    width: "18rem",
                    minWidth: "400px",
                    margin: "10px auto",
                }}
            >
                <Card.Img variant="top" src={meal.image} />
                <Card.Body>
                    <Card.Title>{meal.name}</Card.Title>
                    <p className="badge bg-success"> {meal.category}</p> <br />
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
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    {currentUser && !isFavorite && (
                        <Button variant="primary" onClick={addToFavorites}>
                            Add To Favorites
                        </Button>
                    )}

                    {currentUser && isFavorite && (
                        <Button variant="primary" onClick={removeFromFavorites}>
                            Remove From Favorites
                        </Button>
                    )}

                    <a
                        href={meal.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaYoutube />
                    </a>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Meal;

Meal.protTypes = {
    isFavorite: PropTypes.bool.isRequired,
    meal: PropTypes.instanceOf(Object).isRequired,
};
