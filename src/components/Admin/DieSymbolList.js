import React from 'react';
import {connect} from 'react-redux';

import ListItem from '../common/ListItem';
import {deleteDieSymbol} from '../../actions/dieActions';
import DiceSymbol from '../common/DiceSymbol';

class DieSymbolList extends React.Component {
    constructor(props) {
        super(props);
        this.createDieSymbol = this.createDieSymbol.bind(this);
        this.deleteDieSymbol = this.deleteDieSymbol.bind(this);
        this.buildBodyContents = this.buildBodyContents.bind(this);
    }

    deleteDieSymbol(dieSymbol) {
        this.props.deleteDieSymbol(dieSymbol.name);
    }

    buildBodyContents(dieSymbol) {
        const opposingSymbol = this.props.dieSymbols.find(symbol => {
            return symbol.name === dieSymbol.opposes
        });
        let opposesElement = " - Unopposed";
        if (dieSymbol.opposes) {
            opposesElement = <span> - Opposes: {opposingSymbol !== undefined ? <DiceSymbol src={opposingSymbol.image}/> : dieSymbol.opposes}</span>;
        }
        return (
            <span>
                <DiceSymbol src={dieSymbol.image}/>
                {opposesElement}
            </span>
        )
    }

    createDieSymbol(dieSymbol) {
        return (
            <ListItem key={dieSymbol.name}
                headercontents={dieSymbol.name}
                bodycontents = {this.buildBodyContents(dieSymbol)}
                deletionFunction={() => this.deleteDieSymbol(dieSymbol)}
                showDeletion = {this.props.showDeletion || false}
            />
        );
    }

    render() {
        const symbols = this.props.dieSymbols.map(this.createDieSymbol);
        return (
            <ul className="list-group">
                {symbols}
            </ul>
        )
    }
}

const mapStateToProps = (state) => ({
    dieSymbols: state.die.symbols
});

const functionObject = {
    deleteDieSymbol
};

export default connect(mapStateToProps, functionObject)(DieSymbolList);