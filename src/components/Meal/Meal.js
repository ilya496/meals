import { Card, Button } from "react-bootstrap";
function Meal({ meal }) {
    return (
        <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={meal.image} />
            <Card.Body>
                <Card.Title>{meal.title}</Card.Title>
                <Card.Text>{meal.description}</Card.Text>
                <Button variant="primary">See More Details</Button>
            </Card.Body>
        </Card>
    );
}

export default Meal;
