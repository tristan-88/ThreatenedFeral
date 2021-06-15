import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import './MainPage.css';
import { getAnimals } from '../../store/animal';
import {favoritingAnimal, unfavoritingAnimal} from '../../store/session'
import { useHistory } from 'react-router';
import {NavLink} from 'react-router-dom'

function MainPage() {
    const history = useHistory();
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user)
   
  

    useEffect(() => {
        if (sessionUser) {
         dispatch(getAnimals());
        
        }
        
    }, [dispatch])

    const animals = useSelector((state) => state.animal.animals)

    //test console logs
    // console.log(animals);
    // console.log(animals, ' What is here?')

    if (!animals) return null
    
    const handleFavorite = async (animal) => {
        await dispatch(favoritingAnimal(animal.id))
        await dispatch(getAnimals())
    } 
    const handleUnfavorite = async (animal) => {
        await dispatch(unfavoritingAnimal(animal.id))
        await dispatch(getAnimals());
    } 

    return (
			<div className="main-page-container">
				<div className="page-title">
					<h1 className="page-title">Endangered Species</h1>
				</div>
				<div className="main-page-quote">
					<p>
						{`" We have more to learn from animals than animals have to learn from us."`}
						<br></br>
						{`- Anthony Douglas Williams - Inside the Divine Pattern`}
					</p>
				</div>
				{Object.values(animals).map((animal) => (
					<div className="animal-card-container" key={animal.id}>
						{sessionUser.fav_anim[animal.id] && (
							<div onClick={() => handleUnfavorite(animal)}>
							<i class="far fa-heart"></i>
							</div>
						)}
						{!sessionUser.fav_anim[animal.id] && (
							<div onClick={() => handleFavorite(animal)}>
								<i class="fas fa-heart"></i>
							</div>
						)}
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
				))}
			</div>
		);
}

export default MainPage;