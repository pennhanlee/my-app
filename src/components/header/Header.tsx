import React from 'react';
import classes from "./Header.module.css";


interface HeaderProps {
    header: string;
}

function Header({header}: HeaderProps) {
    return (
        <div>
            <h2 className={classes.header}>{header}</h2>
        </div>
    )
}

export default Header;