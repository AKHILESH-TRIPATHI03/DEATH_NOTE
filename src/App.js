import { useState } from "react";
import Background from "./component/Background";
import { ShowContext } from "./component/Context";
import Main from "./component/main";
import ShowDeathScreen from "./component/ShowDeathScreen";

function App() {
  const [showProfile, setShowprofile] = useState(false);
  const [enteredname, setEnteredName] = useState("");

  return (
    <>
      <Background />

      <ShowContext.Provider
        value={{ enteredname, setEnteredName, setShowprofile }}
      >
        {showProfile ? <ShowDeathScreen /> : <Main />}
      </ShowContext.Provider>
    </>
  );
}

export default App;
