import React from 'react';
import {connect} from 'react-redux';

import DiceSymbolGroup from './DiceSymbolGroup';

import styles from './diceSide.css';

class DiceSide extends React.Component {

    render() {
        let symbols = Object.entries(this.props.side).map((arr) => {
            let symbolName = arr[0];
            let count = arr[1];
            let symbol = this.props.symbols.find((checkSymbol) => {
                return checkSymbol.name === symbolName;
            });
            return <DiceSymbolGroup key={symbol.name} symbol={symbol} count={count}/>;
        });
        return (
            <span className="diceSide">
                {symbols}
            </span>
        );
    }
}

function mapStateToProps(state) {
    return {
        symbols: state.die.symbols
    }
}

export default connect(mapStateToProps, {})(DiceSide);