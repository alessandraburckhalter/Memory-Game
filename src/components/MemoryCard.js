import React from 'react';
import card from './icon-question.png';

class MemoryCard extends React.Component {
    
    render() {
        let innerClass = 'MemoryCard__inner';
        if (this.props.isFlipped) {
            innerClass += " flipped";
        }

        return ( <div className="col-sm-3 col-md-3 col-lg-3 mt-3">
            <div className="MemoryCard" onClick={this.props.pickCard}>
                <div className={innerClass}>
                    <div className="MemoryCard__front"> {this.props.symbol} 
                    </div>
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