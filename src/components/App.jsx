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
        <Route path="/" element={<Home/>} />
        <Route path="/characters" element={<CharactersPage/>} />
        <Route path="/episodes" element={<Episodes/> }/>
        <Route path="/locations" element={<Locations/> }/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
