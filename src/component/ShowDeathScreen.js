import React, { useContext } from "react";
import { ShowContext } from "./Context";
import ryukLaugh from "./Audioclips/ryukLaugh.mp3";
import ShakaPlayer from "shaka-player-react";
import "shaka-player/dist/controls.css";

const ShowDeathScreen = () => {
  const { enteredname } = useContext(ShowContext);
  return (
    <>
      <div>
        <h2 style={{ color: "white", fontSize: "40px" }}>This is decree</h2>
        <br />
        <br />
        <p style={{ color: "white", fontSize: "40px" }}>
          you are ging to die Within few minutes:
          <span style={{ textTransform: "uppercase", color: "red" }}>
            {enteredname}
          </span>
        </p>
        <ShakaPlayer autoPlay src={ryukLaugh} />;
      </div>
      <h1>
        <span>created by:</span>Akhilesh Tripathi
      </h1>
    </>
  );
};

export default ShowDeathScreen;
