import React from 'react';

import DiceSymbol from './DiceSymbol';

class DiceSymbolGroup extends React.Component {

    render() {
        const symbols = Array(this.props.count).fill().map((x,i) => {
            return <DiceSymbol key={i} src={this.props.symbol.image} />
        });
        return (
            <span className="symbolGroup">
                {symbols}
            </span>
        );
    }
}

export default DiceSymbolGroup;