// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {generate: 0}

  onclickGenerate = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState = {generate: randomNumber}
  }

  render() {
    const {generate} = this.state
    return (
      <div className="bg_container">
        <div className="random_container">
          <h1 className="heading">Random Number</h1>
          <p>Generates a random number in the range of 0 to 100</p>

          <button
            className="generate_button"
            type="button"
            onClick={this.onclickGenerate}
          >
            Generate
          </button>
          <p className="heading">{generate}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
