import { combineReducers } from 'redux';
import piecesReducer from './pieces_reducer'
import tagsReducer from './tags_reducer'
const rootReducer = combineReducers({
    pieces: piecesReducer,
    tags: tagsReducer
})

export default rootReducer;