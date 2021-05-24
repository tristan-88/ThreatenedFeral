import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from 'react-router-dom';
import { signUp } from '../../../store/session';

const SignUpForm = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const user = useSelector(state => state.session.user);
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [repeatPassword, setRepeatPassword] = useState("");
	const [address, setAddress] = useState('');
	const [city, setCity] = useState("");
  	const [state, setState] = useState("")
  	const [zipcode, setZipcode] = useState("");
	const [avatar_url, setAvatar_Url] = useState("");
	const [imageLoading, setImageLoading] = useState(false)

	// const handleSubmit = async (e) => {
	// 	e.preventDefault();
	// 	const formData = new FormData()
	// 	formData.append("username", username)
	// 	formData.append("email", email)
	// 	formData.append("password", password)
	// 	formData.append("repeatPassword", repeatPassword)
	// 	formData.append("address", address)
	// 	formData.append("city", city)
	// 	formData.append("state", state)
	// 	formData.append("zipcode", zipcode)
	// 	formData.append("avatar_url", avatar_url)
	// 	setImageLoading(true)

	// 	const res = await fetch('/api/auth/signup', {
	// 		method: "POST",
	// 		body: formData,
	// 	})
	// 	if (res.ok) {
	// 		await res.json();
	// 		setImageLoading(false);
	// 		history.push("/signup")
	// 	} else {
	// 		setImageLoading(false);
	// 		console.log("error")
	// 	}
	// }
	


  const onSignUp = async (e) => {
	e.preventDefault();
	  
	let response;

	const formData = new FormData();
		formData.append("username", username);
		formData.append("email", email);
		formData.append("password", password);
		formData.append("repeatPassword", repeatPassword);
		formData.append("address", address);
		formData.append("city", city);
		formData.append("state", state);
		formData.append("zipcode", zipcode);
		formData.append("avatar_url", avatar_url);
	
    if (password === repeatPassword) {
    //   response =  await dispatch(signUp(username, email, password, address, city, state, zipcode, avatar_url));
      response = await dispatch(signUp(formData));
	}
	if(response.ok){
		history.push('/')
	} else {
		console.log(response, "REPONSE HERE!")
		  alert("NO GOOD!!!")
	}
  };

  const updateAvatar = (e) => {
    setAvatar_Url(e.target.files[0])
  }

  const updateZipCode = (e) => {
     setZipcode(e.target.value)
  }

  const updateState = (e) => {
    setState(e.target.value)
  }

  const updateCity = (e) => {
     setCity(e.target.value)
  }

  const updateAddress = (e) => {
    setAddress(e.target.value);
  }

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
		<form >
			<div>
				<label>User Name</label>
				<input
					type="text"
					name="username"
					onChange={updateUsername}
					value={username}
				></input>
			</div>
			<div>
				<label>Email</label>
				<input
					type="text"
					name="email"
					onChange={updateEmail}
					value={email}
				></input>
			</div>
			<div>
				<label>Password</label>
				<input
					type="password"
					name="password"
					onChange={updatePassword}
					value={password}
				></input>
			</div>
			<div>
				<label>Repeat Password</label>
				<input
					type="password"
					name="repeat_password"
					onChange={updateRepeatPassword}
					value={repeatPassword}
					required={true}
				></input>
			</div>
			<div>
				<label>Address</label>
				<input
					type="text"
					name="address"
					onChange={updateAddress}
					value={address}
				></input>
			</div>
			<div>
				<label>City</label>
				<input
					type="text"
					name="city"
					onChange={updateCity}
					value={city}
				></input>
			</div>
			<div>
				<label>State</label>
				<input
					type="text"
					name="state"
					onChange={updateState}
					value={state}
				></input>
			</div>
			<div>
				<label>Zip Code</label>
				<input
					type="text"
					name="zipcode"
					onChange={updateZipCode}
					value={zipcode}
				></input>
			</div>
			<div>
				<label>Avatar</label>
				{/* <div className="radio-avatar_url">
					<input
						type="radio"
						value="Blue Whale"
						name="avatar"
						onChange={(value) => pickAvatar(value)}
					/>{" "}
					Blue Whale
					<input
						type="radio"
						value="Panda"
						name="avatar"
						onChange={(value) => pickAvatar(value)}
					/>{" "}
					Panda
					<input
						type="radio"
						value="Tiger"
						name="avatar"
						onChange={(value) => pickAvatar(value)}
					/>{" "}
					Tiger
				</div> */}
			  <form>
				  <div className="upload-avatar-box">
					<label className="upload-avatar-label" htmlFor="file">
						Upload a Avatar Photo
					</label>
					<input
						id="file"
						className="input-file"
						name="image"
					  type="file"
					 onChange={updateAvatar}
					/>
			  </div>
			  </form>
				
			</div>
			<button type="submit" onClick= {onSignUp}>Sign Up</button>
		</form>
	);
};

export default SignUpForm;
