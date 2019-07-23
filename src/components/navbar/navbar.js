import React from 'react';
import classes from './navbar.module.css';
import Banner from './banner/banner';
import Menu from './menu/menu';
import ProfilePhoto from './profilePhoto/profilePhoto';

const navbar = props => {
    return (
        <div className={classes.navbar}>
            <Banner />
            <Menu />
            <div className={classes.profilePhoto}>
                <ProfilePhoto />
            </div>
        </div>
    );
}

export default navbar;