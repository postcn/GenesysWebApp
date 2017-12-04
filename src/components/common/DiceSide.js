import React from 'react';
import {connect} from 'react-redux';
import classnames from 'classnames';

import DiceSymbolGroup from './DiceSymbolGroup';

import styles from './diceSide.css';
import * as images from '../../images';

class DiceSide extends React.Component {

    render() {
        let side = this.props.side;
        if (Object.keys(this.props.side).length === 0) {
            side = {
                missing: 1
            }
        }
        let symbols = Object.entries(side).map((arr) => {
            let symbolName = arr[0];
            let count = arr[1];
            let symbol = this.props.symbols.find((checkSymbol) => {
                return checkSymbol.name === symbolName;
            });
            if (!symbol) {
                symbol = {
                    name: 'missing',
                    image: images.EMPTY
                };
            }
            return <DiceSymbolGroup key={symbol.name} symbol={symbol} count={count}/>;
        });
        const classes = classnames({
            diceSide: true,
            bordered: !this.props.borderless
        });
        return (
            <span className={classes}>
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