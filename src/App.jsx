import { useState } from "react";
import "./App.css";
import Button from "./components/button/Button";
import UfoList from "./components/ufolist/UfoList";
import MonsterContainer from "./components/monstercontainer/MonsterContainer";

const App = () => {
  const [showList, setShowList] = useState(false);
  const [input, setInput] = useState(0);
  function onClick() {
    if (showList) {
      setShowList(false);
    } else {
      setShowList(true);
    }
  }

  const age = 18;
  function checkAge(age) {
    if (age >= 18) {
      return "Du är 18 år eller äldre";
    } else {
      return "Du är under 18";
    }
  }
  return (
    <div className="container">
      <h1>🍌 Hello World! 🛸</h1>
      <input
        onChange={(e) => setInput(Number(e.currentTarget.value))}
        placeholder="Enter age"
      ></input>
      {input ? <p>{checkAge(input)}</p> : <></>}
      {input > 18 ? <Button props={() => onClick()}></Button> : <></>}

      {showList ? <UfoList></UfoList> : <></>}

      <MonsterContainer></MonsterContainer>
    </div>
  );
};

export default App;
