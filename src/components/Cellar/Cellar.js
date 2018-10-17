import React, { Component } from 'react';
import classes from './Cellar.module.css';
import { Link } from 'react-router-dom';

const API_URL = getHostURL();
const API_CELLAR = `${API_URL}/api/cellar/`;

function getHostURL() {
  if(window.location.host.indexOf('localhost') !== -1) {
    return 'http://localhost:8000';
  } else {
    return 'https://capstone-server-tobac-app.herokuapp.com';
  }
}



class Cellar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cellarData: []
        }
    }

    componentDidMount() {
        fetch(API_CELLAR)
            .then(res => res.json())
            .then(data => this.setState({
                    cellarData: data
                },
                () => console.log('cellar data fetched...:', data)));
    }

    removeCellarEntry = (id) => {
        let response = (window.confirm('ARE YOU SURE YOU WANT TO DELETE THIS ENTRY?'));
        if (!response) {
            return
        } else {
            console.log('this is the delete button plust the array of cellarData:', this);
            let cellarData = this.state.cellarData;
            let tobacco = cellarData.find((cellarEntry) => {
                return cellarEntry.id === id;
            });
            console.log(tobacco);
            let request = new Request(API_CELLAR + id, {
                method: 'DELETE',
            });
            fetch(request)
                .then((res) => {
                    res.json()
                        .then((data) => {
                            console.log(data)
                        });
                });
        };
        window.location.reload();
    };

    
    render() {
    return(
        this.state.cellarData.map((data, index) => {
            return <div className={classes.Cellar} key={data.id}>
                     <div className={classes.container}>
                            <img 
                              className={classes.cellarImage}
                              src={data.image} 
                              alt ={data.blend}                         
                              />
                        <ul>
                            <li>Blend: {data.blend}</li>
                            <li>Brand: {data.brand}</li>
                            <li>Weight: {data.weight} lbs</li>
                            <li>Age: {data.age} years</li>
                            <li>Purchased: {data.purchased.slice(0,10)}</li>
                            <li>Available: {data.available ? 'Yes' : 'Nope (frowny face)' }</li>
                            <li>Price: ${data.price}</li>
                            <li>Source: {data.source}</li>
                            <li>Rating: {data.rating} out of 5 stars.</li>
                        </ul>
                        <div className={classes.btnContainer}>
                            <Link to="/CellarAddForm"><button>add</button></Link>
                            <button onClick={this.removeCellarEntry.bind(this, data.id)} >delete</button>
                            <a href="https://q3projectdavem.herokuapp.com/#" target="_blank" rel="noopener noreferrer"><button>Chat</button></a> 
                        </div>
                      </div>         
                 </div>
             })
        );
     }
}

export default Cellar;