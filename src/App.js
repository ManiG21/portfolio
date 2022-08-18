import logo from './logo.svg';
import './App.css';
import './Contact.css';
import './About.css';
import Gohan from './Gohan-ssj2.gif';
import { useState } from 'react';
import Home from './components/Home/Home';
import About from './components/About/About';

function App() {
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");
  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => setCount(count - 1);

  const updateSearch = e => {
    setSearch(e.target.value)
  }
  const searchClick = () => {
    window.open(`https://www.google.com/search?tbm=isch&q=${search}`);
    setSearch("")
  }

  return (
    <div className="App">

      <div className='Navbar'>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="projects" element={<Projects/>} />
        <Route path="about" element={<About/>} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      
      </div>
      <h2>Welcome to my Portfolio</h2>
      <img src="/img/giphy.gif" alt='Spider-man'></img>
      <img src={Gohan} alt='Gohan'></img>
      <button onClick={searchClick}>Search</button>
      <input onInput={updateSearch} placeholder="image Search" value={search}/>
      <label> Image Search</label>

      <div className='click-container'>
        <h3>Click Count {count}</h3>
        <button onClick={incrementCount}>+</button>
        <button onClick={decrementCount}>-</button>
      </div>
    </div>
  );
}

export default App;
