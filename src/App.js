import Background from "./component/Background";
import Deathname from "./component/Deathname";
import { useState } from "react";
import Main from "./component/main";

function App() {
  const [deathlist, setDeathList] = useState([]);
  const addHandler = (dName) => {
    setDeathList((prevDeathList) => {
      return [...prevDeathList, { name: dName, id: Math.random().toString() }];
    });
  };
  return (
    <>
      <Background />

      <Main onAddDeath={addHandler} />
    </>
  );
}

export default App;
