import React from 'react'
import { Link } from 'react-router-dom'


function Navbar(props) {
    console.log(props.alldata)
 let shoUser = props.alldata.allUsers.map(singleUser => {
     if(singleUser.id == props.alldata.loginUser){
        return(
        <Link class="navbar-brand" to="/home">{singleUser.first_name} {singleUser.last_name}</Link>
        )
     }
    
 })
   
    return (
        <React.Fragment>
            <nav class="navbar navbar-expand-lg navbar-light bg-primary">
            {shoUser}
                <div className="container">
                    
                    <div class="collapse navbar-collapse">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <Link  class="nav-link" to="/home">Home <span class="sr-only">(current)</span></Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Navbar
