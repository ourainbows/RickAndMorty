import { useState } from "react"
import { Link } from "react-router-dom"
import "../styles/character.css"
import { ModalCharacter } from "./ModalCharacter"

function Character({ character }) {
    const [modalStatus, setModalStatus] = useState(false)
    const colors = {
        Human: ["#106ECD", "#03AFC7"],
        Alien: ["#1ACD5F", "#24E232"],
        Humanoid: ["#25794f", "#48c2b8"],
        unknown: ["#d6d6d6", "#888888"],
        Poopybutthole: ["#F9F7A5", "#80B4D0"],
        "Mythological Creature": ["#7a2175", "#87369b"],
        Cronenberg: ["#E0BFAD", "#B35454"],
        Animal: ["#7a4921", " #9b6736"],
        Disease: ["#7a2121", "#9b3636"],
        Robot: ["#2c2c2c", "#645e5e"],
    }
    const openModal = (() => {
        setModalStatus(prevstate => !prevstate)
    })

    return (
        <div className="cardCharacter" style={{
            backgroundImage: `linear-gradient(to right, ${colors[character.species]})`
        }}>
            <img className="characterImg" src={character.image} alt="este es un personaje :D" />
            <div className="character-info">
                <h2>{character.name}</h2>
                <p>{character.species}</p>
            </div>
            <button onClick={openModal} className="characterButton">Episodes & More</button>
            {modalStatus && <ModalCharacter characterId={character.id} setModalStatus={setModalStatus}/>}
            {/* <Link className="characterButton" to={`/RickAndMorty/characters/${character.id}`}>More Info</Link> */}
        </div>
    )
}

export { Character }    