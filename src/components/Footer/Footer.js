import React, {Component} from 'react';
import './Footer.css';
import {Button} from "../../components/Button/Button";

export default class Footer extends Component {

    render() {
        return (

            <footer className={'footer'}>
                <div className={'footer-btns'}>
                    <button key="About" className="footer-btn" href="/#">About</button>
                    <button key="Contact" className="footer-btn" href="/#">Contact</button>
                    <button key="Support" className="footer-btn" href="/#">Support</button>
                </div>
            </footer>

        );
    };
};
