import React from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux';

import {mergeState} from '../../localStorage';

class Export extends React.Component {

    constructor(props) {
        super(props);
        this.state = Object.keys(props.reduxState).reduce((accumulator, key) => ({...accumulator, [key]:false}),{fileName:''});
        this.buildCheckboxes = this.buildCheckboxes.bind(this);
        this.getDataHref = this.getDataHref.bind(this);
        this.proxyOnUpload = this.proxyOnUpload.bind(this);
        this.createSingleSelectBox = this.createSingleSelectBox.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.onFileSubmit = this.onFileSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    createSingleSelectBox(reduxKey) {
        const description = this.props.reduxState[reduxKey].description;
        const checkState = !!this.state[reduxKey];
        return (
            <div className="checkbox" key={reduxKey}>
                <label>
                    <input type="checkbox" name={reduxKey} checked={checkState} onChange={this.handleInputChange} />{reduxKey}
                </label>
                {!!description &&
                    <p className="help-block">{description}</p>
                }
            </div>
        )
    }

    buildCheckboxes() {
        return Object.keys(this.props.reduxState).map(this.createSingleSelectBox);
    }

    getDataHref() {
        const state = Object.keys(this.props.reduxState)
            .filter(key => {return this.state[key];})
            .reduce((accumulator ,key) => {return {...accumulator, [key]:this.props.reduxState[key]}}, {});
        const result = `data:text\json;charset=utf-8,${encodeURIComponent(JSON.stringify(state))}`
        console.log(result);
        return result;
    }

    proxyOnUpload() {
        ReactDom.findDOMNode(this.refs.fileInput).click();
    }

    onFileSubmit(e) {
        e.preventDefault();
        var files;
        if (e.dataTransfer) {
            files = e.dataTransfer.files;
        }
        else if (e.target) {
            files = e.target.files;
        }
        if (files && files.length === 1) {
            const file = files[0];
            const fileReader = new FileReader();
            fileReader.onload = (e) => {
                const string = e.target.result;
                mergeState(JSON.parse(string))
                    .then(() => window.location.reload());
            }
            fileReader.readAsText(file);
        }
    }

    render() {
        const checkboxes = this.buildCheckboxes();
        return (
            <div className="container">
                <div className="row">
                    <h2>Import / Export</h2>
                    <p>
                        Use the controls below to choose what to export from your local state so other players can import it. You will need to
                        share this file with your fellow players via your favorite form of file sharing. Then, use the Import section to import
                        once you have an exported file.
                    </p>
                </div>
                <div className="row">
                    <h3>Export</h3>
                    <form>
                        <div className="form-group">
                            {checkboxes}
                        </div>
                        <input className="form-control" name="fileName" type="text" value={this.state.fileName} placeholder="File Name" onChange={this.handleInputChange}/>
                        <a className="btn btn-default" href={this.getDataHref()} download={`${this.state.fileName}.json`} disabled={this.state.fileName === ''}>Save to File</a>
                    </form>
                </div>
                <div className="row">
                    <h3>Import</h3>
                    <span>
                        <input style={{ display: 'none' }} type='file' ref='fileInput' onChange={this.onFileSubmit} accept=".json" />
                        <button className="btn btn-default" onClick={this.proxyOnUpload}>Select File</button>
                    </span>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    reduxState: state
});

const functionObject = {};

export default connect(mapStateToProps, functionObject)(Export);