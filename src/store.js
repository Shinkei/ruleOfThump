import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import ruleOfThumbsReducer from './reducers/ruleOfThumbs';

export default createStore(
    ruleOfThumbsReducer,
    composeWithDevTools(applyMiddleware(thunk))
);