import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import classes from './CellarAddForm.module.css';



const API_URL = getHostURL();
const API_CELLAR_ADD = `${API_URL}/api/cellar`;

function getHostURL() {
  if(window.location.host.indexOf('localhost') !== -1) {
    return 'http://localhost:5000';
  } else {
    return 'https://tobacco-cellar-server.herokuapp.com';
  }
}



class CellarAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
         image: '',
         age: '',
         brand: '',
         price: '',
         blend: '',
         weight: '',
         purchased: '',
         available: '',
         source: '',
         rating: ''
        }
      }

    
     addTobacco = (event) => {
       event.preventDefault();
       let newCellarData = {
         image: this.refs.image.value,
         age: this.refs.age.value,
         brand: this.refs.brand.value,
         price: this.refs.price.value,
         blend: this.refs.blend.value,
         weight: this.refs.weight.value,
         purchased: this.refs.purchased.value,
         available: this.refs.available.value,
         source: this.refs.source.value,
         rating: this.refs.rating.value
       }
       let request = new Request(API_CELLAR_ADD, {
         method: 'POST',
         headers: new Headers({'Content-Type': 'application/json'}),
         body: JSON.stringify(newCellarData)
       });
       fetch(request)
         .then((res) => {
           res.json()
           .then((newCellarData) => {
             console.log(newCellarData);
           });
         });
         window.location.reload()
        }


     handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value,
      });
       
    }

  

    
    render() { 

        const myBtn = {
           color: 'white',
           textDecoration: 'none'
        }

        return ( 
            <div>
            <NavBar />
            <div className={classes.add}>
            <form ref="cellarAddForm" method="POST">
              <section id="form-card" className="form-card hidden">
                <h3 className="sign-up-heading">Tobacco Add Form:</h3>
                <section className="form-row">
                  <section className="form-group col-md-6">
                    <label htmlFor="image">Image URL</label>
                    <input type="text" ref="image" value={this.state.image} onChange={this.handleChange} className="form-control" placeholder="Image URL" name="image"/>
                  </section>
                  <section className="form-group col-md-6">
                    <label htmlFor="age">Age</label>
                    <input type="text" ref="age" value={this.state.age} onChange={this.handleChange} className="form-control" placeholder="Age" name="age"/>
                  </section>
                  <section className="form-group col-md-6">
                    <label htmlFor="brand">Brand</label>
                    <input type="text" ref="brand" value={this.state.brand} onChange={this.handleChange} className="form-control" placeholder="Brand" name="brand"/>
                  </section>
                  <section className="form-group col-md-6">
                    <label htmlFor="price">Price</label>
                    <input type="text" ref="price" value={this.state.price} onChange={this.handleChange} className="form-control" placeholder="Price" name="price"/>
                  </section>
                </section>
                <section className="form-row">
                  <section className="form-group col-md-6">
                    <label htmlFor="blend">Blend</label>
                    <input type="text" ref="blend" value={this.state.blend} onChange={this.handleChange} className="form-control" placeholder="Blend" name="blend"/>
                  </section>
                  <section className="form-group col-md-6">
                    <label htmlFor="weight">Weight</label>
                    <input type="text" ref="weight" value={this.state.weight} onChange={this.handleChange} className="form-control" placeholder="Weight" name="weight"/>
                  </section>
                  <section className="form-group col-md-6">
                    <label htmlFor="purchased">Purchase Date</label>
                    <input type="text" ref="purchased" value={this.state.purchased} onChange={this.handleChange} className="form-control" placeholder="YYYY-MM-DD" name="purchased"/>
                  </section>
                  <section className="form-group col-md-6">
                    <label htmlFor="available">Available</label>
                    <input type="text" ref="available" value={this.state.available} onChange={this.handleChange} className="form-control" placeholder="True/False" name="available"/>
                  </section>
                  <section className="form-group col-md-6">
                    <label htmlFor="source">Source</label>
                    <input type="text" ref="source" value={this.state.source} onChange={this.handleChange} className="form-control" placeholder="Source" name="source"/>
                  </section>
                  <section className="form-group col-md-6">
                    <label htmlFor="rating">Rating (1 - 5)</label>
                    <input type="text" ref="rating" value={this.state.rating} onChange={this.handleChange} className="form-control" placeholder="Rating (1 - 5)" name="rating"/>
                  </section>
                </section>
                <button onClick={this.addTobacco} type="submit" className="btn btn-primary"><Link to="/CellarList" style={myBtn} >Add Blend!</Link></button>
              </section>
            </form>
          </div>
            <Footer />
          </div>
         );
    }
}
 
export default CellarAddForm;