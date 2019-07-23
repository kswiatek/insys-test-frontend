import React from 'react';
import classes from './profilePhoto.module.css';
import profilePhotoImg from '../../../assets/marilyn-monroe.jpg';

const profilePhoto = props => {
    return (
        <div className={classes.profilePhotoContainer}>
            <div className={classes.profilePhoto}>
                <img src={profilePhotoImg} alt="profile photo" className={classes.profilePhoto} />
            </div>
        </div>
    );
}

export default profilePhoto;