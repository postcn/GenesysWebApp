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
                <button className="btn btn-outline-primary" onClick={this.toggleCreationWindow}>{this.state.creationVisible ? '-' : '+'}</button>
                {creationContent}
                {this.props.children}
            </div>
        );
    }
}

export default Creatable;