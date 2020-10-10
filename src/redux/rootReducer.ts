import { questionsReducer } from './questionsReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ questions: questionsReducer });

export default rootReducer;
