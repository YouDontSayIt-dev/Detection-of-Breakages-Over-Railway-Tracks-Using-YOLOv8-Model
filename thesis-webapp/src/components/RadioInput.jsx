import React, { Component } from "react";
import "../components/RadioInput.css"; // Import the CSS file for styling

class RadioInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: "image", // Default selected value
    };
  }

  handleRadioChange = (event) => {
    this.setState({
      selectedValue: event.target.value,
    });
    this.props.onRadioChange(event.target.value); // Pass the selected value to the parent component
  };

  render() {
    return (
      <div className=" w-[272px] h-[40px] lg:w-[254px] lg:h-[56px] mb-8">
        <label className="text-ebony">Step 2: Choose Inference Result</label>
        <div className="radio-input">
          <label>
            <input
              type="radio"
              name="value-radio"
              id="image"
              value="image"
              checked={this.state.selectedValue === "image"}
              onChange={this.handleRadioChange}
            />
            <span>Image</span>
          </label>
          <label>
            <input
              type="radio"
              name="value-radio"
              id="JSON"
              value="JSON"
              checked={this.state.selectedValue === "JSON"}
              onChange={this.handleRadioChange}
            />
            <span>JSON</span>
          </label>
          <span className="selection"></span>
        </div>
      </div>
    );
  }
}

export default RadioInput;
