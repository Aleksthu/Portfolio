import React from 'react';
import classes from './Navbar.module.css';

const navbar = () => (
    <header>
        <div className={classes.navbar}>
            <ul>
                <a href='#home' className={classes.home}>Home</a>
                <a href='#skills' className={classes.skills}>Skills</a>
                <a href='#projects'className={classes.projects}>Projects</a>
            </ul>
        </div>
    </header>
);

export default navbar;