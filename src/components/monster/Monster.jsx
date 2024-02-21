import "./monster.css";

const Monster = ({ name, eyes }) => {
  return (
    <div className="card">
      <p className="colored">Name: {name}</p>
      <p>Eyes: {eyes} 👀</p>
    </div>
  );
};

export default Monster;
