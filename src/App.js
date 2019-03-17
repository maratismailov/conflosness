import React, { Component } from 'react';
import './App.css';
import { Animated } from "react-animated-css";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css";

class App extends Component {
  render() {
    return (
      <div>
        {/* <div className='Image'>
          <img src={require('./tre.jpg')} alt=''/>
        </div> */}
        {/* <Animated animationIn="tada" animationOut="fadeOut" animationOutDelay={2222} isVisible={false}>
          <img src={require('./images/mae-mu-1438149-unsplash.jpg')} alt='' width='100%' />
        </Animated>
        <Animated animationIn="tada" animationOut="fadeOut" animationOutDelay={2222} isVisible={true}>
          <img src={require('./images/mae-mu-1438149-unsplash.jpg')} alt='' width='100%' />
        </Animated> */}
        <ScrollAnimation animateIn="fadeIn" offset={0}>
          Some Text
        </ScrollAnimation>
      </div>
    );
  }
}

export default App;
