import React from 'react';

import './AddPerson.css';

const AddPerson = (props) => (
    <div className="AddPerson">
        <button type='button' value='addPersBtn' onClick={props.personAdded}>Add Person</button>
    </div>
);

export default AddPerson;