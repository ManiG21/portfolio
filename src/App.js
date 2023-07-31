import Navbar from './components/Navbar/Navbar';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <img src="/img/giphy.gif" alt='Spider-man'></img>
      <img src={Gohan} alt='Gohan'></img>
      <button onClick={searchClick}>Search</button>
      <input onInput={updateSearch} placeholder="image Search" value={search}/>
      <label> Image Search</label> */}
    </div>
  );
}

export default App;
