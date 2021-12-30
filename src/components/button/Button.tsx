import React from 'react';
import classes from './Button.module.css';

interface ButtonProps {
    label: string;
    path: string;
}

function Button({ label, path }: ButtonProps) {

    return (
    <div className={classes.button}>
        <a href={path} download={label}>
            <button>{label}</button>
        </a>
    </div>)
}

export default Button;