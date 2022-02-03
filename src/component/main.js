import React, { useContext } from "react";
import "./main.css";
import { ShowContext } from "./Context";

const Main = () => {
  const { setEnteredName, setShowprofile } = useContext(ShowContext);
  // const Death = () => {
  //   return alert("you ll die....(- _ -)");
  // };

  return (
    <>
      <div className="book">
        <div className="back"></div>
        <div className="page6">
          <div className="imp">
            <input
              type="text"
              onChange={(e) => {
                setEnteredName(e.target.value);
              }}
            />
            <button
              onClick={() => {
                setShowprofile(true);
              }}
            >
              way to death
            </button>
          </div>
        </div>
        <div className="page5"></div>
        <div className="page4"></div>
        <div className="page3"></div>
        <div className="page2"></div>
        <div className="page1"></div>
        <div className="front"></div>
      </div>
      <h1>
        <span>created by:</span>Akhilesh Tripathi
      </h1>
    </>
  );
};

export default Main;
