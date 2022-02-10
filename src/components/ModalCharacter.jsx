import { useEffect, useState } from "react"
import ReactDOM from "react-dom"
import { Link, useParams } from "react-router-dom"
import { Characters } from "./Characters"
import "../styles/modal.css"
import { Character } from "./Character"


function ModalCharacter({characterId, setModalStatus}) {
    const [dataCharacter, setDataCharacter] = useState([])

    const openModal = (() => {
        setModalStatus(prevstate => !prevstate)
    })

    /* const params = useParams() */
    useEffect(() => {
        const fetchCharacterId = async () => {
            const request = await fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
            const parseJson = await request.json()
            setDataCharacter(parseJson)
        }
        fetchCharacterId()
    }, [characterId])
    return ReactDOM.createPortal(
        <>
            {/* {console.log(dataCharacter.name)}
            <Characters /> */}
            <div className="characterModal" >
                <Character character={dataCharacter}/>
                <button className="closeModal" onClick={openModal}>x</button>
            </div>
        </>,
        document.getElementById("modal")
    )
}

export { ModalCharacter }