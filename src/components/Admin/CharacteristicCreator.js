import React from 'react';
import {connect} from 'react-redux';

import {addCharacteristic} from '../../actions/characteristicActions';

class CharacteristicCreator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            characteristicName: "",
            characteristicDescription: ""
        };
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    handleOnChange(event) {
        this.setState({[event.target.id]: event.target.value})
    }

    handleOnSubmit(event) {
        this.props.addCharacteristic(this.state);
        this.setState({characteristicName: "", characteristicDescription:""});
        event.preventDefault();
    }

    render() {
        return (
            <form className="form-group" onSubmit={this.handleOnSubmit}>
                <input type="text" className="form-control" id="characteristicName" placeholder="Name" value={this.state.characteristicName} onChange={this.handleOnChange}/>
                <textarea className="form-control" value={this.state.characteristicDescription} onChange={this.handleOnChange} id="characteristicDescription" placeholder=" Description"/>
                <input className="btn btn-primary" type="submit" value="Submit" />
            </form>
        );
    }
};

function mapStateToProps(state) {
    return {};
}

const functionObject = {
    addCharacteristic
};

export default connect(mapStateToProps, functionObject)(CharacteristicCreator);