import React, {Component} from "react";

import './PosterPreview.css'

export default class PosterPreview extends Component {

    render() {
        const {poster_path, original_title, id} = this.props;

        return (
            <div className={'posterPreview'}>
                <a href={`/movie/${id}`}><img src={`https://image.tmdb.org/t/p/w300/${poster_path}?api_key=2c8f90555472a
                1f646c199a8fee4e33d`} alt={`Poster preview for film ${original_title}`}/></a>
            </div>
        );
    }
}
