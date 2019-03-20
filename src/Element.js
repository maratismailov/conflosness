import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Animated } from "react-animated-css";



function Element(props) {
    return (
        <div>
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" >
                {/* {props.text} */}
                <div className="animated fadeIn slower">
                    {props.text}
                    <img src={props.img}></img>
                </div>
            </ScrollAnimation>
            {/* <div className="animated fadeIn slower">
                asdfsdf
           </div> */}
        </div>
    )
}

export default Element

