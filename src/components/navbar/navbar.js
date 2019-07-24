import React from 'react';
import { withRouter } from 'react-router-dom';
import classes from './navbar.module.css';
import Banner from './banner/banner';
import Menu from './menu/menu';
import ProfilePhoto from './profilePhoto/profilePhoto';

const navbar = props => { console.log('z navbar his: ', props.history);
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

export default withRouter(navbar);