import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector} from "react-redux"
import { NavLink, useParams, Link } from "react-router-dom"
import { useHistory } from 'react-router'
import { getAnimals, singleAnimal, deletingComment } from '../../store/animal'
import {showForm, hideForm} from '../../store/editForm'
import MapComponent from '../MapComponent/MapComponent'
import ReactAudioPlayer from 'react-audio-player'
import CarouselComponent from '../Carousel/Carousel'
import './SingleAnimalPage.css'
import EditCommentForm from '../CommentForm/EditCommentForm'
import CommentForm from '../CommentForm/CommentForm'

function SingleAnimalPage() {
	const { id } = useParams();
	const dispatch = useDispatch();
	const sessionUser = useSelector((state) => state.session.user);
	const editFormStatus = useSelector((state) => state.editForm.showEditForm);
	const [render, setRender] = useState(true);
	const [editId, setEditId] = useState(0);


	const handleEdit = (comment) => {
		dispatch(showForm());
		setEditId(comment.id);
	};

	const handleBack = () => {
		dispatch(hideForm());
	};

	const handleDelete = async (comment) => {
		setRender(true);
		await dispatch(deletingComment(comment.id));
		setRender(false);
	};
	
	const animals = useSelector((state) => state.animal.animals);
	const animal = useSelector((state) => state.animal?.currentAnimal);
	
	useEffect(() => {
		if (sessionUser) {
			dispatch(getAnimals());
			dispatch(singleAnimal(id));
		}
	}, [dispatch]);
	
	
	if (!animal) return "loading";
	const locations = []
	animal.locations.map((animal) => {
	
		locations.push(
			{
				name: animal.location_name,
				location: {
					lat: animal.lat,
					lng: animal.lng
				}
			},
		)

	})

	console.log(locations, "LOCATION")
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
				<MapComponent className="map-component" locations={locations} />
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
				<CommentForm animalId={animal.id} />
					COMMENTS
					{Object.values(animal.comment).map((comment) => (
						<div className="single-comment">
							<div className="user-name">User:{comment.user.username}</div>
							<div className="comment-content">Comment:{comment.content}</div>
							{comment.user.id === sessionUser.id && (
								<>
									<button
										onClick={(() => handleEdit(comment))}
									>
										Edit
									</button>
									<button onClick={() => handleDelete(comment)}>Delete</button>
									{editFormStatus && editId === comment.id &&
										<>
										<EditCommentForm comment={comment} /> {/* put it in props to be able to pass the current value in the form and then to the initial useState */}
										<button onClick={handleBack}>Go Back</button>
										</>
									}
								</>
							)}
						</div>
					))}
				</div>
			</div>
		);
}

export default SingleAnimalPage;