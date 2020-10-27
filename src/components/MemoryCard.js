import React from 'react';
import card from './card.png';

class MemoryCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = { isFlipped: false };
    }
    
    clickHandler = () => {
        this.setState({
            isFlipped: !this.state.isFlipped
        });
    }
    
    render() {
        let innerClass = 'MemoryCard__inner';
        if (this.state.isFlipped) {
            innerClass += 'flipped';
        }

        return ( <div className="col-sm-3 col-md-3 col-lg-3 mb-2 mt-3">
            <div className="MemoryCard" onClick={this.clickHandler}>
                <div className={innerClass}>
                    <div className="MemoryCard__front"> ∆ 
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