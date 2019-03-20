import React, { Component } from 'react';
import './App.css';
import Element from './Element';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      elementsText: [
        {
          text: 'Какого чёрта вы чихаете тут!',
          id: 1
        },
        {
          text: 'И кашляете',
          id: 2
        },
        {
          text: 'Сидели бы по домам, блин',
          id: 3
        },
        {
          text: 'Мало ли что вы разносите тут',
          id: 4
        },
        {
          text: 'Хоть бы сифилис, легко же лечится',
          id: 5
        },
        {
          text: 'Не как в средневековье',
          id: 6
        },
        {
          text: 'Болезни, эпидемии, чума',
          id: 7
        },
        {
          text: 'Гроб гроб кладбище',
          id: 8
        },
        {
          text: 'Маска с клювом, не забыть посмотреть что это за маска',
          id: 9
        },
        {
          text: 'Прямо сейчас',
          id: 10
        },
        {
          text: 'Пропитанный уксусом тампон!',
          id: 11
        },
        {
          text: 'Фу, уксусом дышать',
          id: 12
        },
        {
          text: 'Надо подумать',
          id: 13
        },
        {
          text: 'Наверное, такая маска защищает лучше обычной марлевой',
          id: 14
        },
        {
          text: 'Буду ходить с клювом, пусть все чихают и кашляют вокруг',
          id: 15
        },
        {
          text: '',
          id: 16,
          imgPath: require('./images/mask.png'),
        },
        {
          text: '',
          id: 17
        },
        {
          text: '',
          id: 18
        },

      ]
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
