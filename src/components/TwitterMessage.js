import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
message:''

    };
  }
  handleInputChange=(e)=>{


    this.setState({   [e.target.name]: e.target.value})
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
