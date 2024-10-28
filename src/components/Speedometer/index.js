import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {
    count: 0,
  }

  onAccelerate = () => {
    const {count} = this.state
    if (count > 190) {
      this.setState(prevState => ({count: 200}))
    } else {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  onApplyBrake = () => {
    const {count} = this.state
    if (count < 10) {
      this.setState(prevState => ({count: 0}))
    } else {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading-ele">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="img-ele"
        />
        <h1 className="speed-ele">Speed is {count}mph</h1>
        <p className="para-ele">Min limit is 0mph, Max limit is 200mph</p>
        <div>
          <button
            className="accelerate-btn"
            type="button"
            onClick={this.onAccelerate}
          >
            Accelerate
          </button>
          <button
            className="brake-btn"
            type="button"
            onClick={this.onApplyBrake}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
