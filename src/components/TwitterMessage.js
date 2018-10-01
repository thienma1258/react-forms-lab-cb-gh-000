import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
message:''

    };
  }
  handleInputChange=(event)=>{
    this.setState({   [event.target.name]: event.target.value})
  }
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input name="message" type="text" value={this.state.message} onChange={this.handleInputChange}  />
      </div>
    );
  }
}

export default TwitterMessage;
