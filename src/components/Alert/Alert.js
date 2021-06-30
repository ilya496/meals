import { Alert, Button } from "react-bootstrap";
import { useState } from "react";
import { useContext } from "react";
import { mealsContext } from "../../context";

function CustomAlert({ msg, variant }) {
    const { setShowAlert } = useContext(mealsContext);
    // const [show, setShow] = useState(true);

    // if (show) {
    return (
        <Alert
            style={{ textAlign: "center" }}
            variant={variant || "danger"}
            onClose={() => setShowAlert(false)}
            dismissible
        >
            <Alert.Heading>{msg || "Alert Heading"}</Alert.Heading>
        </Alert>
    );
    // }
}

export default CustomAlert;
