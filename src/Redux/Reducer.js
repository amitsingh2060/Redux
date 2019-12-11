const ADD_COMMENT = "ADD_COMMENT"


const initState = {
    comments:[]
}
const  addingComment = (state = initState, action) => {
    switch(action.type){
        case ADD_COMMENT:

        //making object
        let newComment= {
            userId:action.userId, 
            commentID:action.commentID,
            comment:action.comment,
           // allUsers:action.allUsers
        }
           return{
              // ...state,
              // comments:action.comments      //we carry data from action, and puted in reducer
              // now using empty array, =>
              ...state,
              comments:[...state.comments, newComment]
           }
           default:
               return state

    }
}

export default addingComment;