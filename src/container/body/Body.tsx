
import classes from "./Body.module.css"

import Accordian from "../../components/accordian/Accordian"
import Header from "../../components/header/Header"

import { educationData } from '../../assets/data/education';
import { introductionData } from "../../assets/data/introduction" 

function Body() {
    return (
        <div className={classes.bodylayout}>
            <div className={classes.section}>
            <Header header="Introduction" />
            {introductionData.map(({ title, content }) => (
                <div className={classes.accordianDescription}>
                <Accordian title={title} content={content} />
                </div>
            ))}
            </div>
            <div className={classes.section}>
            <Header header="Education" />
            {educationData.map(({ title, content }) => (
                <div className={classes.accordianDescription}>
                <Accordian title={title} content={content} />
                </div>
            ))}
            </div>
            <div className={classes.section}>
            <Header header="Projects" />
            {educationData.map(({ title, content }) => (
                <div className={classes.accordianDescription}>
                <Accordian title={title} content={content} />
                </div>
            ))}
            </div>
            <div className={classes.section}>
            <Header header="Awards" />
            {educationData.map(({ title, content }) => (
                <div className={classes.accordianDescription}>
                <Accordian title={title} content={content} />
                </div>
            ))}
            </div>
            <div className={classes.section}>
            <Header header="Notables" />
            {educationData.map(({ title, content }) => (
                <div className={classes.accordianDescription}>
                <Accordian title={title} content={content} />
                </div>
            ))}
            </div>
        </div>
    )

}

export default Body;