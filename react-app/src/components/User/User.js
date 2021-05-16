import React, { useState, useEffect } from "react";
import {useSelector, useDispatch} from "react-redux"
import { useParams, NavLink} from "react-router-dom";

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
		<>
			<ul>
				<li>
					<strong>User Id:</strong> {sessionUser.id}
				</li>
				<li>
					<strong>Username:</strong> {sessionUser.username}
				</li>
				<li>
					<strong>Email:</strong> {sessionUser.email}
				</li>
      </ul>
      <div>
        {Object.values(favoriteAnimals).map((animal) => (
          <div className="animal-card-container" key={animal.id}>
            <h2>FAVORITE ANIMALS</h2>
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
		
		</>
	);
}
export default User;
