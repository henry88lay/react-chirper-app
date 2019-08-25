import {thunk} from 'redux-thunk';
import logger from './logger';
import {applyMiddleWare} from 'redux';

export default applyMiddleWare(thunk, logger);
