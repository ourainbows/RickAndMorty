import '../styles/App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Navbar } from './Navbar';
import { Home } from '../pages/Home';
import { EpisodesPage } from '../pages/EpisodesPage';
import { NotFound } from '../pages/NotFound';
import { CharactersPage } from '../pages/CharactersPage';
import { Footer } from './Footer';
import { ModalCharacter } from './ModalCharacter';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/RickAndMorty" element={<Home />} />
        <Route path="/RickAndMorty/characters" element={<CharactersPage />} />
        <Route path="/RickAndMorty/episodes" element={<EpisodesPage />} />
        <Route path="/RickAndMorty/*" element={<NotFound />} />
        <Route path="/RickAndMorty/characters/:id" element={<ModalCharacter />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
