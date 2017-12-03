import React from 'react';
import DiceSymbol from './DiceSymbol';

class ImageCounter extends React.Component {

    constructor(props) {
        super(props);
        this.onEdit = this.onEdit.bind(this);
    }

    onEdit(event) {
        event.preventDefault();
        this.props.editFunction(event.target.value);
    }

    render() {
        return (
            <div className="form-inline">
                <DiceSymbol src={this.props.image} />
                <div className="input-group">
                    <span className="input-group-addon btn btn-default btn-number" onClick={this.props.decrementFunction}>-</span>
                    <input readOnly={!this.props.editable} type="text" className="form-control" value={this.props.value} onChange={this.onEdit}/>
                    <span className="input-group-addon btn btn-default btn-number" onClick={this.props.incrementFunction}>+</span>
                </div>
            </div>
        );
    }
}

export default ImageCounter;