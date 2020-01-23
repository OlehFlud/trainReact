import {GET_GENRES} from "../action-types";

import axios from "axios";

export const getGenres = () => {
    return (dispatch) => {

        return axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=2c8f90555472a1f646c199a8fee4e33d')
            .then(({data = {}}) => {
                dispatch({
                    type: GET_GENRES,
                    payload: {
                        genres: data
                    }
                });

            })
            .catch(err => {
                console.log(err);
            });
    }
};
