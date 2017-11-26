import React from 'react';
import {connect} from 'react-redux';

class DicePanel extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-md-6">
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        dice: state.die.dice,
        selections: state.die.selectedDice
    };
}

const functionObject = {
    
}

export default connect(mapStateToProps, functionObject)(DicePanel);