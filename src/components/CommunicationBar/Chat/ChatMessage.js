import React from 'react';
import {connect} from 'react-redux';

import DiceSide from '../../common/DiceSide';
import DiceSymbol from '../../common/DiceSymbol';

import styles from './chatMessage.css';

class ChatMessage extends React.Component {

    constructor(props) {
        super(props);
        this.createText = this.createText.bind(this);
        this.createRoll = this.createRoll.bind(this);
        this.transformDiceSide = this.transformDiceSide.bind(this);
        this.reduceDieResults = this.reduceDieResults.bind(this);
    }

    createText(message) {
        return message.text;
    }

    transformDiceSide(side) {
        return <DiceSide side={side}/>
    }

    reduceDieResults(accumulator, currentRoll) {
        const roll = currentRoll.dieRoll;
        const symbols = this.props.symbols;
        Object.keys(roll).forEach(key => {
            const symbol = symbols.find(checkSymbol => checkSymbol.name === key);
            const opposedSymbolValue = accumulator[symbol.opposes];
            let incrementalValueForSymbol = roll[key];
            if (opposedSymbolValue && incrementalValueForSymbol <= opposedSymbolValue) {
                accumulator[symbol.opposes] = opposedSymbolValue - incrementalValueForSymbol;
            }
            else if (opposedSymbolValue && incrementalValueForSymbol > opposedSymbolValue) {
                accumulator[symbol.opposes] = 0;
                accumulator[key] = incrementalValueForSymbol - opposedSymbolValue;
            }
            else {
                accumulator[key] = (accumulator[key] || 0) + incrementalValueForSymbol;
            }
        });
        return accumulator;
    }

    createRoll(message) {
        const rollResults = message.results;
        const individualDieResults = rollResults.map((result,index) => {
            const die = result.die;
            const transformedRoll = this.transformDiceSide(result.dieRoll);
            return (
                <span className="dieResult" key={index}>
                    <DiceSymbol src={die.image}/>
                    {transformedRoll}
                </span>
            );
        });
        const consolidatedDieResults = rollResults.reduce(this.reduceDieResults, {});
        return (
            <div className="dieMessage">
                <div className="individualDieResults">{individualDieResults}</div>
                <hr/>
                <div className="consolidatedResults"><DiceSide borderless side={consolidatedDieResults}/></div>
            </div>
        );
    }

    render() {
        let message = undefined;
        switch (this.props.message.type) {
            case 'text':
                message = this.createText(this.props.message);
                break;
            case 'roll':
                message = this.createRoll(this.props.message);
                break;
            default:
                message = "TK421 You aren't at your post. Unrecognized message came in";
                break;
        }
        return (
            <div class="chat-message list-group-item">
                {message}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    symbols: state.die.symbols
});

const functionObject = {};

export default connect(mapStateToProps, functionObject)(ChatMessage);