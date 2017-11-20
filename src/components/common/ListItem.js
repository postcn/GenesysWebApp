import React from 'react';
import PropTypes from 'prop-types';

import css from './listItem.css';

class ListItem extends React.Component {

    render() {
        return (
            <li {...this.props} className="list-group-item">
                {this.props.showDeletion && <a className="badge badge-danger" onClick={this.props.deletionFunction}>X</a>}
                <div className="d-flex w-100 justify-content-between">
                    <h4 className="mb-1">{this.props.headercontents}</h4>
                    <p className="mb-1">{this.props.bodycontents}</p>
                </div>
            </li>
        );
    }
};

ListItem.propTypes = {
    headercontents: PropTypes.string.isRequired,
    bodycontents: PropTypes.string.isRequired,
    showDeletion: PropTypes.bool,
    deletionFunction: PropTypes.func
};

ListItem.defaultProps = {
    showDeletion: false
};

export default ListItem;