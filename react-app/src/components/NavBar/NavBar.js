import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import LogoutButton from "../auth/LogoutButton/LogoutButton";
import Modal from "react-modal";
import LoginForm from '../auth/LoginForm/LoginForm'
import SignUpForm from '../auth/SignUpForm/SignUpForm'
import "./NavBar.css";

Modal.setAppElement(document.getElementById("root"));


const NavBar = () => {
   const user = useSelector((state) => state.session?.user);
	const [modelOpen, setModalOpen] = useState(false)

	const openModal = () => {
		setModalOpen(true)
	}

	const closeModal = () => {
		setModalOpen(false)
	}

	return (
		<div className="nav-container">
			{/* <nav className="nav-bar"> */}
			{/* <div className="nav-elements-container"> */}

			{!user && (
				<>
					<div className="home-button-div">
						<NavLink
							to="/"
							exact={true}
							activeClassName="active"
							className="home-button"
						>
							Home
						</NavLink>
					</div>
					<div>
						{/* <NavLink to="/login" exact={true} activeClassName="active">
							Login
						</NavLink> */}
						<LoginForm />
					</div>
					<div>
						{/* <NavLink to="/sign-up" exact={true} activeClassName="active">
							Sign Up
						</NavLink> */}
						<SignUpForm />
					</div>
				</>
			)}
			{user && (
				<>
					<div className="home-button-div">
						<NavLink
							to="/main"
							exact={true}
							activeClassName="active"
							className="home-button"
						>
							Main Page
						</NavLink>
					</div>
					<div className="user-button-div">
						<NavLink
							to={`/users/${user.id}/`}
							exact={true}
							activeClassName="active"
							className="user-button"
						>
							User Page
						</NavLink>
					</div>
					<LogoutButton />
				</>
			)}
		</div>
	);
};

export default NavBar;
