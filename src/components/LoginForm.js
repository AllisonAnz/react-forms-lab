import React from "react";

class LoginForm extends React.Component {
  //takes one prop: handleLogin function: when called the form is being submitted 
  //by default, the function just includes console.log (allows you to see the form function correctly when working in your browser)
  //two input components <input type="text"> and <input type="password">, make 
  //this a controlled component by adding in attributes to these inputs. 
  //the input values should be saved to the component's state on every change 
  //Ex:
  //  <input 
  //    id="username"
  //    type="text"
  //    name="username"
  //    value={this.state.username}
  //    onChange={this.handleInputChange}
  //  />
  //You can retrieve the input name and value of an event.target from the JS event 
  //add the event handler to the <form> element in order to call the onSubmit callback prop 
  //The onSubmit callback prop should only be called if both fields are filled (with any value)
  
  //Saving input value in state: save username and password in state when the input changes                      
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  //handleLogin callback prop 
  //should call the prevent the default action when form is being submitted 
  //should not call the 'handleLogin" callback prop when the user or password field is empty 
  //should call the 'handleLogin' cb prop when the form is being submitted 
  handleSubmit = event => {
    event.preventDefault()
    if (!this.state.username || !this.state.password) 
      return 
        this.props.handleLogin(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text"
                    onChange={this.handleChange} value={this.state.username} />
          </label>
        </div>

        <div>
          <label>
            Password
            <input id="password" name="password" type="password" 
                    onChange={this.handleChange} value={this.state.password}/>
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
