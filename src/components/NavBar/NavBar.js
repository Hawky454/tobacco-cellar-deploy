import React from 'react';
import classes from './NavBar.module.css';
import { Link } from 'react-router-dom';



const NavBar = (props) => {
    return(
        <div className={classes.NavBar}>
          <Link to="/"><span className={classes.left}>The Tobacco Cellar</span></Link>
          <Link to="/CellarList"><span className={classes.left}>Cellar</span></Link>
          <Link to="/Pipes"><span className={classes.left}>Pipes</span></Link>
          <section>
            <Link to="/SignUp"><span className={classes.right}>Sign Up</span></Link>
            <Link to="/SignIn"><span onClick={() => props.clicked} className={classes.right}>Log In</span></Link>
          </section>
        </div>
    );
}

export default NavBar;