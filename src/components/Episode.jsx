import { useEffect, useState } from "react"
import style from "../styles/episodes.module.css"

function Episode({episodeCharacters, episodeId }) {
    const [dataCharacters, setDataCharacters] = useState([])

    useEffect(() => {
        episodeCharacters.map(async (episode) => {
            const response = await fetch(episode);
            const characterJSON = await response.json();
            const { image } = characterJSON;
            setDataCharacters((prevState) => [...prevState, image]);
        });
    }, [episodeCharacters]);
    
    return (
        <div className={style.containerCharacters} key={episodeId}>
            {dataCharacters.map((data) => (
                    <img key={`${episodeId} ${data}`} src={data} alt="" />
            ))
            }
        </div>
    )
}

export { Episode }

