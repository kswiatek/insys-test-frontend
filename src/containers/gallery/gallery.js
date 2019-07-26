import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import LoadingImage from './loadingImage/loadingImage';
import classes from './gallery.module.css';
import * as actions from '../../store/actions/actions';

const Gallery = props => {
    useEffect(() => {
        if (!props.images) {
            props.onFetchImages();
        }
        if (props.error) {
            alert("An error occured");
            console.log("An error occured: ", props.error);
        }
    }, []);

    let images = [];
    
    const showLoadingImages = (count) => {
        for (let i = 0; i < count; i++) {
            images.push(<LoadingImage key={i} />);
        }
    }
    
    const showFetchedImages = () => {
        images = props.images.map(obj => {
            return (
                <div 
                    key={obj.thumbLink}
                    className={classes.imageContainer} 
                    onClick={() => window.open(obj.fullLink)}>
                    <LazyLoadImage 
                        src={obj.thumbLink}
                        alt="thumb image" 
                        effect="blur"/>
                </div>
            );
        });
    }

    showLoadingImages(9);
    
    if (props.images) {
        showFetchedImages();
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