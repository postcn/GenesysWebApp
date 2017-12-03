import React from 'react';
import {connect} from 'react-redux';

import ListItem from '../common/ListItem';
import DiceSide from '../common/DiceSide';
import {deleteDie} from '../../actions/dieActions';

class DieList extends React.Component {
    constructor(props) {
        super(props);
        this.createDie = this.createDie.bind(this);
        this.buildBodyContents = this.buildBodyContents.bind(this);
        this.buildSide = this.buildSide.bind(this);
        this.deleteDie = this.deleteDie.bind(this);
    }

    buildSide(side, index) {
        return (
            <DiceSide key={index} side={side}/>
        );
    }

    buildBodyContents(die) {
        return (
            <span>
                <img src={die.image}/>
                <ul className="list-inline">
                    {die.sides.map(this.buildSide)}
                </ul>
            </span>
        )
    }

    createDie(die) {
        const dieBodyContents = this.buildBodyContents(die);
        return (
            <ListItem key={die.name}
                headercontents={die.name}
                bodycontents={dieBodyContents}
                deletionFunction = {() => this.deleteDie(die.name)}
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