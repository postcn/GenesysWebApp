import React from 'react';
import {connect} from 'react-redux';

class DicePanel extends React.Component {

}

const mapStateToProps = state => {
    return {
        dice: state.die.dice
    };
}

const functionObject = {
    
}

export default connect(mapStateToProps, functionObject)(DicePanel);