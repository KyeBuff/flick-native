import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import examples from '../examples.json';
import reducer from './reducer';


const initial = {
    media: []
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	reducer, 
	initial, 
	composeEnhancers(applyMiddleware(thunk)));

export { store };