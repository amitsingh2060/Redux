import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'

class Comments extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    
    
    
    render() {

        console.log(this.props.allComments.comments)
           // maping
        let showComments = this.props.allComments.comments.reverse().map(eachComment => {
            return (
                <div class="card mb-3">
                     <div class="row no-gutters">
                         <div class="col-md-4">
                            <img src="..." class="card-img" alt="..."/>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Full Name:</h5>
                                   <p class="card-text">Comment:{eachComment.comment}</p>
                                <Link to={`/edit/${eachComment.commentID}`} className="btn btn-primary mr-5">Edit Comment</Link>
                                <Link to={`/delete/${eachComment.commentID}`} className="btn btn-primary mr-5">Delete Comment</Link>
                            </div>
                        </div>
                    </div>
            </div>
            )
        })
              // *****************************
              
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                           <h2>See All Users Comments</h2>
                          {showComments}
                        </div>
                   </div>
               </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
       allComments: state.comments // taking comments from AllReducer 
    }
}

export default connect(mapStateToProps)(Comments);