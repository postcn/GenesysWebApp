import React from 'react';

class Creatable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            creationVisible: false
        };
        this.toggleCreationWindow = this.toggleCreationWindow.bind(this);
    }

    toggleCreationWindow() {
        this.setState({
            creationVisible: !this.state.creationVisible
        });
    }

    render() {
        let creationContent = this.state.creationVisible ? this.props.creationElement : null;
        return (
            <div>
                <button className="btn btn-outline-primary pull-right" onClick={this.toggleCreationWindow}>{this.state.creationVisible ? 'Cancel' : 'Edit'}</button>    
                <h3>{this.props.title}</h3>
                {creationContent}
                {React.cloneElement(this.props.children, {showDeletion: this.state.creationVisible})}
            </div>
        );
    }
}

export default Creatable;