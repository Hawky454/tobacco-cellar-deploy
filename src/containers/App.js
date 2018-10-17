import React, { Component } from 'react';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import classes from './App.module.css';
import Home from '../components/Home/Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: ''
    }
  }

  


  render() {
    return (
        <div className={classes.App}>
           <NavBar />
             <Home />
           <Footer />
        </div>
    );
  }
}

export default App;
