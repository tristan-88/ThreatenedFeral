import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector} from "react-redux"
import { NavLink, useParams, Link } from "react-router-dom"
import { useHistory } from 'react-router'
import { getAnimals, singleAnimal} from '../../store/animal'
import MapComponent from '../MapComponent/MapComponent'
import ReactAudioPlayer from 'react-audio-player'
import CarouselComponent from '../Carousel/Carousel'
import './SingleAnimalPage.css'

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
			<div className="single-page-container">
				<div className="current_name">{animal.name}</div>
				<CarouselComponent photos={animal.photos} className="photos-carousel" />
				<div className="audio-play-container">
					Here me:
					<ReactAudioPlayer
						src={animal.call_cry}
						// autoPlay="true"
						controls="true"
						className="audio-player"
					/>
				</div>

				<div className="animal-description">{animal.description}</div>
				<div className="animal-status">{animal.fact_1}</div>
				<div className="animal-weight">{animal.fact_2}</div>
				<div className="animal-science-name">{animal.fact_3}</div>
				<div className="animal-size">{animal.fact_4}</div>
				<div className="animal-habitat">{animal.fact_5}</div>
				<div className="animal-population">{animal.fact_6}</div>
				<div className="animal-threats">{animal.threats}</div>

				{animal.locations.map((location) => (
					<div>
						<div>
							Name:{location.location_name} Lat:{location.lat} Lng:
							{location.lng}
						</div>
					</div>
				))}
				<MapComponent className="map-component" />
				<div className="non-profit_container">
					NON-PROFIT ORGANIZATIONS
					{animal.org.map((org) => (
						<div className="org-name-link">
							<a href={org.non_profit_link} className="org-link">
								{org.non_profit_name}
							</a>
						</div>
					))}
				</div>
				<div className="educator-container">
					EDUCATORS
					{animal.educator.map((edu) => (
						<div className="edu-name-link">
							<a href={edu.content_link} className="edu-link">
								{edu.educator_name}
							</a>
						</div>
					))}
				</div>
				<div className="comments-container">
					COMMENTS
					{animal.comment.map((comment) => (
						<div className="single-comment">
							<div className="user-name">User:{comment.user.username}</div>
							<div className="comment-content">Comment:{comment.content}</div>
						</div>
					))}
				</div>
			</div>
		);
}

export default SingleAnimalPage;