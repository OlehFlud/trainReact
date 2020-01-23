import React, {Component} from "react";

import {PosterPreview, MovieInfo} from '../index';

export default class MoviesListCard extends Component {


    render() {
        const {movie, genres} = this.props;


        return (
            <div>
                <PosterPreview poster_path={movie.poster_path} original_title={movie.original_title} id={movie.id}/>

                <MovieInfo original_title={movie.original_title} movieDescription={movie.overview} genres={genres}
                           genre_ids={movie.genre_ids} movieRating={movie.vote_average}/>
            </div>

        );
    }
}
