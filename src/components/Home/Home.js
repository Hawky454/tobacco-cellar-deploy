import React from 'react';
import classes from './Home.module.css';

const Home = (props) => {
    
    return(
        <div className={classes.Home}>
          <div>
            <div className={classes.container}>
              <section className={classes.card1}>
              </section>
              <section className={classes.card2}>
              </section>
              <section className={classes.card3}>
              </section>
            </div>
          </div>
        </div>
    );
}

export default Home;