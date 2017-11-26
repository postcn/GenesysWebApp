import React from 'react';

class ChatControls extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(evt) {
        this.setState({text: evt.target.value});
    }

    onSubmit(evt) {
        evt.preventDefault();
        this.props.sendMessage(this.state.text);
    }

    render() {
        return (
            <div className="form-group">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Your message here" value={this.state.text} onChange={this.onChange}/>
                    <span className="input-group-addon btn btn-default" onClick={this.onSubmit}><span className="glyphicon glyphicon-triangle-right"/></span>
                </div>
            </div>
        );
    }
}

export default ChatControls;