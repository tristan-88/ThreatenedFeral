import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import './MainPage.css';
import { getAnimals } from '../../store/animal';
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

    const animals = useSelector((state) => state.animal?.animals)
    const photos = animals.photos
    console.log(animals);
    console.log(animals, ' What is here?')
    return (
			<div className="main-page-container">
				<div className="page-title">
					<h1 className="page-title">Endagered Species</h1>
            </div>
            <div className="main-page-quote"><p>{`" We have more to learn from animals than animals have to learn from us."`}
                <br></br>
            {`- Anthony Douglas Williams - Inside the Divine Pattern`}</p></div>
				{animals.map((animal) => (
                    <div className="animal-card-container" key={animal.id}><NavLink to={`/animals/${animal.id}`}>
						<div className="animal-name">{animal.name}</div>
                        <div>
                            <NavLink to={`/animals/${animal.id}`}>
							<img src={animal.photos[0].photo_url} className="animal-image" />
                            </NavLink>
						</div></NavLink>
					</div>
				))}
			</div>
		);
}

export default MainPage;