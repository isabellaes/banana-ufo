const AnimalList = ({ animals, ordered, onlyName }) => {
  if (ordered && onlyName) {
    return (
      <ol>
        <h2>Ordered list and names only</h2>
        {animals.map((animal) => (
          <li key={animal.name}>
            <p>{animal.name}</p>
          </li>
        ))}
      </ol>
    );
  } else if (ordered) {
    return (
      <ol>
        <h2>Ordered list</h2>
        {animals.map((animal) => (
          <li key={animal.name}>
            <p>{animal.name}</p>
            <p>Legs: {animal.legs}</p>
          </li>
        ))}
      </ol>
    );
  } else if (onlyName) {
    return (
      <ul>
        <h2>Unordered list and names only</h2>
        {animals.map((animal) => (
          <li key={animal.name}>
            <p>{animal.name}</p>
          </li>
        ))}
      </ul>
    );
  } else {
    return (
      <ul>
        <h2>Unordered list</h2>
        {animals.map((animal) => (
          <li key={animal.name}>
            <p>{animal.name}</p>
            <p>Legs: {animal.legs}</p>
          </li>
        ))}
      </ul>
    );
  }
};

export default AnimalList;
