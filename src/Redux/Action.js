const ADD_COMMENT = "ADD_COMMENT"

const addComment = (commentData) => {
    console.log(commentData)
    return {
          type:ADD_COMMENT,
          // now we added data to comments:
          userId:commentData.userId,
          commentID:commentData.commentID,
          comment:commentData.comment,
         // allUsers:commentData.allUsers
    }   
}

export {addComment};

