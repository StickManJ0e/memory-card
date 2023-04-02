import './App.css';
import React, { useState, useEffect } from 'react';
import CardGrid from './components/CardGrid';
import Header from './components/Header';

const App = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <div className='App'>
      <Header currentScore={currentScore} bestScore={bestScore}/>
      <CardGrid currentScore={currentScore} bestScore={bestScore} setCurrentScore={setCurrentScore} setBestScore={setBestScore} />
    </div>
  )
}

export default App;
