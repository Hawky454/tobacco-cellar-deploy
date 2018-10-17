import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import PipeList from '../PipeList/PipeList';
import classes from './Pipes.module.css';
import { Link } from 'react-router-dom';


class Pipes extends Component {
  constructor() {
    super();
    this.state = {}
  }

  
  scrollToTop  = (event) => {
    window.scroll(0, 0);

  }
  
  scrollToBottom = (el) => {
    this.el.scrollIntoView({ behavior: "smooth" });
  }
  
 
  render() {
    return(
        <div className={classes.Pipes}>
        <NavBar />
          <div className={classes.btnContainer}>
            <Link to="/Pipes"><button onClick={this.scrollToBottom} className={classes.btn}>Scroll Down</button></Link>   
          </div>
          <div className={classes.container}>
            <PipeList />
            <div ref={(el) => { this.el = el;}}>
            </div>
          </div>
          <div className={classes.btnContainer}>
            <Link to="/Pipes"><button onClick={this.scrollToTop} className={classes.btn}>Back Up</button></Link>   
          </div>
        <Footer />
    </div>
    );
  }
}

export default Pipes;