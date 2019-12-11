import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <React.Fragment>
                <div className="container mt-5">
                  <Link to="/comments" className="btn btn-primary mr-5">Comment</Link>
                  <Link to="/write" className="btn btn-danger">Write</Link>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;