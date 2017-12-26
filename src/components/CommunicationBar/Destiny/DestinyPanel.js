import React from 'react';
import {connect} from 'react-redux';

import {setDestinyPool} from '../../../actions/destinyActions';

import * as images from '../../../images';

import styles from './destinyPanel.css';

class DestinyPanel extends React.Component {
    constructor(props) {
        super(props);
        this.usePlayer = this.usePlayer.bind(this);
        this.useGm = this.useGm.bind(this);
        this.decrement = this.decrement.bind(this);
        this.increment = this.increment.bind(this);
    }

    usePlayer() {
        this.props.setDestinyPool({
            player: this.props.destinyState.player - 1,
            gm: this.props.destinyState.gm + 1
        });
    }

    useGm() {
        this.props.setDestinyPool({
            player: this.props.destinyState.player + 1,
            gm: this.props.destinyState.gm - 1
        });
    }

    buildSideGroup(image, count, toggleFunction) {
        let images = [];
        for (var i=0; i<count; i++) {
            images.push(
                <img src={image} onClick={toggleFunction} key={i}/>
            );
        }
        return images;
    }

    decrement() {
        if (this.props.destinyState.player > 0) {
            this.props.setDestinyPool({...this.props.destinyState,
                player: this.props.destinyState.player - 1
            });
        }
        else if (this.props.destinyState.gm > 0) {
            this.props.setDestinyPool({...this.props.destinyState,
                gm: this.props.destinyState.gm - 1
            });
        }
    }

    increment() {
        this.props.setDestinyPool({...this.props.destinyState,
            player: this.props.destinyState.player + 1
        });
    }

    render() {
        return (
            <div className="container storyPoints">
                <span>Story Point Pool: </span>
                <button onClick={this.decrement} type="button" className="btn btn-default btn-number">
                    <span class="glyphicon glyphicon-minus"/>
                </button>
                <button onClick={this.increment} type="button" className="btn btn-default btn-number">
                    <span class="glyphicon glyphicon-plus"/>
                </button>
                {this.buildSideGroup(images.LIGHTSIDE, this.props.destinyState.player, this.usePlayer)}
                {this.buildSideGroup(images.DARKSIDE, this.props.destinyState.gm, this.useGm)}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        destinyState: state.destiny
    };
};

const functionObject = {
    setDestinyPool
};

export default connect(mapStateToProps, functionObject)(DestinyPanel);