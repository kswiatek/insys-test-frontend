import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import LoadingImage from './loadingImage/loadingImage';
import classes from './gallery.module.css';
import * as actions from '../../store/actions/actions';

const Gallery = props => {

    useEffect(() => {
        if (!props.images) {
            props.onFetchImages();
        }
        if (props.error)
            alert("An error occured");
            console.log("An error occured: ", props.error);
    }, []);

    let images = [];
    for (let i = 0; i < 9; i++) {
        images.push(<LoadingImage />);
    }

    if (props.images) {
        images = props.images.map(obj => {
            return <img src={obj.thumbLink} alt="thumb image" onClick={() => window.open(obj.fullLink)} />
        });
    }

    return (
        <div className={classes.imagesContainer}>
            {images}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        images: state.images,
        error: state.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchImages: () => dispatch(actions.fetchImages())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);