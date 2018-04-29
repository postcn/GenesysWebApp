import React from 'react';
import DiceSide from '../../common/DiceSide';
import DiceSymbol from '../../common/DiceSymbol';

class RollMessage extends React.Component {

    constructor(props) {
        super(props);
        this.transformDiceSide = this.transformDiceSide.bind(this);
        this.reduceDieResults = this.reduceDieResults.bind(this);
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

    render() {
        const rollResults = this.props.message.results;
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
}

export default RollMessage;