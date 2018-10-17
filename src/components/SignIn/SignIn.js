import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import './SignIn.css';
import Footer from '../Footer/Footer';


const API_URL = getHostURL();
const AUTH_URL = `${API_URL}/api/users/login/`;

function getHostURL() {
  if(window.location.host.indexOf('localhost') !== -1) {
    return 'http://localhost:8000';
  } else {
    return 'https://capstone-server-tobac-app.herokuapp.com';
  }
}




class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loginError: false,
      errorMsg: null,
    }
    // console.log(API_URL);
  }

  activateUser = (userData) => {
    this.setState({
      userData: userData,
    })
  }




  addUser = (event) => {
    event.preventDefault();
    let userData = {
      email: this.refs.email.value,
      password: this.refs.password.value
    }
    const request = new Request(AUTH_URL, {
      method: 'POST',
      mode: 'cors',
      headers: new Headers({
        'Content-Type': 'application/json; charset=utf-8',
        'credentials': 'include',
        'crossDomain': true,
      }),
      body: JSON.stringify(userData)
    });
    fetch(request)
      .then((res) => res.text())
      .then(text => JSON.parse(text))
      .then(data => {
        console.log('data', data);
        if (userData.email === '' && userData.password === '') {
          let errorMessage = new Error('Must Enter Valid Info!');
          alert(errorMessage);
        }
        if (data.message === 'User not found in the database!') {
          alert('Invalid user!')
        }
        if (data.message === 'Invalid login ☹️') {
          alert('Invalid login ☹️')
        }
        if (data.result === true) {
          alert(`Welcome, ${userData.email}`);
          this.setState({
            email: userData.email,
            password: userData.password
          });
          console.log(this.state);
          this.setState({
            email: '',
            password: ''
          });
        }
      });
  }
                              

    

    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      });

    }

    

    render() {
    return(
        <div>
          <NavBar />
            <div className="sign-in-card container">
              <form ref="login">
                <h2 className="sign-in">Log In</h2>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input type="email" ref="email" value={this.state.email} onChange={this.handleChange}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" autoComplete="username-email" name="email"/>
                  <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" ref="password" value={this.state.password} onChange={this.handleChange}  className="form-control" id="InputPassword1" placeholder="Password" autoComplete="current-password" name="password"/>
                </div>
                <button type="submit"  onClick={this.addUser} className="btn btn-primary">Submit</button>
              </form>
            </div>
         <Footer />
        </div>
    );
  }
}

export default SignIn;