import React, {Component} from 'react';
import classes from './Footer.module.css'

class Footer extends Component {
    render(){
        return(
            <div className={classes.Footer} >
                <p className={classes.Links} >Links</p>
                <p className={classes.Name}>Made by <strong>Aleksander Meihack Thu</strong></p>
            </div>
        );
    }
}

export default Footer;