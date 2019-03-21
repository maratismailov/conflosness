import React, { Component } from 'react';
import './App.css';
import Element from './Element';
import elements from './ElementsArray';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      elementsText: elements
    }
  }

  render() {
    return (
      <div>
        {this.state.elementsText.map(element => {
          return (
            <div key={element.id} className='Element'>
              <Element
                text={element.text}
                img={element.imgPath}
              />
            </div>
          )
        }
        )}
      </div>
    )
  }
}

export default App;
