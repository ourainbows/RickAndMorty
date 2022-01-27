import calm from "../images/calm.jpg"
import "../styles/home.css"

function Home() {
    return (
        <div className="home">
            <img src={calm} alt="Rick on Calm"/>
            <p>Calma! Traeremos más contenido para ti proximamente!</p>
        </div>
    )
}

export {Home}