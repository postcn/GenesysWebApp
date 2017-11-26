import React from 'react';

class DiceSymbol extends React.Component {

    render() {
        let className = this.props.className ? this.props.className + " diceSymbolImage" : "diceSymbolImage";
        return (
            <img className={className} {...this.props}/>
        );
    }
}

export default DiceSymbol;