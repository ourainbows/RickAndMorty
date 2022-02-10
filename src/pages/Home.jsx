import { Link } from "react-router-dom"
import "../styles/home.css"

function Home() {
    return (
        <div className="home">
            <div className="home-info">
                <h1 className="home-tittle">Rick & Morty</h1>
                <p>El científico brillante pero borracho Rick secuestra a su inquieto nieto adolescente, Morty, para aventuras salvajes en otros mundos y dimensiones alternativas. </p>
                <div className="home-btns">
                    <div>
                        <Link className="home-charactes" to="/characters">Personajes</Link>
                    </div>
                    <div>
                        <Link className="home-episodes" to="/episodes">Episodios</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Home }