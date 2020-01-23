import React, {Component} from 'react';
import {ThemeContext} from '../../Context';
import './PageLayout.scss';

const CN = 'awesome-app-page-layout';

class PageLayout extends Component {
    state = {
        isDarkTheme: false
    };

    switchDarkTheme = () => {
        this.setState({
            isDarkTheme: !this.state.isDarkTheme
        });
    };

    render() {
        const {isDarkTheme} = this.state;
        const {children} = this.props;
        const darkCN = isDarkTheme ? `${CN}--dark` : '';

        return (
            <ThemeContext.Provider
                value={{
                    isDarkTheme,
                    switchDarkTheme: this.switchDarkTheme
                }}
            >
                <div className={`${CN} ${darkCN}`}>
                    {children}
                </div>
            </ThemeContext.Provider>
        );
    }
}

export default PageLayout;
