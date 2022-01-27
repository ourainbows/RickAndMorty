import { Character } from "./Character";
import { useEffect, useState } from "react"
import styles from "../styles/characters.module.css"
import { ChangePage } from "./Changepage";

function Characters() {
    const [apiCharacter, setApiCharacter] = useState("https://rickandmortyapi.com/api/character")
    // api info tiene pagina siguiente y anterior
    const [apiInfo, setApiInfo] = useState([])
    const [charactersResults, setCharactersResults] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const getData = await fetch(apiCharacter)
            const jsonData = await getData.json()
            setCharactersResults(jsonData.results)
            //guardamos info {link anterior , link siguiente}
            setApiInfo(jsonData.info)
            
        }
        fetchData()
    }, [apiCharacter])

    return (
        <>
            <div className={styles.cardContainer}>
                {charactersResults.map(character => (
                    <Character
                        character={character}
                        key={character.id}
                    />
                ))}
            </div>
            <ChangePage
                apiInfo={apiInfo}
                setApiCharacter={setApiCharacter}
            />
        </>
    );
}

export { Characters };
