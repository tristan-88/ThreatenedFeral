const SET_ANIMALS = 'animals/SET_ANIMALS';
const GET_ANIMAL = "animal/GET_ANIMAL;";

const setAnimals = (animals) => ({
    type: SET_ANIMALS,
    payload:animals
})

const getAnimal = (animal) => ({
    type: GET_ANIMAL,
    payload: animal
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


//reducers
const initialState = {
    animals: [],
    currentAnimal: null
}
export default function animalReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ANIMALS:
            return {
                ...state,
                animals: [...action.payload] //redundant to spread it on an array brackets
            };
        case GET_ANIMAL:
            return {
                ...state,
                currentAnimal: action.payload
            }
        default:
            return state
    }
}
