import * as types from '../types';

export const addSkill = (newSkill) => ({
    type: types.ADD_SKILL,
    skill: newSkill
});

export const deleteSkill = (deletionSkill) => ({
    type: types.DELETE_SKILL,
    skill: deletionSkill
});