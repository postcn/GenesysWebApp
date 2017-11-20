import React from 'react';
import {connect} from 'react-redux';

import {addCharacteristic} from '../../actions/characteristicActions';
import Creatable from '../common/Creatable';
import CharacteristicList from './CharacteristicList';
import CharacteristicCreator from './CharacteristicCreator';

class Admin extends React.Component {

    render() {
        return (
            <div className="admin-ui">
                <div>
                    <Creatable creationElement={<CharacteristicCreator/>} title="Characteristics">
                        <CharacteristicList/>
                    </Creatable>
                </div>
            </div>
        );
        
    }
}

function mapStateToProps(state) {
    return {
        characteristics: state.characteristic.characteristics
    };
}

const actionObject = {
    addCharacteristic
};

export default connect(mapStateToProps, actionObject)(Admin);