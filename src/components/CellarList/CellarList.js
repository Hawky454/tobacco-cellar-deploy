import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import classes from './CellarList.module.css';
import Cellar from '../Cellar/Cellar';


//! this is the actually page that shows, it's all being populated by the Cellar component, originally I would have preferred that the names be reversed but I'm not going to get started on that now.

class CellarList extends Component{
    
    scrollToTop = (event) => {
        window.scrollTo(0, 0);
    }

    scrollToBottom = (el) => {
        this.el.scrollIntoView({ behavior: "smooth" });
      }
    


    render(){
    return(
        <div className={classes.CellarList}>
            <NavBar /> 
              <div className={classes.btnContainer}>
                <button onClick={this.scrollToBottom} className={classes.btn}>Scroll down</button> 
              </div>  
              <div className={classes.container}>
                 <Cellar />
                 <div ref={(el) => { this.el = el;}}>
                 </div>
              </div>
              <div className={classes.btnContainer}>
              <button onClick={this.scrollToTop} className={classes.btn}>Back Up</button> 
          </div>
            <Footer />
        </div>

    );
  }
}

export default CellarList; 