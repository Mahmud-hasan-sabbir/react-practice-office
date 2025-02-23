import './App.css';
import Home from './pages/Home'; 
import About from './pages/About';
import Pragment from './pages/pragment';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Clipboard from './pages/clipboard';
import Keybord from './pages/Keybord';



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
       
        <Route path="/About" element={<About name="sabbir" year={25} />} />
        <Route path="/Pragment" element={<Pragment />} />
        <Route path="/Clipboard" element={<Clipboard />} />
        <Route path="/Keybord" element={<Keybord />} />
      </Routes>
    </BrowserRouter>
  );
}




export default App;