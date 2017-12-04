import React from 'react';
import {connect} from 'react-redux';
import {roll} from '../../../actions/dieActions';

class ButtonPanel extends React.Component {

    constructor(props) {
        super(props);
        this.roll = this.roll.bind(this);
        this.addDieToPool = this.addDieToPool.bind(this);
    }

    addDieToPool(diePool, key) {
        const die = this.props.dice.find(die => die.name === key);
        if (!die) {
            return diePool;
        }
        return diePool.concat(Array(this.props.selectedDice[key]).fill(die));
    }

    roll() {
        let dicePool = Object.keys(this.props.selectedDice).reduce(this.addDieToPool, []);
        this.props.roll(dicePool);
    }

    render() {
        return (
            <div className="row">
                <button type="button" class="btn btn-success col-md-1" onClick={() => this.roll()}>Roll</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    selectedDice: state.die.selectedDice,
    dice: state.die.dice
});

const functionObject = {
    roll
};

export default connect(mapStateToProps, functionObject)(ButtonPanel);
