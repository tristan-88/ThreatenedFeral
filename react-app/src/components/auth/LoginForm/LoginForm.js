import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../../store/session";
import DemoButton from "../DemoButton/DemoButton";
import { Modal } from "react-bootstrap";
import SignUpForm from "../SignUpForm/SignUpForm";
import "./LoginForm.css";
import * as modalAction from "../../../store/modal"

const LoginForm = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.session.user);
	const modalLogIn = useSelector((state) => state.modalReducer.showLogIn)
	const [errors, setErrors] = useState([]);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [show, setShow] = useState(false);
	const { showLogIn, hideLogIn, hideSignUp } = modalAction
	
	useEffect(() => {
		if (modalLogIn === false) {
			setShow(false)
		} else if (modalLogIn === true) {
			setShow(true)
		}
	},[modalLogIn])

	const onLogin = async (e) => {
		e.preventDefault();
		const data = await dispatch(login(email, password));
		if (data.errors) {
			setErrors(data.errors);
		}
	};

	const modalToggle = () => {
		
		dispatch(showLogIn())
		dispatch(hideSignUp())
		
	}

	const cancelAll = () => {
	
		dispatch(hideLogIn())
		dispatch(hideSignUp())
	}

	const updateEmail = (e) => {
		setEmail(e.target.value);
	};

	const updatePassword = (e) => {
		setPassword(e.target.value);
	};

	if (user) {
		return <Redirect to="/" />;
	}

	return (
		<div>
			<div onClick={modalToggle} className="nav-log-in">
				Log In
			</div>
			<Modal
				show={show}
				onHide={cancelAll}
				backdrop="static"
				keyboard={false}
			>
				<Modal.Header closeButton className="close-button">
					<Modal.Title>Log In</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form>
						<div className="form-border">
							<div>
								{errors.map((error, idx) => (
									<div key={idx}>{error}</div>
								))}
							</div>
							<div>
								<label htmlFor="email">Email</label>
								<input
									name="email"
									type="text"
									placeholder="Email"
									value={email}
									onChange={updateEmail}
								/>
							</div>
							<div>
								<label htmlFor="password">Password</label>
								<input
									name="password"
									type="password"
									placeholder="Password"
									value={password}
									onChange={updatePassword}
								/>
								<div className="demo_login_container">
									<button
										className="button-log-in"
										type="submit"
										onClick={onLogin}
									>
										Login
									</button>
									<DemoButton />
								</div>
							</div>
						</div>
					</form>
					<Modal.Footer>
						<div><h2 className="question-form">Do not have an account?</h2><SignUpForm /></div>
						<button className="button-cancel" onClick={cancelAll}>
							cancel
						</button>
					</Modal.Footer>
				</Modal.Body>
			</Modal>
		</div>
	);
};

export default LoginForm;
