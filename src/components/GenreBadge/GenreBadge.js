import React, {Component} from "react";
import location from '../../assets/Location.png'
export default class GenreBadge extends Component {

    render() {
        const {genres: {genres}, genre_ids} = this.props;

        let movieGenresString;

        genres && genres.forEach(genre => {
            genre_ids.forEach(genreId => {
                if (genreId === genre.id) {
                    movieGenresString = movieGenresString ? movieGenresString + `, ${genre.name}` : `${genre.name}`;
                }
            });
        });

        return (
            <div className={'genreBadge'}>
                <div><img src={location} alt="location"/></div>
                <p>{movieGenresString}</p>
            </div>
        );
    }
}
