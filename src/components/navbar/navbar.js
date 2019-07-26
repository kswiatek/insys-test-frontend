import React from 'react';
import { withRouter } from 'react-router-dom';
import classes from './navbar.module.css';
import Banner from './banner/banner';
import Menu from './menu/menu';
import ProfilePhoto from './profilePhoto/profilePhoto';

const navbar = props => {
    return (
        <nav className={classes.navbar}>
            <Banner />
            <div className={classes.menuWithPhotoContainer}>
                <Menu />
                <div className={classes.profilePhoto}>
                    <ProfilePhoto />
                </div>
            </div>
        </nav>
    );
}

export default withRouter(navbar);