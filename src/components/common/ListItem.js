import React from 'react';
import PropTypes from 'prop-types';

class ListItem extends React.Component {

    render() {
        return (
            <li {...this.props} className="list-group-item">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{this.props.headercontents}</h5>
                    <p className="mb-1">{this.props.bodycontents}</p>
                </div>
            </li>
        );
    }
};

ListItem.propTypes = {
    headercontents: PropTypes.string.isRequired,
    bodycontents: PropTypes.string.isRequired
};

export default ListItem;