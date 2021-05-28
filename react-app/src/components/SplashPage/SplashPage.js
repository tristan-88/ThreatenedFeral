import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import ReactPlayer from "react-player";
import "./SplashPage.css";
import { getAnimals } from "../../store/animal";
import LoginForm from "../auth/LoginForm/LoginForm";
import SignUpForm from "../auth/SignUpForm/SignUpForm";

function SplashPage() {
	const history = useHistory();
	const dispatch = useDispatch();
	const sessionUser = useSelector((state) => state.session.user);
	const animals = useSelector((state) => state.session.animals);
	if (sessionUser) {
		history.push("/main");
	}
	useEffect(() => {
		// dispatch(getAnimals())
	}, [dispatch]);
	return (
		<div>
			<div className="splash_container">
				<div className="title-page">
					<div className="title">Threatened Feral</div>
					<div className="player">
						<ReactPlayer
							className="react-player"
							url="https://youtu.be/M1IDQSeJ1cs"
							width="1400px"
							height="600px"
							playing={true}
							muted={true}
							loop={true}
							style={{
								zIndex: "-1",
								display: "flex",
								justifySelf: "center",
								alignSelf: "center",
							}}
						/>
						<div className="message-div">
							{` Please `} <SignUpForm />
							{` Or `} <LoginForm />
							{` to be able to access the website`}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SplashPage;
