import React, { Component } from "react";
import "../components/RadioInput.css"; // Import the CSS file for styling

class RadioInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: "value-1", // Default selected value
    };
  }

  handleRadioChange = (event) => {
    this.setState({
      selectedValue: event.target.value,
    });
  };

  render() {
    return (
      <div className="w-[308px] h-[56px] font-custom">
        <label className="label">Choose mode type:</label>
        <div className="radio-input">
          <label>
            <input
              type="radio"
              name="value-radio"
              id="value-1"
              value="value-1"
              checked={this.state.selectedValue === "value-1"}
              onChange={this.handleRadioChange}
            />
            <span>Inference</span>
          </label>
          <label>
            <input
              type="radio"
              name="value-radio"
              id="value-2"
              value="value-2"
              checked={this.state.selectedValue === "value-2"}
              onChange={this.handleRadioChange}
            />
            <span>Real-time</span>
          </label>
          <span className="selection"></span>
        </div>
      </div>
    );
  }
}

export default RadioInput;
