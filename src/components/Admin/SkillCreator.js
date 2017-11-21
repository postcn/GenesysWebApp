import React from 'react';
import {connect} from 'react-redux';

import {addSkill} from '../../actions/skillActions';

class SkillCreator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            characteristic: null,
            description: ""
        };
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.createCharacteristicOption = this.createCharacteristicOption.bind(this);
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
        console.log('booyakasha');
        event.preventDefault();
    }

    render() {
        const options = this.props.characteristics.map(this.createCharacteristicOption);
        return (
            <form className="form-group" onSubmit={this.handleOnSubmit}>
                <input type="text" className="form-control" name="name" placeholder="Name" value={this.state.name} onChange={this.handleOnChange} />
                <select onChange={this.handleOnChange} value={this.state.characteristic} className="form-control" name="characteristic">
                    {options}
                </select>
                <textarea className="form-control" name="description" placeholder="Description" value={this.state.description} onChange={this.handleOnChange} />
                <input className="btn btn-primary" type="submit" value="Submit"/>
            </form>
        )
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