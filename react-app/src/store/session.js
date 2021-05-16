// constants
const SET_USER = "session/SET_USER";
const REMOVE_USER = "session/REMOVE_USER";
const FAVORITE_ANIMAL = "session/FAVORITE_ANIMAL"
const UNFAVORITE_ANIMAL = "session/UNFAVORITE_ANIMAL"

const setUser = (user) => ({
    type: SET_USER,
    payload: user
})

const removeUser = () => ({
    type: REMOVE_USER
})

const favoriteAnimal = (animalId) => ({
    type: FAVORITE_ANIMAL,
    payload: animalId
})

const unfavoriteAnimal = (animalId) => ({
    type: UNFAVORITE_ANIMAL,
    payload: animalId
})

// thunks

export const favoritingAnimal = (animalId) => async (dispatch) => {
    const response = await fetch("/api/favorites/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				animalId
			}),
    });
    if (response.ok) {
        dispatch(favoriteAnimal(animalId))
    }
}

export const unfavoritingAnimal = (animalId) => async (dispatch) => {
	const response = await fetch("/api/favorites/", {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			animalId,
		}),
	});
	if (response.ok) {
		dispatch(unfavoriteAnimal(animalId));
	}
};

export const authenticate = () => async (dispatch) => {
    const response = await fetch('/api/auth/', {
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const data = await response.json();
    if (data.errors) {
        return;
    }
    dispatch(setUser(data))
    
}

export const login = (email, password) => async (dispatch) => {
    const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    });
    const data = await response.json();
    if (data.errors) {
        return data;
    }
    dispatch(setUser(data));
    return {};
}

export const logout = () => async (dispatch) => {
    const response = await fetch("/api/auth/logout", {
        headers: {
            "Content-Type": "application/json",
        }
    });
    const data = await response.json();
    dispatch(removeUser());
};


export const signUp = (username, email, password, address, city, state, zipcode, avatar_url) => async (dispatch)=> {
    const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username,
            email,
            password,
            address,
            city,
            state,
            zipcode,
            avatar_url
        }),
    });
    const data = await response.json();
    dispatch(setUser(data));
}

// reducer

const initialState = { user: null };

// useSelector(state => state.session.user)

export default function reducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case FAVORITE_ANIMAL:
            newState = Object.assign({}, state)
            newState.user.fav_anim[action.payload] = action.payload
            return newState
        case UNFAVORITE_ANIMAL:
            newState = Object.assign({}, state)
            delete newState.user.fav_anim[action.payload]
            return newState
        case SET_USER:
            return { user: action.payload };
        case REMOVE_USER:
            return { user: null };
        default:
            return state;
    }
}
