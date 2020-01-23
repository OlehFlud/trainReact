import React from 'react';
import NotFoundImg from '../../assets/not-found.png';
import './NotFoundPage.css';
import {Button} from "../../components/Button/Button";

const CN = "not-found-page";


const NotFoundPage = (props) => {

    const onGoHomeClick = () => {
        const {history} = props;
        history.push('/');
    };

    return (
        <div className={CN}>
            <img alt="not-found" src={NotFoundImg}/>
            <Button onClick={onGoHomeClick} label="Go Home" className={`${CN}__btn`}/>
        </div>
    );
};
export default NotFoundPage;
