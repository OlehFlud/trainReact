import {SET_DARKTHEME} from '../action-types';

export const setDarkTheme = (darkTheme) => {
    return ({
        type: SET_DARKTHEME,
        payload: {
            darkTheme
        }
    });
};

