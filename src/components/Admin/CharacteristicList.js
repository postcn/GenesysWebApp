import React from 'react';
import {connect} from 'react-redux';

import ListItem from '../common/ListItem';
import { deleteCharacteristic } from '../../actions/characteristicActions';

class CharacteristicList extends React.Component {

    constructor(props) {
        super(props);
        this.createCharacteristic = this.createCharacteristic.bind(this);
        this.deleteCharacteristic = this.deleteCharacteristic.bind(this);
    }

    createCharacteristic(characteristic) {
        return (
            <ListItem key={characteristic.name}
                headercontents={characteristic.name}
                bodycontents = {characteristic.description}
                deletionFunction = {() => this.deleteCharacteristic(characteristic)}
                showDeletion = {this.props.showDeletion || false}
            />
        );
    }

    deleteCharacteristic(characteristic) {
        this.props.deleteCharacteristic(characteristic);
    }

    render() {
        const characteristics = this.props.characteristics.map(this.createCharacteristic);
        return (
            <ul className="list-group">
                {characteristics}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        characteristics: state.characteristic.characteristics
    };
}

const actionObject = {
    deleteCharacteristic
};

export default connect(mapStateToProps, actionObject)(CharacteristicList);