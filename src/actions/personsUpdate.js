export const ADD_NEW_PERSON = 'ADD_NEW_PERSON';
export const DELETE_PERSON = 'DELETE_PERSON';

export const newPerson = () => {
    return {
        type: ADD_NEW_PERSON,
    }
}

export const deletePerson = (id) => {
    return {
        type: DELETE_PERSON,
        payload: {id},
    }
}