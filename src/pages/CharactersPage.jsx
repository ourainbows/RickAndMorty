import { Characters } from "../components/Characters"
import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"

function CharactersPage() {
    return (
        <>
            <Navbar />
            <Characters />
            <Footer />
        </>
    )
}

export { CharactersPage }