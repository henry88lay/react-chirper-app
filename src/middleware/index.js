import {thunk} from 'redux-thunk';
import logger from './logger';
import {applyMiddleWare} from 'redux';
import middleware from './middleware';

const store = createStore(reducer, middleware);

export default applyMiddleWare(thunk, logger);
