import { Link, useNavigate } from "react-router-dom";
import "./styles/NavBar.css";

export const NavBar = () => {
    const navigate = useNavigate();

    return (
        <nav className="navbar">
            <p
                className="navbar__logo"
                onClick={() => navigate("/")}
            >
                T
                <span className="navbar__redpart">@</span>
                J
            </p>
            <ul className="navbar__right">
                {/* <li><Link className="navbar__items" to="/">Home</Link></li> */}
                <li><Link className="navbar__items" to="/blog">Blog</Link></li>
                {/* <li><Link className="navbar__items" to="/projects">Projects</Link></li> */}
                <li><Link className="navbar__items" to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
}

// export default NavBar;
