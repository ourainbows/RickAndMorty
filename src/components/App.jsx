import '../styles/App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
/* import { Navbar } from './Navbar'; */
import { Home } from '../pages/Home';
import { EpisodesPage } from '../pages/EpisodesPage';
import { NotFound } from '../pages/NotFound';
import { CharactersPage } from '../pages/CharactersPage';
/* import { Footer } from './Footer'; */
import { ModalCharacter } from './ModalCharacter';

function App() {
  return (
    <BrowserRouter basename='RickAndMorty'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<CharactersPage />} />
        <Route path="/episodes" element={<EpisodesPage />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/characters/:id" element={<ModalCharacter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
