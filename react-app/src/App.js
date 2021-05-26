import React, { useState, useEffect } from "react";
import { useDispatch} from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm/LoginForm";
import SignUpForm from "./components/auth/SignUpForm/SignUpForm";
import NavBar from "./components/NavBar/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import SplashPage from './components/SplashPage/SplashPage'
import MainPage from './components/MainPage/MainPage'
import User from "./components/User/User";
import SingleAnimalPage from './components/SingleAnimalPage/SingleAnimalPage'
import Footer from './components/Footer/Footer'
// import { authenticate } from "./services/auth";
import { authenticate } from "./store/session";
import "bootstrap/dist/css/bootstrap.min.css";

const dotenv = require("dotenv").config();


function App() {
  // const [authenticated, setAuthenticated] = useState(false);
  const dispatch = useDispatch()
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async() => {
      await dispatch(authenticate())
      setLoaded(true);
    })();
  }, [dispatch]);

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
				{/* <ProtectedRoute path="/users" exact={true}>
					<User/>
				</ProtectedRoute> */}
				<ProtectedRoute path="/users/:id" exact={true}>
					<User />
				</ProtectedRoute>
				<Route path="/" exact={true}>
					<SplashPage />
				</Route>
				<ProtectedRoute path="/main" exact={true}>
					<MainPage />
        </ProtectedRoute>
        <ProtectedRoute path='/animals/:id' exact={true}>
          <SingleAnimalPage/>
        </ProtectedRoute>
		  </Switch>
		  <Footer />
		</BrowserRouter>
	);
}

export default App;
