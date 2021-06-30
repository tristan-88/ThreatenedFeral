import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../../store/session";
import DemoButton from "../DemoButton/DemoButton";
import { Modal } from "react-bootstrap";
import SignUpForm from "../SignUpForm/SignUpForm";
import "./LoginForm.css";

const LoginForm = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.session.user);
	const [errors, setErrors] = useState([]);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [show, setShow] = useState(false);

	const onLogin = async (e) => {
		e.preventDefault();
		const data = await dispatch(login(email, password));
		if (data.errors) {
			setErrors(data.errors);
		}
	};

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
			<div onClick={() => setShow(true)} className="nav-log-in">
				Log In
			</div>
			<Modal
				show={show}
				onHide={() => setShow(false)}
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
						<button className="button-cancel" onClick={() => setShow(false)}>
							cancel
						</button>
					</Modal.Footer>
				</Modal.Body>
			</Modal>
		</div>
	);
};

export default LoginForm;
