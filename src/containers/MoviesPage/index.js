import {connect} from 'react-redux';
import { withRouter } from 'react-router';

import MoviesPageComponent from './MoviesPage';

import {getMovies, getGenres,setDarkTheme} from '../../actions';


const mapStateToProps = (state) => {
    const {getMoviesReducer: { movies,genres,darkTheme}} = state;

    return {
        movies,
        genres,
        darkTheme
    };
};

const mapDispatchToProps = {
    getMovies,
    getGenres,
    setDarkTheme

};

const MoviesPageWithConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)(MoviesPageComponent);

export default withRouter(MoviesPageWithConnect);
