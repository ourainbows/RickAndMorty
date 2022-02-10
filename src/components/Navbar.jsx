import { Link, NavLink } from "react-router-dom"
import "../styles/navbar.css"
import logo from "../images/logo.png"

function Navbar() {
    return (
        <nav className="nav">
            <div>
                <Link to="/RickAndMorty"><img src={logo} alt="logo" /></Link>
            </div>
            <ul>
                <li>
                    <NavLink className={({ isActive }) => isActive ? "active" : "inactive"} to="/RickAndMorty">Home</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive ? "active" : "inactive"} to="/RickAndMorty/characters">Personajes</NavLink>
                </li>
                {/* remplazar rutas una vez esten terminadas */}
                <li>
                    <NavLink className={({ isActive }) => isActive ? "active" : "inactive"} to="/RickAndMorty/episodes">Episodios</NavLink>
                </li>
            </ul>
        </nav>
    )
}
export { Navbar }
