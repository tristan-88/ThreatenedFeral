import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { demoLogin } from "../../../store/session";
import "./DemoButton.css";

const DemoButton = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onClick = async (e) => {
    e.preventDefault();
    const demo = await dispatch(demoLogin());
    if (demo) {
      history.push("/main");
    }
  };

  return (
    <div>
      <button className="button-demo" onClick={onClick}>
        Demo
      </button>
    </div>
  );
};

export default DemoButton;
