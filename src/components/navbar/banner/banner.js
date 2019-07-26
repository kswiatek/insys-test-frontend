import React from 'react';
import classes from './banner.module.css';
import bannerImg from '../../../assets/sand.jpg';

const navbar = props => {
    return <img src={bannerImg} alt="banner" className={classes.banner} />;
}

export default navbar;