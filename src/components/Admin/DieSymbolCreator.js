import React from 'react';
import {connect} from 'react-redux';
import * as images from '../../images';

import {addDieSymbol} from '../../actions/dieActions';
import DiceSymbol from '../common/DiceSymbol';

class DieSymbolCreator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            symbolName: "",
            opposes: "",
            image: Object.keys(images)[0]
        };
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.createImageOption = this.createImageOption.bind(this);
    }

    handleOnChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleOnSubmit(event) {
        event.preventDefault();
        const selectedImage = images[this.state.image];
        this.props.addDieSymbol({
            name: this.state.symbolName,
            image: selectedImage,
            opposes: this.state.opposes === '' ? undefined : this.state.opposes
        });
        this.setState({
            symbolName: '',
            opposes: '',
            image: Object.keys(images)[0]
        });
    }

    createImageOption(imageKey) {
        return (
            <option value={imageKey}>{imageKey}</option>
        );
    }

    render() {
        const options = Object.keys(images).map(this.createImageOption);
        const imageSrc = images[this.state.image] || images.ADVANTAGE;
        return (
            <form className="form-group" onSubmit={this.handleOnSubmit}>
                <input type="text" className="form-control" name="symbolName" placeholder="Symbol Name" value={this.state.symbolName} onChange={this.handleOnChange}/>
                <input type="text" className="form-control" name="opposes" placeholder="Opposes Symbol" value={this.state.opposes} onChange={this.handleOnChange}/>
                <DiceSymbol src={imageSrc}/>
                <select className="form-control-inline" onChange={this.handleOnChange} name="image" value={this.state.image} >
                    {options}
                </select>
                <div>
                    <input className="form-control-inline btn btn-primary" type="submit" value="Submit"/>
                </div>
            </form>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

const functionObject = {
    addDieSymbol
};

export default connect(mapStateToProps, functionObject)(DieSymbolCreator);