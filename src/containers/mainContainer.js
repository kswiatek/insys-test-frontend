import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Navbar from '../components/navbar/navbar';
import Profile from '../components/profile/profile';
import Gallery from './gallery/gallery';
import classes from './mainContainer.module.css';

const mainContainer = props => {
    let routes = (
        <Switch>
            <Route path="/profile" exact component={Profile} />
            <Route path="/gallery" exact component={Gallery} />
            <Redirect to="/profile" />
        </Switch>
    );

    return (
        <div className={classes.mainContainer}>
            <Navbar />
            <div className={classes.contentContainer}>
                {routes}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        category: state.category
    }
};

export default withRouter(connect(mapStateToProps)(mainContainer));