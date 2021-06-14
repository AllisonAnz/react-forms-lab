import React from "react";

class TwitterMessage extends React.Component {
  //Takes one prop: maxChars which is a number: the max amt of chars a message can have. This prop is passed in from the App comp w/value of 280
  //Make <input type="text"> a controlled compontent by assing the attributes to the input el. 
  //its value should be saved in the comp. state and update on every change to the input 
  //Show the ramaining char. in the component. It doesn't matter how you render it, as long as the number is correct. 
  constructor() {
    super();

    //Saving input value in state
    this.state = {
      message: ''
    };
  }

    //handleChange: update the state when typing
    handleChange = event => {
      this.setState({
        message: event.target.value
      })
    }

  render() {
    //Character Counter: Show ramining character counter, should update the counter when typing 
    let charNumber = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message"
                onChange={this.handleChange} value={this.state.message} />
        {charNumber}
      </div>
    );
  }
}

export default TwitterMessage;
