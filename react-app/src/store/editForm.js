const HIDE_FORM = 'form/HIDE_FORM'
const SHOW_FORM = 'form/SHOW_FORM'

export const hideForm = () => ({
    type: HIDE_FORM,
})

export const showForm = () => ({
    type: SHOW_FORM
})

const initialState = {
    showEditForm:false
}

export default function reducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case HIDE_FORM:
            return { showEditForm: false }
        case SHOW_FORM:
            return { showEditForm: true}
        default:
            return state
    }
}