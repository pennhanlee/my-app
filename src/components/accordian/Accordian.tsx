import React, { useState } from 'react';
import classes from "./Accordian.module.css"

import Chervon from "../../assets/pictures/right-chevron.png"


interface AccordianProps {
    title: string;
    content: string;
    link: string;
}

function Accordion({ title, content, link }: AccordianProps) {

    const [isActive, setIsActive] = useState(false);

    return (
        <div className={classes.accordian}>
            <div>
                <div className={classes.accordiontitle} onClick={() => setIsActive(!isActive)}>
                    <div>{title}</div>
                    <div><img className={classes.chervon} src={Chervon} aria-expanded={isActive} alt='toggle accordion' /></div>
                </div>
                {/*{isActive && <div className={classes.accordion_content} aria-expanded={!isActive}>{content}</div>} */}
                <div className={classes.accordion_content} aria-expanded={!isActive}>
                    <div className={classes.content}>
                        {content}
                        <div> 
                            <a href={link}>{link}</a> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accordion;