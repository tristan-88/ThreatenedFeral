import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import LoginForm from "./components/auth/LoginForm/LoginForm";
import SignUpForm from "./components/auth/SignUpForm/SignUpForm";
import NavBar from "./components/NavBar/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import SplashPage from "./components/SplashPage/SplashPage";
import MainPage from "./components/MainPage/MainPage";
import User from "./components/User/User";
import SingleAnimalPage from "./components/SingleAnimalPage/SingleAnimalPage";
import Footer from "./components/Footer/Footer";
import { authenticate } from "./store/session";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
	
	// const [authenticated, setAuthenticated] = useState(false);
	const dispatch = useDispatch(); //return a function will allow dispatch function to the redux store after dispatch
	const [loaded, setLoaded] = useState(false); //usestate - creates local state similar to useContext for the specific component 

	useEffect(() => {
		//useeffect - runs ones when component initially loads run the function inside. 
		(async () => {
			await dispatch(authenticate());
			setLoaded(true);
		})();
	}, [dispatch]);
	//dependency array every time something changes inside here the useeffect will run again 
	if (!loaded) {
		return null;
	}

	

	return (
		<BrowserRouter>
			<NavBar />
			<Switch>
				<Route path="/login" exact={true}>
					<LoginForm />
				</Route>
				<Route path="/sign-up" exact={true}>
					<SignUpForm />
				</Route>
				<ProtectedRoute path="/users/:id" exact={true}>
					<User />
				</ProtectedRoute>
				<Route path="/" exact={true}>
					<SplashPage />
				</Route>
				<ProtectedRoute path="/main" exact={true}>
					<MainPage />
				</ProtectedRoute>
				<ProtectedRoute path="/animals/:id" exact={true}>
					<SingleAnimalPage />
				</ProtectedRoute>
			</Switch>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
