import React from 'react';
import { selectDie } from '../../../actions/dieActions';

class IndividualDie extends React.Component {
    render() {
        const selectedDie = this.props.die;
        const selectionCount = this.props.selectionCount;
        return (
            <span className="col-md-1">
                <img source={selectedDie.image} />
                <span className="input-group">
                    <span className="input-group-addon btn btn-default glyphicon glyphicon-minus" onClick={this.props.decrementAction}/>
                    <input className="form-control"readonly value={selectionCount}/>
                    <span className="input-group-addon btn btn-default glyphicon glyphicon-plus" onClick={this.props.incrementAction}/>
                </span>
            </span>
        );  
    }
}

export default IndividualDie;