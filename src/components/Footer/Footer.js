import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MealsContext } from "../../Context";

function Footer() {
    const { currentUser, handleLogout } = useContext(MealsContext);

    return (
        <div className="footer">
            <div className="footer-left">
                <p>Made with ❤️ by Mouhamadou using React &copy; 2021</p>
            </div>
            <div className="footer-right">
                <ul>
                    <li>
                        {currentUser ? (
                            <Link onClick={handleLogout}> Logout </Link>
                        ) : (
                            <Link to="/login">Login</Link>
                        )}
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;
