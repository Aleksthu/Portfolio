import React, { Component } from 'react';

import classes from './Projects.module.css';

class Projects extends Component {

    render() {
        return (
            <div className={classes.projects}>
                    <div className={classes.project + ' ' + classes.tindog} >
                        <h1>tindog</h1>
                        <a className={classes.projectBtn} href='https://aleksthu.github.io/UdemyTindog/' >Project</a>
                        <a className={classes.projectBtn} href='https://github.com/Aleksthu/UdemyTindog' >Code</a>
                    </div>
                    <div className={classes.project + ' ' + classes.simonGame} >
                        <h1>Simon Game</h1>
                        <a className={classes.projectBtn} href='https://aleksthu.github.io/UdemyTindog/' >Project</a>
                        <a className={classes.projectBtn} href='https://github.com/Aleksthu/UdemyTindog' >Code</a>
                    </div>
                    <div className={classes.project + ' ' + classes.tindog} >
                        <h1>tindog</h1>
                        <a className={classes.projectBtn} href='https://aleksthu.github.io/UdemyTindog/' >Project</a>
                        <a className={classes.projectBtn} href='https://github.com/Aleksthu/UdemyTindog' >Code</a>
                    </div>
                    <div className={classes.project + ' ' + classes.tindog} >
                        <h1>tindog</h1>
                        <a className={classes.projectBtn} href='https://aleksthu.github.io/UdemyTindog/' >Project</a>
                        <a className={classes.projectBtn} href='https://github.com/Aleksthu/UdemyTindog' >Code</a>
                    </div>
                    <div className={classes.project + ' ' + classes.tindog} >
                        <h1>tindog</h1>
                        <a className={classes.projectBtn} href='https://aleksthu.github.io/UdemyTindog/' >Project</a>
                        <a className={classes.projectBtn} href='https://github.com/Aleksthu/UdemyTindog' >Code</a>
                    </div>
                    <div className={classes.project + ' ' + classes.tindog} >
                        <h1>tindog</h1>
                        <a className={classes.projectBtn} href='https://aleksthu.github.io/UdemyTindog/' >Project</a>
                        <a className={classes.projectBtn} href='https://github.com/Aleksthu/UdemyTindog' >Code</a>
                    </div>
                
            </div>
        );
    }
}

export default Projects;