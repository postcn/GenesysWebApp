import React from 'react';
import {connect} from 'react-redux';

import {setUser} from './actions/userActions';


class UserManager extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentUser: ''
        };

        this.submitForm = this.submitForm.bind(this);
        this.updateUser = this.updateUser.bind(this);
    }

    updateUser(evt) {
        this.setState({
            currentUser: evt.target.value
        });
    }

    submitForm() {
        this.props.setUser({
            name: this.state.currentUser
        });
    }

    render() {
        if (!this.props.user) {
            return (
                <form onSubmit={this.submitForm}>
                    <div>
                        Choose a display name that will identify you to other participants in the game. Your messages and rolls will be bound with this name.
                    </div>
                    <input type='text' value={this.state.currentUser} onChange={this.updateUser}/>
                </form>
            );
        }
        else {
            return this.props.children;
        }
    }
}

const mapStateToProps = state => {
    return {
        user: state.user.user
    };
};

const functionObject = {
    setUser
};

export default connect(mapStateToProps, functionObject)(UserManager);