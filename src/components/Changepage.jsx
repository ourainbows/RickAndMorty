import "../styles/changePage.css"
function ChangePage({ apiInfo, setApiCharacter }) {
    const prevPage = () => {
        setApiCharacter(apiInfo.prev)
        setTimeout(() => {
            window.scrollTo(0,0)
        }, 100)
    }
    const nextPage = () => {
        setApiCharacter(apiInfo.next)
        setTimeout(() => {
            window.scrollTo(0, 0)
        }, 100)
    }
    return (
        <div className="buttons-container">
            <button className="button" onClick={prevPage}>Anterior</button>
            <button className="button" onClick={nextPage}>Siguiente</button>
        </div>
    )
}


export {ChangePage}