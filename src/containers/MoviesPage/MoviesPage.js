import React, {Component} from 'react';
import {Main, Footer, Toggle} from '../../components';
import {Link} from "react-router-dom";
import './MoviesPage.scss'
import Logo from '../../assets/Logo.png'
class MoviesPage extends Component {
    constructor() {
        super();

        this.state = {
            searchQuery: '',
            isDarkTheme: true
        };
        this.onToggleClick = this.onToggleClick.bind(this)
    }

    onToggleClick() {
        const {isDarkTheme} = this.state;
        const {setDarkTheme} = this.props;
        this.setState({isDarkTheme: !isDarkTheme});
        setDarkTheme(isDarkTheme)
    }

    logOut(e) {
        e.preventDefault();
        localStorage.removeItem('token');
        this.props.history.push('/');
    }

    onInputHandle = (e) => {
        this.setState({searchQuery: e.target.value});
    };

    render() {
        const {getMovies, getGenres, movies, genres} = this.props;
        const userLink = (
            <ul className="navbar-nav">

                <li className="nav-btn">
                    <Link to={`/login`} onClick={this.logOut.bind(this)} className="nav-link">
                        Logout
                    </Link>
                </li>
            </ul>
        );
        return (

            <div>
                <div className={'headerComponent'}>
                    <a href="/"><img src={Logo} alt="Pinball logo"/></a>
                    <div className={'navbar-nav'}>
                        {localStorage.token ? <Toggle/> : 'Please login to the site'}
                        <input  type="text"  onChange={this.onInputHandle}  />
                    </div>
                    {localStorage.token ? userLink : ''}
                </div>

                {localStorage.token ? <Main
                    getMovies={getMovies}
                    movies={movies}
                    getGenres={getGenres}
                    genres={genres}
                /> : ''}

                {localStorage.token ? <Footer/> : ''}

            </div>
        );
    }
}

export default MoviesPage;
