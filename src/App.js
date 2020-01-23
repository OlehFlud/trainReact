import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import React, {Component} from 'react'
import MoviesPage from "./containers/MoviesPage";
import NotFoundPage from "./containers/NotFoundPage/NotFoundPage";
import './App.css'
import LoginPage from "./containers/LoginPage/LoginPage";
import RegisterPage from "./containers/RegisterPage/RegisterPage";
import PageLayout from "./components/PageLayout";
import EditPage from "./containers/EditPage/EditPage";

class App extends Component {
    render() {
        return (

            <Router>
                <PageLayout>
                    <Switch>
                        <Route exact path="/edit" component={EditPage}/>
                        <Route exact path="/moviesPage" component={MoviesPage}/>
                        <Route exact path="/register" component={RegisterPage}/>
                        <Route exact path="/" component={LoginPage}/>
                        <Route
                            path="/not-found"
                            render={routeProps => (
                                <NotFoundPage {...routeProps}/>
                            )}
                        />

                        <Redirect
                            from="*"
                            to={{
                                pathname: '/not-found'
                            }}
                        />

                    </Switch>
                </PageLayout>
            </Router>
        )
    }
}

export default App

