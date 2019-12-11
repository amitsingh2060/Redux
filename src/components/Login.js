import React, { Component } from 'react';
import Axios from 'axios';
//import { connect } from 'react-redux';
//import {addComment} from "./../Redux/Action"

class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             allUsers:[],
             loginUser:null
        }
    }

    componentDidMount(){
        Axios.get('https://reqres.in/api/users')
        .then(response => {
           // console.log(response.data.data)
            this.setState({allUsers:response.data.data})
            
        })
    }
    
    userInput = (userData) => {
       this.setState({loginUser:userData.target.value})
    }

    userSubmit = (userClick) => {
        userClick.preventDefault();
        console.log(this.state)
       this.props.currentUserId(this.state)  // sending data to App.js
       this.props.history.push('/home');


       //this.props.allDetails(this.state.allUsers)  // sending data to Action.js (just tried to send)
    }

    render() {
        // checking , getting data or not from state
       // console.log(this.state.allUsers)

        let showUser = this.state.allUsers.map(eachUser => {
            return(
            <option value={eachUser.id}>{eachUser.first_name} {eachUser.last_name}</option>
            )
        })
        return (
            <React.Fragment>
               <div className="container">
                   <div className="row">
                       <div className="col-12">
                        <form onSubmit={this.userSubmit}>
                                <div class="form-row align-items-center mt-5 ml-auto">
                                    <div class="col-auto my-1">
                                    <label class="mr-sm-2 sr-only">Preference</label>
                                    <select class="custom-select mr-sm-2" name="loginUser" onChange={this.userInput}>
                                        <option selected>Choose...</option>
                                    {showUser}
                                        
                                    </select>
                                    </div>
                                    <div class="col-auto my-1">
                                    <button type="submit" class="btn btn-primary">Login</button>
                                    </div>
                                </div>
                        </form>
                     </div>

                   </div>

               </div>
            </React.Fragment>
        );
    }
}

// const dispatchStateToProps = (dispatch) => {
    // return {
        // allDetails: (commentData) => dispatch(addComment(commentData))
    // }
// }

export default Login;