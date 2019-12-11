import React, { Component } from 'react';
import Login from './components/Login';
import Home from './components/Home';
import Write from './components/Write';
import Comments from './components/Comments';
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Edit from './components/Edit';
import Delete from './components/Delete';


class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
           allUsers:[],
           loginUser:null
    }
  }
   userLogin = (loginData) =>{
     console.log(loginData)
     this.setState({allUsers:loginData.allUsers, loginUser:loginData.loginUser})
   }
  render() {
    // now we will check we are getting data or not from state
   console.log(this.state.loginUser);

   let checkLogin = () => {
     if(this.state.loginUser == null) {
       return(
        <Route path="/" exact render={props => <Login currentUserId={(loginDetails) => this.userLogin(loginDetails )} {...props}/>}/>
       )   
     }
     else {
           return (
            <Navbar alldata={this.state}/>
           )
     }
   }
    return (
      
      <BrowserRouter>
      
        {checkLogin()}
        <Route path="/home" render={props => <Home {...props}/>}/>
        <Route path="/write" render={props => <Write currentUserId={this.state.loginUser} {...props}/>}/>
        <Route path="/comments" render={props => <Comments {...props}/>}/>
        <Route path="/edit/:commentID" render={props => <Edit {...props}/>}/>
        <Route path="/delete/:commentID" render={props => <Delete {...props}/>}/>
      </BrowserRouter>
    );
  }
}

export default App;