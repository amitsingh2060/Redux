import React, { Component } from 'react';
import {connect} from 'react-redux';

import {addComment} from "./../Redux/Action"

class Write extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             comment:''
        }
    }

    inputChange = (commentData) => {
        this.setState({comment:commentData.target.value})
    }

    inputSubmit = (commentSubmit) => {
        commentSubmit.preventDefault();
       // console.log(this.state.comment);

       let randomNumber  = Math.floor(Math.random(2000)*1000)
       console.log(randomNumber);
       let newComment = {
           userId:this.props.currentUserId,
           commentID:randomNumber,
           comment:this.state.comment
       }
       this.props.addComment(newComment)   // sending to dispatchStateToProps
       this.props.history.push('/comments')   // redirect to comment page after clicking on Add comment button [ Write.js page ]
    }
    
    render() {
        //checking, wether we are getting data from app.js or not
        console.log(this.props.currentUserId)    // getting data  from app.js [from (login.js) to app.js]
        
        return (
            <React.Fragment>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6">
                <form onSubmit={this.inputSubmit}>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">wite your comments</label>
                        <textarea class="form-control" rows="4" value={this.state.comment} onChange={this.inputChange}></textarea>
                        <button className="btn btn-primary mt-2">Add Comment</button>
                    </div>
                </form>

                       </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const dispatchStateToProps = (dispatch) => {
    return {
        addComment: (commentData) => dispatch(addComment(commentData))  // sending to Action.js
    }
}

export default connect(null, dispatchStateToProps)(Write)