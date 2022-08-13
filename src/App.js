import logo from './logo.svg';
import './App.css';
import Gohan from './Gohan-ssj2.gif';
import { useState } from 'react';

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

      <div className='Navbar'></div>
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
