import React from 'react';
import classes from './Button.module.css';

interface ButtonProps {
    label: string;
}

function Button({ label }: ButtonProps) {
    return (
    <div className={classes.button}>
        <button>{label}</button>
    </div>)
}

export default Button;