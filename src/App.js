import React from 'react';
import './App.css';
import MemoryCard from './components/MemoryCard';
import './MemoryCard.css';



const deck = ['', '', '', '','', '', '', '', '', '', '', '','', '', '', '']

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Memory Game</h1>
        <h2 className="subtitle">Match cards to win!</h2>
      </header>


    
      <div className="container">
     
        <div className="row">
      
      {deck.map((card, index) => {
      return (  
       <MemoryCard key={index} card={card}/>
        )
      })}
     
      </div>
      
    
      </div>  

      
    </div>
  );
}

export default App;
