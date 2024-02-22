const AnimalList = ({ animals, ordered, onlyName }) => {
  if (ordered && onlyName) {
    return (
      <ol>
        {animals.map((animal) => (
          <li>
            <p>{animal.name}</p>
          </li>
        ))}
      </ol>
    );
  } else if (ordered) {
    return (
      <ol>
        {animals.map((animal) => (
          <li>
            <p>{animal.name}</p>
            <p>Legs: {animal.legs}</p>
          </li>
        ))}
      </ol>
    );
  } else if (onlyName) {
    <ul>
      {animals.map((animal) => (
        <li>
          <p>{animal.name}</p>
        </li>
      ))}
    </ul>;
  } else {
    <ul>
      {animals.map((animal) => (
        <li>
          <p>{animal.name}</p>
          <p>Legs: {animal.legs}</p>
        </li>
      ))}
    </ul>;
  }
};

export default AnimalList;
