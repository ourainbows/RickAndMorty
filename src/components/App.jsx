import '../styles/App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Navbar } from './Navbar';
import { Home } from '../pages/Home';
import { Episodes } from '../pages/Episodes';
import { NotFound } from '../pages/NotFound';
import { Locations } from '../pages/Locations';
import { CharactersPage } from '../pages/CharactersPage';
import { Footer } from './Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/RickAndMorty" element={<Home/>} />
        <Route path="/RickAndMorty/characters" element={<CharactersPage/>} />
        <Route path="/RickAndMorty/episodes" element={<Episodes/> }/>
        <Route path="/RickAndMorty/locations" element={<Locations/> }/>
        <Route path="/RickAndMorty/*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
