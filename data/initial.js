import { createStore } from 'redux';
import examples from '../examples.json';
​
const store = createStore(
    reducer,
    initial,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const initial = {
    media: examples;
};

export { store };