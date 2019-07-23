import React from 'react';
import Navbar from '../components/navbar/navbar';
import classes from './mainContainer.module.css';

const mainContainer = props => {
    return (
        <div className={classes.container}>
            <Navbar />
            <p>content</p>
        </div>
    );
}

export default mainContainer;