import './App.css';
import samosa from './assets/Samosa.png';
import { useState } from 'react';

const App = () => {

  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const updateCount = () => setCount(count + multiplier);

  const buyDoubleStuffed = () => {
    if (count >= 10) {
      setMultiplier(multiplier * 2);
      setCount(count - 10);
    }
  }

  const buyPartPack = () => {
    if (count >= 100) {
      setMultiplier(multiplier * 5);
      setCount(count - 100);
    }
  }

  const buyFullFeast = () => {
    if (count >= 1000) {
      setMultiplier(multiplier * 10);
      setCount(count - 1000);
    }
  }

  const reset = () => {
    setCount(0);
    setMultiplier(1);
  }

  return (
    <div className="App">
      <div className='header'>
        <h1>Samosa Selector</h1>
        <h2>Count: {count}</h2>
        <img className='samosa' src={samosa} onClick={updateCount}></img>
      </div>
      <div className='container'>
        <div className='upgrade'>
          <h3> Double Stuffed 👯‍♀️ </h3>
            <p>2x per click</p>
            <button onClick={buyDoubleStuffed}>10 samosas</button>
        </div>
        <div className='upgrade'>
          <h3> Party Pack 🎉</h3>
            <p>5x per click</p>
            <button onClick={buyPartPack}>100 samosas</button>
        </div>
        <div className='upgrade'>
          <h3>Full Feast 👩🏽‍🍳</h3>
            <p>10x per click</p>
            <button onClick={buyFullFeast}>1000 samosas</button>
        </div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

export default App