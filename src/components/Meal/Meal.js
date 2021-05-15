import { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";

function Meal({ meal }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={meal.image} />
                <Card.Body>
                    <Card.Title>{meal.name}</Card.Title>
                    <Card.Text>
                        {meal.cat}, {meal.area}
                    </Card.Text>
                    <Button variant="danger" onClick={handleShow}>
                        See More Details
                    </Button>
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>{meal.name}</Modal.Title>
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
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Meal;
