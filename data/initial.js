import { createStore } from 'redux';
import examples from '../examples.json';
import reducer from './reducer';

const initial = {
    media: examples,
};

const store = createStore(
    reducer,
    initial,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);


export { store };