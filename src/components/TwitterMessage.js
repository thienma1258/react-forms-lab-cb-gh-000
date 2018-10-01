import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
message:''

    };
  }
  handleInputChange=(e)=>{


    this.setState({   message: e.target.value})
  }
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input name="message" type="text" value={this.state.message} onChange={this.handleInputChange}  />
        <p>{this.props.maxChars}</p>
        <p>{this.state.message.length-this.props.maxChars}</p>
        
      </div>
    );
  }
}

export default TwitterMessage;
