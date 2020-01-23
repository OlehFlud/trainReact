import {GET_GENRES, GET_MOVIES, SET_DARKTHEME} from '../action-types';

const initialState = {
    movies: [],
    genres: {},
    darkTheme: false

};

const getMoviesReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_MOVIES: {
            const {payload: {movies}} = action;

            return {
                ...state,
                movies
            }
        }
        case GET_GENRES: {
            const {payload: {genres}} = action;

            return {
                ...state,
                genres
            }
        }
        case SET_DARKTHEME: {
            const {payload: {darkTheme}} = action;

            return {
                ...state,
                darkTheme
            }
        }
        default:
            return state;
    }
};
export default getMoviesReducer;
