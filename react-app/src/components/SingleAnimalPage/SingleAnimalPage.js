/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAnimals, singleAnimal, deletingComment } from "../../store/animal";
import { showForm, hideForm } from "../../store/editForm";
// import MapComponent from "../MapComponent/MapComponent";
import ReactAudioPlayer from "react-audio-player";
import "./SingleAnimalPage.css";
import EditCommentForm from "../CommentForm/EditCommentForm";
import CommentForm from "../CommentForm/CommentForm";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function SingleAnimalPage() {
	//useSelector((state) =>  state.ReducerVariable/name.reducer.objectName
	const { id } = useParams();
	const dispatch = useDispatch();
	const sessionUser = useSelector((state) => state.session.user);
	const editFormStatus = useSelector((state) => state.editForm.showEditForm);
	const [render, setRender] = useState(true);
	const [editId, setEditId] = useState(0);
	const animal = useSelector((state) => state.animal?.currentAnimal);
	const handleDrag = (e) => e.preventDefault();
	const handleEdit = (comment) => {
		dispatch(showForm());
		setEditId(comment.id);
	};

	const handleBack = () => {
		dispatch(hideForm());
	};

	const handleDelete = async (comment) => {
		setRender(true);
		await dispatch(deletingComment(comment));
		// await dispatch(singleAnimal(id))
		// setRender(false);
	};
	const handleSetRender = (render) => {
		if (render) {
			setRender(false);
		}
	};

	const handles = async (comment, render) => {
		await handleDelete(comment)
		await handleSetRender(render)
	}

	useEffect(() => {
		if (sessionUser) {
			dispatch(getAnimals());
			dispatch(singleAnimal(id));
		}
	}, [dispatch, id, sessionUser]);

	if (!animal) return "loading";

	//dynamically push the location from locations table affiliated with the animal
	const locations = [];
	// eslint-disable-next-line array-callback-return
	animal.locations.map((animal) => {
		locations.push({
			name: animal.location_name,
			location: {
				lat: animal.lat,
				lng: animal.lng,
			},
		});
	});

	const items = [];
	// console.log(animal.photos, "PHOTOS");
	for (let photo of animal?.photos) {
		items.push(
			<div className="animal-photo-container">
				<img
					src={photo.photo_url}
					onDragStart={handleDrag}
					alt="no-image"
					className="animal-photo" /*style={{backgroundImage: `url(${photo.photo_url})`}}*/
				/>
				<div className="photo-description">{photo.photo_description}</div>
			</div>
		);
	}
	// console.log(items, "Current");

	return (
		<div className="single-page-container">
			<div className="current_name">{animal.name}</div>
			{/* <CarouselComponent photos={animal.photos} className="photos-carousel" /> */}
			<AliceCarousel mouseTracking items={items} />
			<div className="audio-play-container">
				<div>{`Hear me: `}</div>
				<ReactAudioPlayer
					src={animal.call_cry}
					// autoPlay="true"
					controls={true}
					className="audio-player"
				/>
			</div>

			<hr />
			<div className="description_stats">
				<div className="animal-description">
					<h2>ABOUT</h2>
					{animal.description}
				</div>
				<div className="stats-container">
					<h2>STATUS</h2>
					<div className="animal-status">{animal.fact_1}</div>
					<div className="animal-weight">{animal.fact_2}</div>
					<div className="animal-science-name">{animal.fact_3}</div>
					<div className="animal-size">{animal.fact_4}</div>
					<div className="animal-habitat">{animal.fact_5}</div>
					<div className="animal-population">{animal.fact_6}</div>
				</div>
			</div>

			<hr></hr>
			<div className="threat-container">
				<h2>THREATS</h2>
				<div className="animal-threats">{animal.threats}</div>
			</div>

			<hr />
			<div className="map-loc-container">
				<h2>LOCATION</h2>
				{animal.locations.map((location, index) => (
					<div key={index}>
						<div>
							{`Name: ${location.location_name}
								Lat: ${location.lat}
								Lng: ${location.lng}
								`}
						</div>
					</div>
				))}
				{/* <MapComponent className="map-component" locations={locations} /> */}
			</div>
			<hr />
			<div className="non-profit_container">
				<div className="top-title">
					<h2>NON-PROFIT ORGANIZATIONS: </h2>
				</div>
				{animal.org.map((org, index) => (
					<div className="org-name-link" key={index}>
						<a href={org.non_profit_link} className="org-link">
							{org.non_profit_name}
						</a>
					</div>
				))}
			</div>
			<hr />
			<div className="educator-container">
				<div className="top-title">
					<h2>EDUCATORS: </h2>
				</div>
				{animal.educator.map((edu, index) => (
					<div className="edu-name-link" key={index}>
						<a href={edu.content_link} className="edu-link">
							{edu.educator_name}
						</a>
					</div>
				))}
			</div>
			<hr />
			<div className="comments-container">
				<div className="comment-h2">
					<h2 >COMMENTS</h2>
				</div>

				<CommentForm animalId={animal.id} className="comment-form" />
				<div className="comment-border">
				{Object.values(animal.comment)
					.reverse()
					.map((comment) => (
					
						<div className="single-comment" key={comment.id}>
							<div className="user-name">Author: {comment.user.username}</div>
							<div className="comment-content">Comment:{comment.content}</div>
							{comment.user.id === sessionUser.id && (
								<div>
									<div className="buttons-div">
										<button
											className="button-edit"
											onClick={() => handleEdit(comment)}
										>
											Edit
										</button>
										<button
											className="button-delete"
											onClick={() => handles(comment, render)}
										>
											{/* {handleSetRender(render)} */}
											Delete
										</button>
									</div>
									{editFormStatus && editId === comment.id && (
										<>
											<EditCommentForm comment={comment} />{" "}
											{/* put it in props to be able to pass the current value in the form and then to the initial useState */}
											<div className="buttons-div">
												<button className="button-go-back" onClick={handleBack}>
													Go Back
												</button>
											</div>
										</>
									)}
								</div>
							)}
						</div>
						
					))}
				</div>
			</div>
		</div>
	);
}

export default SingleAnimalPage;
