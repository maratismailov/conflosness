import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Animated } from "react-animated-css";



function Element(props) {
    return (
        <div>
            <ScrollAnimation animateIn="fadeIn" animationOut="fadeOut" animationInDelay={3} isVisible={false} offset={500}>
                {/* {props.text} */}
                <div className="animated fadeIn slower">
                    {props.text}
                </div>
            </ScrollAnimation>
            {/* <div className="animated fadeIn slower">
                asdfsdf
           </div> */}
        </div>
    )
}

export default Element

