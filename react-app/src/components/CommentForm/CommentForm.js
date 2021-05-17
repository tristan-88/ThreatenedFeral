import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from "react-router-dom"
import { postingComment, singleAnimal } from "../../store/animal"
import "./CommentForm.css"

const CommentForm = ({animalId}) => {
    const dispatch = useDispatch()
    const animal = useSelector(state => state.animal.currentAnimal)
    const sessionUser = useSelector(state => state.session.user);
    const [comment, setComment] = useState('')
    const [render, setRender] = useState(true)
    
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
            <form onSubmit={handleSubmit} className='comment-form'>
                <div>
                    <label>Post Comment: </label>
                    <input
                        type="text"
                        name="comment"
                        onChange={createComment}
                        value={comment}
                    ></input>
                    <button type="submit">Submit</button>
                </div>

            </form>
            </>
    )

}
export default CommentForm