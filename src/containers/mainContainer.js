import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Navbar from '../components/navbar/navbar';
import Profile from '../components/profile/profile';
import classes from './mainContainer.module.css';

const Gallery = React.lazy(() => {
    return import('./gallery/gallery');
});

const mainContainer = props => {
    let routes = (
        <Switch>
            <Route path="/gallery" exact render={() => <Gallery />} />
            <Route path="/profile" exact component={Profile} />
            <Redirect to="/profile" />
        </Switch>
    );

    return (
        <div className={classes.mainContainer}>
            <Navbar />
            <div className={classes.contentContainer}>
                <Suspense fallback={<p>Loading gallery...</p>}>
                    {routes}
                </Suspense>
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