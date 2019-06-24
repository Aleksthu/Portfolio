import React, { Component } from 'react';

import Aux from '../../hoc/auxiliary';
import classes from '../Frontpage/Frontpage.module.css';

class Frontpage extends Component {

    render() {
        return (
            <Aux>
                <div className={classes.main} >
                    <h1>Aleksander Meihack Thu</h1>
                    <h2>Full Stack Web Developer</h2>
                </div>
            </Aux>
        );
    }
}

export default Frontpage;