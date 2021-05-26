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
		
			<nav className="nav-bar">
				<div className="nav-elements-container">
					<div>
						<NavLink to="/" exact={true} activeClassName="active">
							Home
						</NavLink>
					</div>
					{!user && 
						<>			
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
					}
					{user &&
						<>
						<div>
							<NavLink to={`/users/${user.id}/`} exact={true} activeClassName="active">
								User Page
							</NavLink>
						</div>
						<LogoutButton />
					</>}
				
					<div>
						
					</div>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
