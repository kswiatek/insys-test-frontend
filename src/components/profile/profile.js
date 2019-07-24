import React from 'react';
import classes from './profile.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const profile = props => {
    return (
        <article className={classes.articleContainer}>
            <section>
                <h1>Marilyn Monroe</h1>
                <h3>
                    <span className={classes.iconContainer}>
                        <FontAwesomeIcon 
                            icon={faMapMarkerAlt} 
                            size="2x" />
                    </span>
                    Poznan, PL
                </h3>
            </section>
            <section>
                <p>
                    Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque 
                    laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis 
                    et quasi architecto beatae vitae dicta sunt, explicabo.
                </p>
                <blockquote>
                    Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, 
                    cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod.
                </blockquote>
                <p>
                    Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque 
                    laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis 
                    et quasi architecto beatae vitae dicta sunt, explicabo.
                </p>
            </section>
        </article>
    );
}

export default profile;