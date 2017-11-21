import React from 'react';
import {connect} from 'react-redux';

import ListItem from '../common/ListItem';
import {deleteSkill} from '../../actions/skillActions';

class SkillList extends React.Component {

    constructor(props) {
        super(props);
        this.createSkill = this.createSkill.bind(this);
        this.buildBodyContents = this.buildBodyContents.bind(this);
        this.deleteSkill = this.deleteSkill.bind(this);
    }

    buildBodyContents(skill) {
        return (
            <div>
                <p>This skill is based upon the {skill.baseCharacteristic.name} characteristic.</p>
                <p>{skill.description}</p>
            </div>
        );
    }

    createSkill(skill) {
        return (
            <ListItem key={skill.name}
                headercontents={skill.name}
                bodycontents={this.buildBodyContents(skill)}
                deletionFunction = {() => this.deleteSkill(skill)}
                showDeletion = {this.props.showDeletion || false}
            />
        );
    }

    deleteSkill(skill) {
        this.props.deleteSkill(skill);
    }

    render() {
        const skills = this.props.skills.map(this.createSkill);
        return (
            <ul className="list-group">
                {skills}
            </ul>
        );
    }
};

function mapStateToProps(state) {
    return {
        skills: state.skill.skills
    };
}

const actionObject = {
    deleteSkill
};

export default connect(mapStateToProps, actionObject)(SkillList);