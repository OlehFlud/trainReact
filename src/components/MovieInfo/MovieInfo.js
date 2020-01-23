import React, {Component} from "react";
import GenreBadge from "../GenreBadge/GenreBadge";
import StarRatingComponent from 'react-star-rating-component';


export default class MovieInfo extends Component {

    render() {
        const {original_title, movieDescription, genres, genre_ids, movieRating} = this.props;

        return (
            <div className={'movieInfo'}>
                <h3>{original_title}</h3>
                <GenreBadge
                    genres={genres}
                    genre_ids={genre_ids}
                />
                <p>{movieDescription}</p>
                <hr/>
                <StarRatingComponent
                    value={movieRating}
                    starCount={10}
                    name='rating'
                    editing={true}
                />

            </div>
        );
    }
}
