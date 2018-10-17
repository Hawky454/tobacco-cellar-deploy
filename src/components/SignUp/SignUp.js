import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';




const API_URL = getHostURL();
const AUTH_SIGNUP = `${API_URL}/api/users/signup/`;

function getHostURL() {
  if(window.location.host.indexOf('localhost') !== -1) {
    return 'http://localhost:5000';
  } else {
    return 'https://tobacco-cellar-server.herokuapp.com';
  }
}




class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      password2:'',
      address: '',
      city: '',
      state: '',
      zip: ''
    }

  }




  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }


  addUsers = (event) => {
    event.preventDefault();
    let newUserData = {
      email: this.refs.email.value,
      username: this.refs.username.value,
      password: this.refs.password.value,
      password2: this.refs.password2.value,
      address: this.refs.address.value,
      city: this.refs.city.value,
      state: this.refs.state.value,
      zip: this.refs.zip.value
    }
    this.setState({email: this.state.email, username: this.state.username})
    let request = new Request(AUTH_SIGNUP, {
      method: 'POST',
      headers: new Headers({'Content-Type': 'application/json'}),
      body: JSON.stringify(newUserData)
    });
    fetch(request)
      .then((res) => {
        res.json()
        .then((newUserData) => {
          if(newUserData.message === '✅ Success!') { 
            alert('Thank you for signing up!');
          }
          if(newUserData.message === 'Email in use, nice try, Buck-O') {
            alert(`Sorry, email is already in use`);
          }
          if(newUserData.message === 'Invalid user, /signup') {
            alert('Sorry, invalid user');
          }
            console.log(newUserData)
          });
      });
      this.setState({
        email: '',
        username: '',
        password: '',
        password2:'',
        address: '',
        city: '',
        state: '',
        zip: ''
      });
  }
 

      render() {
        return(
          <div>
            <NavBar /> 
                  <form ref="userAddForm" id="form-card" className="addUsers" method="POST">
                    <h2 className="sign-up-heading">Sign Up</h2>
                    <section className="form-row">
                      <section className="form-group col-md-6">
                        <label htmlFor="email">Email</label>
                        <input type="email" ref="email" value={this.state.email} onChange={this.handleChange}  className="form-control" id="inputEmail4" autoComplete="email" placeholder="Email" name="email"/>
                      </section>
                      <section className="form-group col-md-6">
                        <label htmlFor="username">Username</label>
                        <input type="text" ref="username" value={this.state.username} onChange={this.handleChange} className="form-control" id="username" autoComplete="username" placeholder="Username" name="username"/>
                      </section>
                      <section className="form-group col-md-6">
                        <label htmlFor="password">Password</label>
                        <input type="password" ref="password" value={this.state.password} onChange={this.handleChange} className="form-control" id="inputPassword4" autoComplete="new-password" placeholder="Password" name="password"/>
                      </section>
                      <section className="form-group col-md-6">
                        <label htmlFor="password2">Re-enter Password</label>
                        <input type="password" ref="password2"  value={this.state.password2} onChange={this.handleChange} className="form-control" id="inputPassword5" autoComplete="new-password" placeholder="Password" name="password2"/>
                      </section>
                      </section>
                      <section className="form-group">
                        <label htmlFor="address">Address</label>
                        <input type="text" ref="address" value={this.state.address} onChange={this.handleChange} className="form-control" id="inputAddress" placeholder="1234 Main St" name="address"/>
                      </section>
                      <section className="form-row">
                      <section className="form-group col-md-6">
                        <label htmlFor="city">City</label>
                        <input type="text" ref="city" value={this.state.city} onChange={this.handleChange} className="form-control" id="inputCity" placeholder="City" name="city"/>
                      </section>
                      <section className="form-group col-md-4">
                        <label htmlFor="state">State</label>
                        <select id="state" ref="state" value={this.state.state} onChange={this.handleChange} className="form-control" name="state">
                      <option>Choose...</option>
                      <option>State</option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                    </select>
                    </section>
                    <section className="form-group col-md-2">
                      <label htmlFor="zip">Zip</label>
                      <input type="text" ref="zip" value={this.state.zip} onChange={this.handleChange} className="form-control zip" id="inputZip" placeholder="Zip" name="zip"/>
                    </section>
                    </section>
                    <section className="form-group">
                    <section className="form-check">
                    </section>
                    </section>
                    <button onClick={this.addUsers} type="submit" className="btn btn-primary">Sign Up</button>
                </form>
            <Footer />
         </div>
        );
      }
    }

    export default SignUp;