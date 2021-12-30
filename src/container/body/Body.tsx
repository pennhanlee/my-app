
import classes from "./Body.module.css"

import Accordian from "../../components/accordian/Accordian"
import Header from "../../components/header/Header"

import { educationData } from '../../assets/data/education';
import { internshipData } from '../../assets/data/internship';
import { projectData } from '../../assets/data/project';
import { introductionData } from "../../assets/data/introduction" 

function Body() {
    return (
        <div className={classes.bodylayout}>
            <div className={classes.section}>
            <Header header="Introduction" />
            {introductionData.map(({ title, content, link}) => (
                <div className={classes.accordianDescription}>
                <Accordian title={title} content={content} link={link}/>
                </div>
            ))}
            </div>
            <div className={classes.section}>
            <Header header="Education" />
            {educationData.map(({ title, content, link}) => (
                <div className={classes.accordianDescription}>
                <Accordian title={title} content={content} link={link}/>
                </div>
            ))}
            </div>
            <div className={classes.section}>
            <Header header="Projects" />
            {projectData.map(({ title, content, link}) => (
                <div className={classes.accordianDescription}>
                <Accordian title={title} content={content} link={link} />
                </div>
            ))}
            </div>
            <div className={classes.section}>
            <Header header="Internship" />
            {internshipData.map(({ title, content, link}) => (
                <div className={classes.accordianDescription}>
                <Accordian title={title} content={content} link={link} />
                </div>
            ))}
            </div>
            <div className={classes.section}>
            <Header header="Notables" />
            {educationData.map(({ title, content, link }) => (
                <div className={classes.accordianDescription}>
                <Accordian title={title} content={content} link={link} />
                </div>
            ))}
            </div>
        </div>
    )

}

export default Body;