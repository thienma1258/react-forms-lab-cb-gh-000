import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username:'',
      password:''
    };
  }
  handleInputChange=(e)=>{


    this.setState({  [e.target.id]: e.target.value})
  }
  render() {
    return (
      <form>
        <div>
          <label>
            Username
            <input id="username" name="username" onChange={this.handleInputChange}  type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" onChange={this.handleInputChange} type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
