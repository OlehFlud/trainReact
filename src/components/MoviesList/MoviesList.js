import React, {Component} from "react";

import {MoviesListCard} from '../index';

import './MoviesList.css'

export default class MoviesList extends Component {

    render() {
        const {movies, genres} = this.props;

        return (
            <section className="listOfFilms">
                {
                    movies && movies.map(movie => {
                        return (
                            <MoviesListCard
                                movie={movie}
                                genres={genres}
                                key={`${movie.id}`}/>
                        );
                    })
                }
            </section>
        );
    }
}
