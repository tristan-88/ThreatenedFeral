import React, { useState } from "react";
import { useDispatch } from "react-redux"

import { postingComment, singleAnimal } from "../../store/animal"
import "./CommentForm.css"

const CommentForm = ({animalId}) => {
    const dispatch = useDispatch()
    const [comment, setComment] = useState('')
   
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(postingComment({ content: comment, animalId }))
        setComment('')
        await dispatch(singleAnimal(animalId))
    }

    const createComment = (e) => {
        setComment(e.target.value)
       
    }


    return (
			<>
				<form onSubmit={handleSubmit} className="comment-form">
					<div>
						<label>Post Comment: </label>
						<input
							type="text"
							name="comment"
							onChange={createComment}
							value={comment}
                    ></input>
                    <div className="buttons-div">
                        <button className="button-submit" type="submit">
                            Submit
						</button>
                    </div>
					
					</div>
				</form>
			</>
		);

}
export default CommentForm