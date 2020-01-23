import React, {Component} from 'react';
import {MoviesList} from '../index';
import './Main.css'

export default class Main extends Component {
    componentDidMount() {
        const {getMovies, getGenres} = this.props;

        getMovies();
        getGenres();
    }

    render() {
        const {movies, genres, darkTheme} = this.props;

        let results = movies.results;
        return (
            <main className={darkTheme ? 'mainDarkTheme' : ''}>
                <MoviesList
                    movies={results}
                    genres={genres}
                />
            </main>
        );
    }
}
