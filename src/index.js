import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux'

import {createStore} from 'redux'


import reducer from './reducers/reducer';
import { newPerson } from './actions/personsUpdate';

const myStore = createStore(reducer)



ReactDOM.render(
    <Provider store={myStore}>
         <App />
    </Provider>,   
    document.getElementById('root')
);

registerServiceWorker();

