import React from 'react';
import DiceSymbol from './DiceSymbol';

class ImageCounter extends React.Component {
    render() {
        return (
            <div className="form-inline">
            <DiceSymbol src={this.props.image} />
                <div className="input-group">
                    <span className="input-group-addon btn btn-default btn-number" onClick={this.props.decrementFunction}>-</span>
                    <input readOnly type="text" className="form-control" value={this.props.value}/>
                    <span className="input-group-addon btn btn-default btn-number" onClick={this.props.incrementFunction}>+</span>
                </div>
            </div>
        );
    }
}

export default ImageCounter;