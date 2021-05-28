import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../../store/session";
import { useHistory } from 'react-router-dom'
import './LogoutButton.css'

const LogoutButton = () => {
  const history = useHistory()
  const dispatch = useDispatch();
  const onLogout = async (e) => {
    await dispatch(logout());
    history.push('/')
  };

  return <div className='log-out-button' onClick={onLogout}>Logout</div>;
};

export default LogoutButton;
