import React from 'react';
import './App.css';
import MemoryCard from './components/MemoryCard';
import './MemoryCard.css';
import question from './components/memory-icon1.png';

const deck = ['', '', '', '','', '', '', '', '', '', '', '','', '', '', '']

const generateDeck = () => {

  const symbols = ['🇮🇹', '🏳️‍🌈', '🇯🇵', '🇰🇷', '🇧🇷', '🇨🇦', '🇺🇸', '🇬🇧'];
  const emptyDeck = [];

  deck.forEach((slot, index)=>{
    emptyDeck.push({isFlipped: false, symbol: symbols[index%8]})
  })

  console.log(emptyDeck);

  for (let outIndex = emptyDeck.length - 1; outIndex >= 0; outIndex--) {
    let randomIndex = Math.floor(Math.random() * outIndex); 
    [emptyDeck[outIndex], emptyDeck[randomIndex]] = [emptyDeck[randomIndex], emptyDeck[outIndex]];
  }
  return emptyDeck;
}

class App extends React.Component{

  constructor(props) {
      super(props);

      this.state = {
        deck: generateDeck(),
        pickedCards: [],
        displayButton: false,
        matchedCards: 0
      };
  }

  resetGame = () => {
    this.setState({
      deck: generateDeck(),
      pickedCards: [],
      displayButton: false,
      matchedCards: 0
    })
  }

  unflipCards = (card1Index, card2Index) => {
    const [card1, card2] = [{...this.state.deck[card1Index]}, {...this.state.deck[card2Index]}]
    card1.isFlipped = false;
    card2.isFlipped = false;
    const newDeck = this.state.deck.map((card, index)=>{
      if (card1Index === index) {
        return card1
      } else if(card2Index === index) {
        return card2
      }
      return card;
    })
    this.setState({ deck: newDeck })
  }
  
  
  pickCard = (cardIndex) => {
    if(this.state.deck[cardIndex].isFlipped){
      return '';
    }
    
    const cardToFlip = {...this.state.deck[cardIndex]};
    cardToFlip.isFlipped = true;
    
    let newPickedCards = this.state.pickedCards.concat(cardIndex);
    let matchedCards = this.state.matchedCards;
    const newDeck = this.state.deck.map((card, index)=>{
      if(cardIndex === index){
        return cardToFlip
      }
      
      return card;
    });

    if (newPickedCards.length === 2) {
      const [card1Index, card2Index] = [newPickedCards[0], newPickedCards[1]];
      if (newDeck[card1Index].symbol !== newDeck[card2Index].symbol){ setTimeout(() => {this.unflipCards(card1Index, card2Index)}, 1000) }
      if (newDeck[card1Index].symbol === newDeck[card2Index].symbol){matchedCards += 2}
      newPickedCards = [];
    }
    
    this.setState({
      deck: newDeck,
      pickedCards: newPickedCards,
      matchedCards: matchedCards,
      displayButton: matchedCards === 16
    })
  }

  render() {
    return (
    <div className="App">
      <div className="container container-header">
        <div className="row">
          <div className="col-12">
      <header className="App-header">
        <h1 className="title">Memory Game</h1>
        <h2 className="subtitle">Match the flags to win!</h2>
        <img className="lamp" src={question} alt="card"/>
      </header>
        </div>
        </div>
      </div>  

      <div className="container container-cards">
        <div className="row">
      {this.state.deck.map((card, index) => {
      return (  
       <MemoryCard key={index} symbol={card.symbol} isFlipped={card.isFlipped} pickCard={this.pickCard.bind(this, index)}/>
        )
      })}
      <div className="col-12">
        {/* button to reset game */}
       {this.state.displayButton ? <button onClick={this.resetGame}>Yay! Play again.</button> : ''}
       </div>
        </div>
      </div>  
    </div>
  );
}
}

export default App;
