const SET_ANIMALS = 'animals/SET_ANIMALS';
const GET_ANIMAL = "animal/GET_ANIMAL;";
const DELETE_COMMENT = 'comment/DELETE_COMMENT';
const EDIT_COMMENT = 'comment/EDIT_COMMENT';
const POST_COMMENT = 'comment/POST_COMMENT';

const setAnimals = (animals) => ({
    type: SET_ANIMALS,
    payload:animals
})

const getAnimal = (animal) => ({
    type: GET_ANIMAL,
    payload: animal
})

const postComment = (comment) => ({
    type: POST_COMMENT,
    payload: comment
}) 
const editComment = (comment) => ({
    type: EDIT_COMMENT,
    payload: comment
}) 
const deleteComment = (commentId) => ({
    type: DELETE_COMMENT,
    payload: commentId
}) 


//thunks

export const getAnimals = () => async (dispatch) => {
    const response = await fetch('/api/animals/')
    if (response.ok) {
        const data = await response.json()
        dispatch(setAnimals(data.animals))
        return response
    }
   
}

export const singleAnimal = (id) => async (dispatch) => {
    const response = await fetch(`/api/animals/${id}`)
    const animal = await response.json()
    if (response.ok) {
        dispatch(getAnimal(animal))
        return response
    }
}

export const postingComment = ({content, animalId}) => async (dispatch) => {
    const response = await fetch(`/api/comments/`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
                content,
                animalId
			}),
		});
		const data = await response.json();
		if (response.ok) {
			await dispatch(editComment(data.comment));
		}
}

export const editingComment = ({ commentId, content }) => async (dispatch) => {
    const response = await fetch(`/api/comments/`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
                commentId,
                content
			}),
    });
    const data = await response.json()
    if (response.ok) {
       await dispatch(editComment(data.comment))
    }
}

export const deletingComment = ( commentId ) => async (dispatch) => {
    const response = await fetch(`/api/comments/`, {
        method: 'DELETE',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            commentId,
        })
    })
    if (response.ok) {
        await dispatch(deleteComment(commentId))
        return response
    }
} 

//reducers
const initialState = {
    animals: null,
    currentAnimal: null,
    favoriteAnimals: null
}
export default function animalReducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case SET_ANIMALS:
            return {
                ...state,
                animals: action.payload //redundant to spread it on an array brackets
            };
        case GET_ANIMAL:
            return {
                ...state,
                currentAnimal: action.payload
            }
        case DELETE_COMMENT:
            newState = Object.assign({}, state)
            delete state.currentAnimal.comment[action.payload]
            return newState
        case EDIT_COMMENT:
            newState = Object.assign({}, state)
            state.currentAnimal.comment[action.payload.id] = action.payload
            return newState
        default:
            return state
    }
}
