import React from "react";

import classes from "./Deathname.module.css";

const Deathname = (props) => {
  return (
    <div className={classes.card}>
      <ul className={classes.deadbody}>
        {props.deadbody.map((dead) => (
          <li key={dead.id}>{dead.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Deathname;
