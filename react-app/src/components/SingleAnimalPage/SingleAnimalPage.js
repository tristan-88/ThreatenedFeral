import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector} from "react-redux"
import { NavLink, useParams, } from "react-router-dom"
import { useHistory } from 'react-router'
import { getAnimals, singleAnimal} from '../../store/animal'
import MapComponent from '../MapComponent/MapComponent'
import ReactAudioPlayer from 'react-audio-player'
import CarouselComponent from '../Carousel/Carousel'


function SingleAnimalPage() {
    const { id } = useParams()
      const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);

			useEffect(() => {
				if (sessionUser) {
                    dispatch(getAnimals());
                    dispatch(singleAnimal(id))
				}
			}, [dispatch]);

    const animals = useSelector((state) => state.animal.animals);
    const animal = useSelector((state)=> state.animal.currentAnimal)
    if (!animal) {
        return null
    }        
    return (
			<>
				<CarouselComponent photos={animal.photos} />
				<ReactAudioPlayer
                src="cd.textfiles.com/mmplus/MEDIA/WAV/EFFECTS/ANIMALS/TIGER.WAV"
                autoPlay="true"
                controls="true"
				/>
				<div>{animal.name}</div>
				<div>{animal.description}</div>
				<div>{animal.fact_1}</div>
				<div>{animal.fact_2}</div>
				<div>{animal.fact_3}</div>
				<div>{animal.fact_4}</div>
				<div>{animal.fact_5}</div>
				<div>{animal.fact_6}</div>
				<div>{animal.threats}</div>

				{animal.locations.map((location) => (
					<div>
						<div>
							Name:{location.location_name} Lat:{location.lat} Lng:
							{location.lng}
						</div>
					</div>
				))}
				<MapComponent className="map-component" />
			</>
		);
}

export default SingleAnimalPage;