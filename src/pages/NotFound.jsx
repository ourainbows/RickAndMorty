import { Link } from "react-router-dom"
import lostPage from "../images/portalFinger.png"
import "../styles/notFound.css"

function NotFound() {
    return (
        <div className="error">
            <img className="notFoundImg" src={lostPage} alt="Error: 404"/>
            <div className="notFoundDiv">404</div>
            <Link className="buttonError" to="/">Ponte Rickoso</Link>
        </div>
    )
}

export {NotFound}