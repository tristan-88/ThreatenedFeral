import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { hideForm } from '../../store/editForm'
import { editingComment } from '../../store/animal'
import "./CommentForm.css";

const EditCommentForm = ({comment}) => {
	const dispatch = useDispatch();
	const [currentComment, setCurrentComment] = useState(comment.content);

	const handleSubmit = async (e) => {
		e.preventDefault();
		await dispatch(editingComment({commentId: comment.id, content: currentComment}));
		dispatch(hideForm())
	};

	const createComment = (e) => {
		setCurrentComment(e.target.value);
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<div>
					<label>Comment</label>
					<input
						type="text"
						name="comment"
						onChange={createComment}
						value={currentComment}
					></input>
					<div className='buttons-div'>
						<button className='button-submit' type="submit">Submit</button>
					</div>
					
				</div>
			</form>
		</>
	);
};

export default EditCommentForm