// Write your code here

import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {
    mangos: 0,
    bananas: 0,
  }

  bananaCount = () => {
    this.setState(prevState => ({bananas: prevState.bananas + 1}))
  }

  mangosCount = () => {
    this.setState(prevState => ({mangos: prevState.mangos + 1}))
  }

  render() {
    const {mangos, bananas} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">
            Bob ate <span className="span-style">{mangos}</span> mangoes
            <span className="span-style"> {bananas}</span> bananas
          </h1>
          <div className="image-container">
            <div className="image-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="image"
              />
              <button
                className="button"
                type="button"
                onClick={this.mangosCount}
              >
                Eat Mango
              </button>
            </div>
            <div className="image-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="image"
              />
              <button
                className="button"
                type="button"
                onClick={this.bananaCount}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
