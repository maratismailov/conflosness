import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css'

function Element(props) {
    return (
        <div>
            <ScrollAnimation animateIn="fadeIn" animateOut="rotateOutUpRight" offset={360}>
                {props.text}
                <img src={props.img} />
            </ScrollAnimation>
        </div>
    )
}

export default Element