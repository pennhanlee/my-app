import Me from "../../assets/pictures/me.jpg"
import classes from "./Welcome.module.css"


import WelcomeInfo from "../../components/welcome_info/WelcomeInfo"

function Welcome() {
    return (
        <div className={classes.welcome}>
            <div>
                <img src={Me} alt="My Profile Picture" />
            </div>
            <div className={classes.info}>
                <WelcomeInfo />
            </div>
        </div>)
}

export default Welcome