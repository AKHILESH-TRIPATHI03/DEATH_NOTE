import React, { useState } from "react";
import "./main.css";

const Main = (props) => {
  const [enteredname, setEnteredName] = useState();

  const inputHandler = (event) => {
    event.preventDefault();
    props.onAddDeath(enteredname);
  };

  const userNameChange = (event) => {
    setEnteredName(event.target.value);
  };
  const Death = () => {
    return alert("you ll die....(- _ -)");
  };

  return (
    <div className="book">
      <div className="back"></div>
      <div className="page6">
        <div className="imp">
          <form onClick={inputHandler}>
            <label>Name To Death</label>
            <input
              type="text"
              id="fname"
              name="fname"
              onChange={userNameChange}
            />
            <button onClick={Death} type="submit">
              way to death
            </button>
          </form>
        </div>
      </div>
      <div className="page5"></div>
      <div className="page4"></div>
      <div className="page3"></div>
      <div className="page2"></div>
      <div className="page1"></div>
      <div className="front"></div>
    </div>
  );
};

export default Main;
