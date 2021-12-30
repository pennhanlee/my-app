import React from "react";
import Slider from "react-slick";
import classes from "./Carousel.module.css"

function Carousel() {

    var sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
    };


    return (
        <div className={classes.Carousel}>
            <Slider {...sliderSettings}>
                <div>
                    <h1>1</h1>
                </div>
                <div>
                    <h1>2</h1>
                </div>
                <div>
                    <h1>3</h1>
                </div>
                <div>
                    <h1>4</h1>
                </div>
                <div>
                    <h1>5</h1> 
                </div>
            </Slider>
        </div>);

}

export default Carousel;