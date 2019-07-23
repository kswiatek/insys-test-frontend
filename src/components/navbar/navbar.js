import React from 'react';
import classes from './navbar.module.css';
import Banner from './banner/banner';
import Menu from './menu/menu';

const navbar = props => {
    return (
        <React.Fragment>
            <p>navbar</p>
            <Banner />
            <Menu />
        </React.Fragment>
    );
}

export default navbar;