import React from 'react';
import {connect} from 'react-redux';
import shortid from 'shortid';

import * as images from '../../images';
import {addDie} from '../../actions/dieActions';
import ImageCounter from '../common/ImageCounter';
import DiceSymbol from '../common/DiceSymbol';
import DiceSide from '../common/DiceSide';

class DieCreator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sides: [],
            currentSideSymbols: {},
            name: '',
            image: Object.keys(images)[0]
        };
        this.createCurrentSideSymbols = this.createCurrentSideSymbols.bind(this);
        this.createSymbolCounter = this.createSymbolCounter.bind(this);
        this.createCurrentSides = this.createCurrentSides.bind(this);
        this.hasSides = this.hasSides.bind(this);
        this.addSide = this.addSide.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.createImageOption = this.createImageOption.bind(this);
        this.createDie = this.createDie.bind(this);
    }

    createDie() {
        this.props.addDie(this.state.name, this.state.sides, images[this.state.image]);
        this.setState({
            sides: [],
            currentSideSymbols: {},
            name: '',
            image: Object.keys(images)[0]
        });
    }

    addSide() {
        const symbols = this.state.currentSideSymbols;
        this.setState({sides: this.state.sides.concat(symbols), currentSideSymbols:{}});
    }

    updateSelectedSideWithKey(key, value) {
        const selectedSides = this.state.selectedSides;
        selectedSides[key] = value;
        this.setState({selectedSides: selectedSides});
    }

    incrementSymbol(symbol) {
        const count = (this.state.currentSideSymbols[symbol.name] || 0) + 1;
        this.setState({currentSideSymbols: {...this.state.currentSideSymbols, [symbol.name]: count}});
    }

    decrementSymbol(symbol) {
        let count = (this.state.currentSideSymbols[symbol.name] || 0) - 1;
        if (count < 0) {
            count = 0;
        }
        this.setState({currentSideSymbols: {...this.state.currentSideSymbols, [symbol.name]: count}});
    }

    createSymbolCounter(symbol) {
        const count = this.state.currentSideSymbols[symbol.name] || 0;
        return <ImageCounter key={symbol.name} 
            image={symbol.image}
            value={count}
            incrementFunction={() => this.incrementSymbol(symbol)}
            decrementFunction={() => this.decrementSymbol(symbol)}/>
    }

    createCurrentSideSymbols() {
        const symbols = this.props.symbols.map(this.createSymbolCounter);
        return(
            <ul>
                {symbols}
            </ul>
        );
    }

    hasSides() {
        return this.state.sides.length > 0;
    }

    createSide(side, index) {
        return <DiceSide side={side} key={index}/>;
    }

    createCurrentSides() {
        if (!this.hasSides()) {
            return (
                <div className="alert alert-danger">
                    <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                    <span className="sr-only">Error:</span>
                    Dice has no sides. A D0 is impossible. Please add at least one side.
                </div>
            )
        }
        else {
            let sides = this.state.sides.map(this.createSide);
            return (
                <ul className="list-inline">
                    {sides}
                </ul>
            )
        }
    }

    handleOnChange(event) {
        event.preventDefault();
        this.setState({[event.target.name]: event.target.value});
    }

    createImageOption(imageKey) {
        return (
            <option value={imageKey}>{imageKey}</option>
        );
    }

    render() {
        const currentSymbols = this.createCurrentSideSymbols();
        const currentSides = this.createCurrentSides();

        const options = Object.keys(images).map(this.createImageOption);
        const imageSrc = images[this.state.image] || images.ADVANTAGE;
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <div className="input-group">
                            <label for="dieNamingInput">Die Name:</label>
                            <input id="dieNamingInput" className="form-control" type="text" placeholder="Name your die" value={this.state.name} onChange={this.handleOnChange} name="name"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="input-group">
                            <label for="dieImageInput">Die Image:</label>
                            <DiceSymbol src={imageSrc}/>
                            <select id="dieImageInput" className="form-control" onChange={this.handleOnChange} name="image" value={this.state.image} >
                                {options}
                            </select>
                        </div>
                    </div>
                    
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h3>Create New Die Side</h3>
                        {currentSymbols}
                        <button className="btn btn-default" onClick={this.addSide}>Add Side</button>
                    </div>
                    <div className="col-md-6">
                        <h3>Current Dice Sides</h3>
                        {currentSides}
                    </div>
                </div>
                {this.hasSides() &&
                    <div className="row">
                        <button className="btn btn-primary" onClick={this.createDie}>Create Die</button>
                    </div>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        symbols: state.die.symbols
    };
}

const functionObject = {
    addDie
};

export default connect(mapStateToProps, functionObject)(DieCreator);