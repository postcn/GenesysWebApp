import React from 'react';
import {connect} from 'react-redux';

import ListItem from '../common/ListItem';
import {deleteDie} from '../../actions/dieActions';

class DieList extends React.Component {
    constructor(props) {
        super(props);
        this.createDie = this.createDie.bind(this);
        this.buildBodyContents = this.buildBodyContents.bind(this);
        this.buildSideList = this.buildSideList.bind(this);
        this.symbolsForSideValue = this.symbolsForSideValue.bind(this);
        this.deleteDie = this.deleteDie.bind(this);
    }

    symbolsForSideValue(sideValue) {
        let built = "";
        for (let i=0; i<sideValue.count; i++) {
            built += <img src={sideValue.symbol.imagePath}/>
        }
        return (
            <span>{built}</span>
        );
    }

    buildSideList(side) {
        let symbols = side.values.map(this.symbolsForSideValue);
        return (
            <li key={side.id}>
                {symbols}
            </li>
        );
    }

    buildBodyContents(die) {
        return (
            <span>
                <img src={die.image}/>
                <ul className="list-inline">
                    {die.sides.map(this.buildSideList)}
                </ul>
            </span>
        )
    }

    createDie(die) {
        const dieBodyContents = this.buildBodyContents(die);
        return (
            <ListItem key={die.name}
                headerContents={die.name}
                bodyContents={dieBodyContents}
                deletionFunction = {() => this.deleteDie(die)}
                showDeletion = {this.props.showDeletion || false}
            />
        );
    }

    deleteDie(die) {
        this.props.deleteDie(die);
    }

    render() {
        const dice = this.props.dice.map(this.createDie);
        return (
            <ul className="list-group">
                {dice}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        dice: state.die.dice
    };
}

const actionObject = {
    deleteDie
};

export default connect(mapStateToProps, actionObject)(DieList);