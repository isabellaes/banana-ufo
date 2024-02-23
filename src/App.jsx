import "./App.css";
import UfoList from "./components/ufolist/UfoList";
import MonsterContainer from "./components/monsterContainer/MonsterContainer";
import AgeCheck from "./components/ageCheck/AgeCheck";
import MovieBox from "./components/movieBox/MovieBox";
import Button from "./components/button/Button";
import List from "./components/list/List";
import { useState } from "react";
import DinoInfoBox from "./components/dinoInfoBox/DinoInfoBox";
import AnimalList from "./components/animalListTwo/AnimalList";

const App = () => {
  const [selected, setSelected] = useState();

  const animals = [
    { name: "Horse", legs: 4 },
    { name: "Spider", legs: 8 },
    { name: "Snake", legs: 0 },
  ];

  const data = [
    "Age-check 🐸",
    "Ufo-List 🛸",
    "Monster 👹",
    "Movies 🎬",
    "Animals 🐙",
    "Animals2 🐳",
    "Dino 🦕",
  ];

  function getContent() {
    switch (selected) {
      case "Age-check 🐸":
        return <AgeCheck></AgeCheck>;
      case "Ufo-List 🛸":
        return <UfoList></UfoList>;
      case "Monster 👹":
        return <MonsterContainer></MonsterContainer>;
      case "Movies 🎬":
        return <MovieBox></MovieBox>;
      case "Animals 🐙":
        return (
          <>
            <List animals={["dog", "horse", "cow", "cat"]} ordered={true} />
            <List animals={["dog", "horse", "cow", "cat"]} ordered={false} />
          </>
        );
      case "Animals2 🐳":
        return (
          <>
            <AnimalList animals={animals} ordered={false} onlyName={false} />
            <AnimalList animals={animals} ordered={true} onlyName={true} />
          </>
        );
      case "Dino 🦕":
        return (
          <>
            <DinoInfoBox
              name={"Diplodocus"}
              discoveryYear={"1878"}
              period={"Jurassic"}
              length={"25 meters"}
              weight={"13 tons"}
              image={
                "https://upload.wikimedia.org/wikipedia/commons/f/f7/Misty_Diplodocus.jpg"
              }
              reverse={false}
            ></DinoInfoBox>
            <DinoInfoBox
              name={"Diplodocus"}
              discoveryYear={"1878"}
              period={"Jurassic"}
              length={"25 meters"}
              weight={"13 tons"}
              image={
                "https://upload.wikimedia.org/wikipedia/commons/f/f7/Misty_Diplodocus.jpg"
              }
              reverse={true}
            ></DinoInfoBox>
          </>
        );
      default:
        break;
    }
  }
  return (
    <div className="container">
      <h1>🍌 BANANA-UFO Övningar 🛸</h1>
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
