import skill from '../../reducers/skill';
import * as types from '../../types';

const addedSkill = {
    name: 'foo',
    description: 'bass'
};
const addAction = {
    type: types.ADD_SKILL,
    skill: addedSkill
};

function deleteActionHelper(name) {
    return {
        type: types.DELETE_SKILL,
        skill: {
            name: name,
            description: 'does not matter'
        }
    };
}

it('should default to the state when an unrecognized action is passed', () => {
    const result = skill({skills: []}, {type: 'foo'});
    expect(result).toEqual({skills: []});
});

it('should add to the state when an action is specified', () => {
    expect(skill({skills:[]}, addAction)).toEqual({skills: [addedSkill]});
    expect(skill({skills:['existingSkill']}, addAction)).toEqual({skills: ['existingSkill', addedSkill]});
});

it('should delete from the state when the skill matches', () => {
    const deleteAction = deleteActionHelper('foo');
    expect(skill({skills:[addedSkill]}, deleteAction)).toEqual({skills: []});
});

it('should not delete from the state when the skill does not match', () => {
    const deleteAction = deleteActionHelper('foolish mortal');
    const initialState = {skills:[addedSkill]};
    expect(skill(initialState, deleteAction)).toEqual(initialState);
});