import React, { Component } from 'react';
import classes from './Footer.module.css';
import 'font-awesome/css/font-awesome.min.css';

class Footer extends Component {
    render() {
        return (
            <div className={classes.Footer} >
                <p className={classes.Links} >
                    <a href="https://www.linkedin.com/in/aleksander-meihack-thu-952a69124/"><i className="fa fa-linkedin-square" /></a>
                    <a href="https://github.com/Aleksthu"><i className="fa fa-github" /></a>
                </p>
                <p className={classes.Name}>Made by <strong>Aleksander Meihack Thu</strong></p>
            </div>
        );
    }
}

export default Footer;