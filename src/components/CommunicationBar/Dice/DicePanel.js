import React from 'react';
import {connect} from 'react-redux';

import ImageCounter from '../../common/ImageCounter';
import {setDieCountInPool} from '../../../actions/dieActions';

class DicePanel extends React.Component {

    constructor(props) {
        super(props);
        this.createDiceCounter = this.createDiceCounter.bind(this);
        this.findCountFor = this.findCountFor.bind(this);
    }

    findCountFor(dice) {
        return this.props.selections && this.props.selections[dice.name] ? this.props.selections[dice.name] : 0;
    }

    setDiceCount(die, count) {
        const updatedCount = count > 0 ? count : 0;
        this.props.setDieCountInPool(die.name, updatedCount);
    }

    createDiceCounter(dice) {
        const count = this.findCountFor(dice);
        return <ImageCounter image={dice.image} value={count} editable
                decrementFunction={() => this.setDiceCount(dice, count-1)}
                incrementFunction={() => this.setDiceCount(dice, count+1)}
                editFunction={(count) => this.setDiceCount(dice, count)}
            />
    }

    render() {
        const diceCounters = this.props.dice.map(this.createDiceCounter);
        return (
            <div className="col-md-6">
                <div className="container">
                    {diceCounters}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        dice: state.die.dice,
        selections: state.die.selectedDice
    };
};

const functionObject = {
    setDieCountInPool
};

export default connect(mapStateToProps, functionObject)(DicePanel);