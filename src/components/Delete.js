import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Delete extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             commentData:null
        }
    }

    componentDidMount() {
        this.props.allComments.comments.map(eachComment => {
            if(eachComment.commentID == this.props.match.params.commentID){
                this.setState({commentData:eachComment})  // comment and commentID taken from write
            }
        })
    }
    
    
    render() {
       // console.log(this.props.allComments)  // checking that we are getting data fromn maptoStateToProps
        console.log(this.state.commentData)  // now checling we are getting data from state
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                           <h2>See All Users Comments</h2>
                           <div class="card mb-3">
                                 <div class="row no-gutters">
                                        <div class="col-md-4">
                                            <img src="..." class="card-img" alt="..."/>
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title">Full Name:</h5>
                                                <p class="card-text">Comment:{this.state.commentData.comment}</p>
                                                <Link to="/" className="btn btn-primary mr-5">Delete Comment</Link>
                                                <Link to="comments" className="btn btn-danger mr-5">Cancel Comment</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                   </div>
               </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
       return{
         allComments: state.comments
       }
}

export default connect(mapStateToProps) (Delete);