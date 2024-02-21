import Monster from "../monster/Monster";
import monsterData from "../../../monster.json";
import "./monsterContainer.css";

const MonsterContainer = () => {
  return (
    <div className="monster-container">
      <h2>Monster container 👹 </h2>
      <div className="monster-box">
        {monsterData.Monsters.flatMap((monster) => (
          <Monster name={monster.name} eyes={monster.eyes}></Monster>
        ))}
      </div>
    </div>
  );
};

export default MonsterContainer;
