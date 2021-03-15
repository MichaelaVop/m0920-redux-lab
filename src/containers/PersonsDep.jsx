import React, {Component} from 'react';
import {connect} from 'react-redux';
import {newPerson, deletePerson} from '../actions/personsUpdate';
import AddPerson from '../components/AddPerson/AddPerson';
import Person from '../components/Person/Person';

class PersonDep extends Component {
    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.newPerson} />
                {this.props.personsData.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.deletePerson(person.id)}/>
                ))}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    personsData: state.personsData
})

const mapDispatchToProps = {
    newPerson,
    deletePerson,
}

/*
const mapDispatchToProps = (dispatch) => {
    return {
        newPerson: () => dispatch(newPerson()),
        newPerson = poprve je název props v komponentě : (parametr) => dispatch(newperson = action funkce(parametr))
        deletePerson: (id) => dispatch(deletePerson(id)),

    };
}
*/

export default connect(mapStateToProps, mapDispatchToProps)(PersonDep);

// Z indexu -> volám store s parametrem reducer -> initstate
// initstate = state celé aplikace
// action - vrací objekt -> action + dispatch - volá reducer, vrací new state
// connect - propojuje react komponentu s redux storem - (state, dispatch)