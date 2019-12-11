import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom'
class Edit extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             comment:null,
             commentID:null
        }
    }

    componentDidMount() {
        this.props.allComments.comments.map(eachComment => {
            if(eachComment.commentID == this.props.match.params.commentID){
                this.setState({comment:eachComment.comment, commentID: eachComment.commentID})  // comment and commentID taken from write
            }
        })
    }

    inputChange = (commentData) => {
        this.setState({comment:commentData.target.value})
    }

    inputSubmit  = (commentSubmit) => {
        commentSubmit.preventDefault();
       // console.log(this.state)
       this.props.allComments.comments.map(eachComment => {
        if(eachComment.commentID == this.props.match.params.commentID){
            eachComment.comment = this.state.comment
        }
    })
    this.props.history.push('/comments')
       
    }
    
    render() {
       // console.log(this.props)
      // console.log(this.props.allComments)  // checking, we are getting data from mapStateToProps
       console.log(this.props.match.params.commentID)
        return (
            <React.Fragment>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6">
                <form onSubmit={this.inputSubmit}>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">wite your comments</label>
                        <textarea class="form-control" rows="4" value={this.state.comment} onChange={this.inputChange}></textarea>
                        <button className="btn btn-primary mt-2 mr-5">Save Comment</button>
                        <Link  to="/comments" className="btn btn-primary mt-2">Cancel</Link>
                    </div>
                </form>

                       </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => {
     return {
          allComments:state.comments
     }
}

export default connect(mapStateToProps) (Edit);