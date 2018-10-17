import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classes from './PipeList.module.css';



const API_URL = getHostURL();
const API_PIPES = `${API_URL}/api/pipes/`;

function getHostURL() {
  if(window.location.host.indexOf('localhost') !== -1) {
    return 'http://localhost:8000';
  } else {
    return 'https://capstone-server-tobac-app.herokuapp.com';
  }
}



class PipeList extends Component {
    constructor (props) {
        super(props);
        this.state= {
            pipeData: []
        }
    }

    updateState = (pipeIndex, id) => {
       
    }

    

    componentDidMount() {
        fetch(API_PIPES)
            .then(res => res.json())
            .then(data => this.setState({
                    pipeData: data
                },
                () => console.log('pipes data fetched...:', data)));
    }



    removePipeEntry = (id) => {
        let response = window.confirm('ARE YOU SURE YOU WANT TO DELETE THIS ENTRY?');
        if (!response) {
            return
        } else {
            console.log('this is the delete button plus the array of pipeData:', this);
            let pipeData = this.state.pipeData;
            let pipe = pipeData.find((pipeEntry) => {
                return pipeEntry.id === id;
            });
            console.log(pipe);
            let request = new Request(API_PIPES + id, {
                method: 'DELETE',
            });
            fetch(request)
                .then((res) => {
                    res.json()
                        .then((data) => {
                            console.log(data);
                        });
                });
        };
        window.location.reload();
    };

    



    render() { 
        return ( 
            this.state.pipeData.map((data, index) => {
                return <div className={classes.PipeList} key={data.id}>
                         <div className={classes.container}>
                                <img 
                                  className={classes.pipesImage}
                                  src={data.image} 
                                  alt ={data.blend}                          
                                  />
                            <ul>
                                <li>Brand: {data.brand}</li>
                                <li>Maker: {data.pipeMaker}</li>
                                <li>Year: {data.year}</li>
                                <li>Price: ${data.price}</li>
                                <li>Smooth: {data.smooth ? 'Yes' : 'Nope'}</li>
                                <li>Sandblasted: {data.sandblasted ? 'Yes' : 'Nope' }</li>
                                <li>Source: {data.source}</li>
                                <li>Rating: {data.rating} out of 5 stars.</li>
                            </ul>
                            <div className={classes.btnContainer}>
                                <Link to="/PipesAddForm"><button>add</button></Link>
                                <button onClick={this.removePipeEntry.bind(this, data.id)}>delete</button>
                                <a href="https://q3projectdavem.herokuapp.com/#" target="_blank" rel="noopener noreferrer"><button>Chat</button></a> 
                            </div>
                          </div>         
                     </div>
            })
         );
    }
}
 
export default PipeList;