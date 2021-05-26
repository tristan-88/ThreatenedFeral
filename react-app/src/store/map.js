//test
//const thunk = getDirections("National Zoo", "San Diego Zoo")
//await thunk(dispatch)
// to get the direction way points

export const getDirections = (origin, destination) => async (dispatch) => {
    const response = await fetch('/api/maps/directions/', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
            origin,
            destination
        })
    })
    console.log(await response.json())
}


//reducers
const initialState = {
	
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}
