import './App.css';
import Home from './pages/Home'; 
import About from './pages/About';
import Pragment from './pages/pragment';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Clipboard from './pages/clipboard';
import Keybord from './pages/Keybord';
import Website from './pages/Website';
import Error from './pages/Error';
import Registration from './pages/Registration';
import UseEffect from './pages/UseEffect';




function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
       
        <Route path="/About" element={<About name="sabbir" year={25} />} />
        <Route path="/Pragment" element={<Pragment />} />
        <Route path="/Clipboard" element={<Clipboard />} />
        <Route path="/Keybord" element={<Keybord />} />
        <Route path="/Website" element={<Website />} />
        <Route path="/Registration" element={<Registration />} />
       
      
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}




export default App;