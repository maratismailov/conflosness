import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css'

function Element(props) {
    return (
        <div>
            <ScrollAnimation animateIn="fadeIn" animateOut="rotateOutUpRight" offset={360}>
                <div>
                    {props.text}
                    <img src={props.img}></img>
                </div>
            </ScrollAnimation>
        </div>
    )
}

export default Element

