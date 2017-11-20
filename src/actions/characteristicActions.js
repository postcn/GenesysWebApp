import * as types from '../types';


export const addCharacteristic = (newCharacteristic) => ({
    type: types.ADD_CHARACTERISTIC,
    characteristic: {
        name: newCharacteristic.characteristicName,
        description: newCharacteristic.characteristicDescription
    }
});

export const deleteCharacteristic = (deletionCharacteristic) => ({
    type: types.DELETE_CHARACTERISTIC,
    characteristic: deletionCharacteristic
});