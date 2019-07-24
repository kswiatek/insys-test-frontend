import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../../store/actions/actions'; 
import classes from './menu.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faImage } from '@fortawesome/free-regular-svg-icons';
import * as categories from '../../../shared/categories';

const Menu = props => {
    useEffect(() => {
        const categoryIcons = document.getElementById("categoryIconsContainer").children;   

        Array.from(categoryIcons).forEach(icon => icon.className = "");
        switch (props.category) {
            case categories.CATEGORY_DESCRIPTION:
                Array.from(categoryIcons).find(el => el.id === "userIcon").className = classes.selected;
                props.history.push('/profile');
            break;
            case categories.CATEGORY_GALLERY:
                Array.from(categoryIcons).find(el => el.id === "imageIcon").className = classes.selected;
                props.history.push('/gallery');
            break;
        }
    }, [props.category]);

    let categoryIcons = [];
    categoryIcons.push(<div 
        key="userIcon" 
        id="userIcon" 
        onClick={() => props.onToggleCategory(categories.CATEGORY_DESCRIPTION)}>
            <FontAwesomeIcon 
                    icon={faUser} 
                    size="sm" 
                    color="#FFF" 
                    />
             </div>);
    categoryIcons.push(<div 
        key="imageIcon" 
        id="imageIcon" 
        onClick={() => props.onToggleCategory(categories.CATEGORY_GALLERY)}>
            <FontAwesomeIcon
                    icon={faImage} 
                    size="lg" 
                    color="#FFF"
                     />
            </div>);
    
    return (
        <div className={classes.container}>
            <div className={classes.menu} id="categoryIconsContainer">
                {categoryIcons}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        category: state.category
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onToggleCategory: (category) => dispatch(actions.toggleCategory(category))
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Menu));