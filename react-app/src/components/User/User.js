import React, { useState, useEffect } from "react";
import {useSelector, useDispatch} from "react-redux"
import { useParams, NavLink } from "react-router-dom";
import './User.css'

function User() {
  const dispatch = useDispatch()
  const [user, setUser] = useState({});
  // Notice we use useParams here instead of getting the params
  // From props.
  const { userId } = useParams();
  const favoriteAnimals = useSelector((state) => state.session.user.fav_anim)
  const animals = useSelector((state) => state.animal.animals)
   const sessionUser = useSelector((state) => state.session.user);
  useEffect(() => {
    if (!userId) {
      return
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();

  }, [userId]);

  if (!user) {
    return null;
  }

  if (!animals) {
    return null
  }

  for(const key in favoriteAnimals){
  favoriteAnimals[key] =  animals[key]
}


  return (
		<div className="user-page-container">
      <div>
        <h2>USER</h2>
        <div>
          <h3>USER AVATAR</h3>
          <img src={sessionUser.avatar_url} alt="No avatar" className="user-avatar"/>
				</div>
				<div>
					<strong>Username:</strong> {sessionUser.username}
				</div>
				<div>
					<strong>Email:</strong> {sessionUser.email}
				</div>
      </div>
      <div className='favorite-container'>
        <h2>FAVORITE ANIMALS</h2>
        
        {Object.values(favoriteAnimals).map((animal) => (
          <div className="animal-card-container" key={animal.id}>
            
					<NavLink to={`/animals/${animal.id}`}>
						<div className="animal-name">{animal.name}</div>
						<div>
							<NavLink to={`/animals/${animal.id}`}>
								<img
									src={animal.photos[0].photo_url}
									className="animal-image"
                  />
                </NavLink>
						</div>
					</NavLink>
				</div>
			))}</div>
		
		</div>
	);
}
export default User;
