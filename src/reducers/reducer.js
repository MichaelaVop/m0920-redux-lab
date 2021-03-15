import { ADD_NEW_PERSON, DELETE_PERSON } from '../actions/personsUpdate'

const age = () => Math.floor( Math.random() * 40 );

const initState = {
    personsData: [
        { name: 'Jack', age: age(), id: Math.random() }
    ],
}

const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case ADD_NEW_PERSON:
            const newPerson = {
                name: 'John',
                age: age(),
                id: Math.random(),
            };

            return {
                ...state,
                personsData: state.personsData.concat(newPerson),
            };
        
        case DELETE_PERSON:
            return {
                ...state,
                personsData: state.personsData.filter((person) => person.id !== payload.id),
            };

        default:
            return state
    }
}

export default reducer


