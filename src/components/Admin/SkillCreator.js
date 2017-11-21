import React from 'react';
import {connect} from 'react-redux';

import {addSkill} from '../../actions/skillActions';

class SkillCreator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            characteristic: this.getDefaultCharacteristic(props.characteristics),
            description: ""
        };
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.createCharacteristicOption = this.createCharacteristicOption.bind(this);
        this.getDefaultCharacteristic = this.getDefaultCharacteristic.bind(this);
    }

    getDefaultCharacteristic(characteristics) {
        if (characteristics && characteristics.length > 0) {
            return characteristics[0].name;
        }
        return undefined;
    }

    createCharacteristicOption(characteristic) {
        return (
            <option value={characteristic.name}>{characteristic.name}</option>
        );
    }

    handleOnChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleOnSubmit(event) {
        event.preventDefault();
        const selectedCharacteristic = this.props.characteristics.find(function (characteristic) {
            return characteristic.name === this.state.characteristic;
        }.bind(this));
        this.props.addSkill({
            name: this.state.name,
            baseCharacteristic: selectedCharacteristic,
            description: this.state.description
        });
        this.setState({
            name: "",
            characteristic: this.getDefaultCharacteristic(this.props.characteristics),
            description: ""
        });
    }

    render() {
        const options = this.props.characteristics.map(this.createCharacteristicOption);
        if (options.length === 0) {
            return (
                <div className="container-fluid alert-danger">
                    <h5>Cannot create any skills without first having created characteristics.</h5>
                </div>
            )
        }
        return (
            <form className="form-group" onSubmit={this.handleOnSubmit}>
                <input type="text" className="form-control" name="name" placeholder="Name" value={this.state.name} onChange={this.handleOnChange} />
                <select onChange={this.handleOnChange} value={this.state.characteristic} className="form-control" name="characteristic" placeholder="Related Characteristic">
                    {options}
                </select>
                <textarea className="form-control" name="description" placeholder="Description" value={this.state.description} onChange={this.handleOnChange} />
                <input className="btn btn-primary" type="submit" value="Submit"/>
            </form>
        );
    }
}

function mapStateToProps(state) {
    return {
        characteristics: state.characteristic.characteristics
    };
}

const functionObject = {
    addSkill
};

export default connect(mapStateToProps, functionObject)(SkillCreator);