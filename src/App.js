import './App.css';
import Home from './pages/Home'; 
import About from './pages/About';
import Pragment from './pages/pragment';
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* ✅ Single Route for About, passing props */}
        <Route path="/About" element={<About name="sabbir" year={25} />} />
        <Route path="/Pragment" element={<Pragment />} />
      </Routes>
    </BrowserRouter>
  );
}




export default App;