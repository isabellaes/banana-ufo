import "./App.css";
import UfoList from "./components/ufolist/UfoList";
import MonsterContainer from "./components/monsterContainer/MonsterContainer";
import AgeCheck from "./components/ageCheck/AgeCheck";
import Menu from "./components/menu/Menu";
import Button from "./components/button/Button";
import { useState } from "react";

const App = () => {
  const [selected, setSelected] = useState();

  const data = ["Age-check 🐸", "Ufo-List 🛸", "Monster 👹"];

  function getContent() {
    switch (selected) {
      case "Age-check 🐸":
        return <AgeCheck></AgeCheck>;
      case "Ufo-List 🛸":
        return <UfoList></UfoList>;
      case "Monster 👹":
        return <MonsterContainer></MonsterContainer>;
      default:
        break;
    }
  }
  return (
    <div className="container">
      <h1>🍌 BANANA-UFO Övningar med komponenter 🛸</h1>
      <ul className="menu">
        {data.map((item) => (
          <li key={item}>
            <Button func={() => setSelected(item)} title={item}></Button>
          </li>
        ))}
      </ul>
      <div>{getContent()}</div>
    </div>
  );
};

export default App;
