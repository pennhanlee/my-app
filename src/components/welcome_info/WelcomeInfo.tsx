import React, { Component } from 'react';
import classes from "./WelcomeInfo.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagramSquare, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import Button from "../button/Button";

function WelcomeInfo() {
    return (<div className={classes.welcomeinfo}>
        <div>
            <h1>Hi, I'm Penn Han</h1>
        </div>
        <div className={classes.contactinfo}>
            <div className={classes.icon}>
                <FontAwesomeIcon icon={faFacebookSquare} />
            </div>
            <div className={classes.icon}>
                <FontAwesomeIcon icon={faInstagramSquare} />
            </div>
            <div className={classes.icon}>
                <FontAwesomeIcon icon={faLinkedinIn} />
            </div>
            <p>leepennhan98@gmail.com</p>
        </div>
        <div>
            <Button label="Resume"/>
            <Button label="Cover Letter"/>
        </div>
    </div >)
}

export default WelcomeInfo