const HIDE_FORM = 'form/HIDE_FORM'
const SHOW_FORM = 'form/SHOW_FORM'

export const hideForm = () => ({
    type: HIDE_FORM,
})

export const showForm = () => ({
    type: SHOW_FORM,
})

const initialState = {
    showEditForm: false,
}

export default function reducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case HIDE_FORM:
            newState = Object.assign({}, state)
            newState.showEditForm = false
            return newState
        case SHOW_FORM:
            newState = Object.assign({}, state)
            newState.showEditForm = true
            return newState
        default:
            return state
    }
}