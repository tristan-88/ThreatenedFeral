import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from "react-router-dom"

const CommentForm = () => {
    const dispatch = useDispatch()
    const animal = useSelector(state => state.animal.currentAnimal)
    const sessionUser = useSelector(state => state.session.user);
    const [content, setContent] = useState('')
    
    const createComment = async (e) => {
        e.preventDefault();
        await dispatch()
    }

}