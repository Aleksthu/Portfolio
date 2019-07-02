import React, { Component } from 'react';

import classes from './Projects.module.css';

class Projects extends Component {

    render() {
        return (
            <div className={classes.projects}>
                <div className={classes.project + ' ' + classes.blog} >
                    <h1>Blog</h1>
                    <a className={classes.projectBtn} href='https://github.com/Aleksthu/UdemyBlog' >Code</a>
                </div>
                <div className={classes.project + ' ' + classes.todoList} >
                    <h1>TodoList</h1>
                    <a className={classes.projectBtn} href='https://github.com/Aleksthu/UdemyTodoList' >Code</a>
                </div>
                <div className={classes.project + ' ' + classes.secrets} >
                    <h1>Secrets</h1>
                    <a className={classes.projectBtn} href='https://github.com/Aleksthu/UdemySecrets' >Code</a>
                </div>
                <div className={classes.project + ' ' + classes.tindog} >
                    <h1>Tindog</h1>
                    <a className={classes.projectBtn} href='https://aleksthu.github.io/UdemyTindog/' >Project</a>
                    <a className={classes.projectBtn} href='https://github.com/Aleksthu/UdemyTindog' >Code</a>
                </div>
                <div className={classes.project + ' ' + classes.simonGame} >
                    <h1>Simon Game</h1>
                    <a className={classes.projectBtn} href='https://aleksthu.github.io/UdemySimonGame/' >Project</a>
                    <a className={classes.projectBtn} href='https://github.com/Aleksthu/UdemySimonGame' >Code</a>
                </div>
                <div className={classes.project + ' ' + classes.diceGame} >
                    <h1>Dice Game</h1>
                    <a className={classes.projectBtn} href='https://aleksthu.github.io/UdemyDiceGame/dicee.html' >Project</a>
                    <a className={classes.projectBtn} href='https://github.com/Aleksthu/UdemyDiceGame' >Code</a>
                </div>
                <div className={classes.project + ' ' + classes.drumkit} >
                    <h1>Drum Kit</h1>
                    <a className={classes.projectBtn} href='https://aleksthu.github.io/UdemyDrumKit/' >Project</a>
                    <a className={classes.projectBtn} href='https://github.com/Aleksthu/UdemyDrumKit' >Code</a>
                </div>
                <div className={classes.project + ' ' + classes.portfolio} >
                    <h1>This Portfolio</h1>
                    <a className={classes.projectBtn} href='https://github.com/Aleksthu/Portfolio' >Code</a>
                </div>
            </div>
        );
    }
}

export default Projects;