import { useEffect, useState } from "react";
import { Episode } from "./Episode";
import { ChangePage } from "./Changepage"
import style from "../styles/episodes.module.css"

function Episodes() {
    const [urlEpisodes, setUrlEpisodes] = useState("https://rickandmortyapi.com/api/episode")
    const [episodes, setEpisodes] = useState([])
    const [apiInfo, setApiInfo] = useState([])

    useEffect(() => {
        const fetchEpisodes = async () => {
            const getData = await fetch(urlEpisodes)
            const dataJson = await getData.json()
            const { results, info } = dataJson
            setEpisodes(results)
            setApiInfo(info)
        }
        fetchEpisodes()
    }, [urlEpisodes])

    return (
        <>
            <div className={style.cardEpisodes}>
                {episodes.map(episode => (
                    <div className={`${style[(episode.episode).slice(-6, 3)]} ${style.cardEpisode}`} key={episode.name}>
                        <div className={style.cardEpisodeTitle}>
                            <h2>{episode.name}</h2>
                            <div>{`Estreno: ${episode.air_date}`}</div>
                            <h3 className={style.episodeSeason}>{episode.episode}</h3>
                        </div>
                        <div className={style.cardEpisodeCharacters}>Personajes</div>
                        <Episode
                            episodeId={episode.id}
                            episodeCharacters={episode.characters}
                        />
                    </div>
                ))}
            </div>
            <ChangePage
                apiInfo={apiInfo}
                setApi={setUrlEpisodes}
            />
        </>
    );
}

export { Episodes }
