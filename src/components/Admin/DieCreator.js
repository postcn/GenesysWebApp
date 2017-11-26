import React from 'react';
import {connect} from 'react-redux';

import {addDie} from '../../actions/dieActions';

class DieCreator extends React.Component {
    render() {
        return (
            <span>Not yet implemented you pillock!</span>
        );
    }
}

function mapStateToProps(state) {

}

const functionObject = {
    addDie
};

export default connect(mapStateToProps, functionObject)(DieCreator);