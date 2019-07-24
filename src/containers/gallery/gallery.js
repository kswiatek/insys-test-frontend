import React from 'react';
import LoadingImage from './loadingImage/loadingImage';
import classes from './gallery.module.css';

const gallery = props => {

    let images = [];
    for (let i = 0; i < 9; i++) {
        images.push(<LoadingImage />);
    }

    return (
        <div className={classes.imagesContainer}>
            {images}
        </div>
    );
}

export default gallery;