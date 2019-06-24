import React, { Component } from 'react';
import Aux from '../../hoc/auxiliary';
import classes from './Skills.module.css';


class Skills extends Component {
    render() {
        return (
            <div className={classes.container}>
                <div className={classes.skills} >
                    <h2>Frontend</h2>
                    <ul>
                        <li>HTML</li>
                        <li>CSS - Bootstrap</li>
                        <li>JavaScript</li>
                        <li>React - Redux</li>
                        <li>EJS</li>
                    </ul>
                </div>
                <div className={classes.skills}>
                    <h2>Backend</h2>
                    <ul>
                        <li>Node.js - Express.js</li>
                    </ul>
                </div>
                <div className={classes.skills}>
                    <h2>Utilites & other</h2>
                    <ul>
                        <li>MongoDB - Mongoose</li>
                        <li>APIs</li>
                        <li>Authentication</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Skills;