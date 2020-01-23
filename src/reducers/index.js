import { combineReducers } from 'redux'
import getMoviesReducer from './getMovies.reducer';

const movieApp = combineReducers({
    getMoviesReducer
    // more reducers here
});
export default movieApp;
