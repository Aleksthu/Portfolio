import React, { Component } from 'react';
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
                        <li>C#</li>
                    </ul>
                </div>
                <div className={classes.skills}>
                    <h2>Other</h2>
                    <ul>
                        <li>MongoDB - Mongoose</li>
                        <li>APIs</li>
                        <li>Authentication</li>
                        <li>WPF</li>
                        <li>GIT</li>
                        <li>Firebase</li>
                    </ul>
                </div>
                <div className={classes.skills}>
                    <h2>IDE's</h2>
                    <ul>
                        <li>VSCode</li>
                        <li>Atom</li>
                        <li>VisualStudio2017</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Skills;