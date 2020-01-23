import {GET_MOVIES} from "../action-types";

import axios from "axios";

export const getMovies = () => {
    return (dispatch) => {

        return axios.get('https://api.themoviedb.org/3/discover/movie?api_key=2c8f90555472a1f646c199a8fee4e33d')
            .then(({data = {}}) => {
                dispatch({
                    type: GET_MOVIES,
                    payload: {
                        movies: data
                    }
                });

            })
            .catch(err => {
                console.log(err);
            });
    }
};
