import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunkMiddleware from 'redux-thunk';

import reducer from './reducers';

const middleware = applyMiddleware(thunkMiddleware);

const Store = createStore(reducer, composeWithDevTools(middleware));

export default Store;
