import React from 'react';
import card from './card.png';

class MemoryCard extends React.Component {
    render() {
        return ( <div className="col-sm-3 col-md-3 col-lg-3 mb-2 mt-3">
            <div className="MemoryCard">
                <div className="MemoryCard__inner">
                <div className="MemoryCard__front"> ∆ </div>
                <div className="MemoryCard__back">
                    
            <img src={card} alt="card"/>
                </div>
                
               
                </div>
                </div>
            </div>
        )
    }
}

export default MemoryCard;